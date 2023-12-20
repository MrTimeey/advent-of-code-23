type Modules = Record<string, Module>

interface Module {
  type: ModuleType
  name: string
  targets: string[]
  memory: Record<string, string>
}
type ModuleType = 'FLIPFLOP' | 'CONJUNCTION' | 'BROADCAST'

interface QueueEntry {
  name: string
  target: string
  pulse: string
}

export const getType = (type: string): ModuleType => {
  if (type === '%') {
    return 'FLIPFLOP'
  } else if (type === '&') {
    return 'CONJUNCTION'
  }
  return 'BROADCAST'
}

export const part1 = (inputLines: string[]): number => {
  const modules: Record<string, Module> = inputLines
    .map(row => {
      const [moduleInput, targets] = row.split('->')
      const type = getType(moduleInput.trim().substring(0, 1))
      const name = type !== 'BROADCAST' ? moduleInput.trim().substring(1) : 'broadcast'
      return { type, name, targets: targets.trim().split(',').map(v => v.trim()), memory: {} }
    })
    .reduce((acc: Modules, val: Module) => ({ ...acc, [val.name]: val }), {})

  // Initialize memory
  for (const module of Object.values(modules)) {
    for (const target of module.targets) {
      if (modules[target] && modules[target].type === 'CONJUNCTION') {
        modules[target].memory = Object.assign(modules[target].memory, { [module.name]: 'low' })
      } else if (modules[target] && modules[target].type === 'FLIPFLOP') {
        modules[target].memory.flip = 'off'
      }
    }
  }

  let lowPulse = 0
  let highPulse = 0
  for (let i = 0; i < 1000; i++) {
    lowPulse += 1
    const queue: QueueEntry[] = []
    modules.broadcast.targets.map(t => ({ name: 'broadcaster', target: t, pulse: 'low' })).forEach(e => queue.push(e))
    while (queue.length !== 0) {
      const entry = queue.shift()
      if (!entry) break
      if (entry.pulse === 'low') {
        lowPulse += 1
      } else {
        highPulse += 1
      }
      if (!Object.keys(modules).includes(entry.target)) {
        continue
      }
      const module = modules[entry.target]
      if (module.type === 'FLIPFLOP') {
        if (entry.pulse === 'low') {
          modules[entry.target].memory.flip = modules[entry.target].memory.flip === 'on' ? 'off' : 'on'
          const outgoing = modules[entry.target].memory.flip === 'on' ? 'high' : 'low'
          for (const target of module.targets) {
            queue.push({ name: module.name, target, pulse: outgoing })
          }
        }
      } else if (module.type === 'CONJUNCTION') {
        const targetModule = modules[entry.target]
        modules[entry.target].memory[entry.name] = entry.pulse
        const outgoing = Object.values(targetModule.memory).every(s => s === 'high') ? 'low' : 'high'
        for (const target of module.targets) {
          queue.push({ name: module.name, target, pulse: outgoing })
        }
      }
    }
  }
  return lowPulse * highPulse
}

export const part2 = (inputLines: string[]): number => {
  return 0
}
