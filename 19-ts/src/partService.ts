type Workflow = Record<string, Mapping[]>
type Part = Record<string, number>

interface Mapping {
  inputValue: string
  condition: (val: number) => boolean
  target: string
}

export const part1 = (inputLines: string[]): number => {
  const [workflowInput, partsInput] = inputLines.join('\n').split('\n\n').map(e => e.split('\n'))
  const workflows = parseWorkflows(workflowInput)
  const parts = parseParts(partsInput)

  const accepted = []
  for (const part of parts) {
    let currentWorkflow = workflows.in
    while (true) {
      const target = currentWorkflow.find(w => w.condition(part[w.inputValue]))?.target ?? ''
      if (target === 'A') {
        accepted.push(part)
        break
      } else if (target === 'R') {
        break
      } else {
        currentWorkflow = workflows[target]
      }
    }
  }
  return accepted
    .map(p => Object.values(p).reduce((acc, val) => acc + val, 0))
    .reduce((acc, val) => acc + val, 0)
}

export const part2 = (inputLines: string[]): number => {
  return 0
}

const workflowRegex = /^(\w+){([^{}]+)}$/
const ruleRegex = /(.*)([<>])(.*):(.*)/

const parseWorkflows = (workflowInput: string[]): Workflow => {
  return workflowInput
    .map(val => val.trimEnd())
    .map(val => {
      const [, name, rules] = workflowRegex.exec(val) ?? []
      const mappings = rules.split(',')
        .map(rule => {
          if (!rule.includes('>') && !rule.includes('<')) {
            return {
              inputValue: '',
              condition: (_: number) => true,
              target: rule
            }
          }
          const [, input, operation, number, target] = ruleRegex.exec(rule) ?? []
          return {
            inputValue: input,
            condition: (val: number) => operation === '>' ? val > +number : val < +number,
            target
          }
        })
      return { [name]: mappings }
    })
    .reduce((acc: Workflow, val: Workflow): Workflow => ({ ...acc, ...val }), {})
}

const parseParts = (partsInput: string[]): Part[] => {
  return partsInput
    .map(val => val.trimEnd().replace('{', '').replace('}', ''))
    .map(val => {
      return val.split(',')
        .map(val => {
          const strings = val.split('=')
          return { [strings[0]]: +strings[1] }
        })
        .reduce((acc: Part, val: Part): Part => ({ ...acc, ...val }), {})
    })
}
