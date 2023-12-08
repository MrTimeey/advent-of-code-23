import { type NavigationMap } from './types'

const calculateStepsLcm = (navigationMap: NavigationMap, startingPoint: (val: string) => boolean, endCondition: (val: string) => boolean): number => {
  let steps = 0
  const currentKey: Array<{ key: string, ended: boolean, steps: number }> = Array.from(navigationMap.networkMap.keys()).filter(k => k !== undefined).filter(d => startingPoint(d)).map(k => ({ key: k, ended: false, steps: 0 }))
  while (!currentKey.every(k => k.ended)) {
    const direction = navigationMap.directions[steps % navigationMap.directions.length]
    for (const currentKeyElement of currentKey) {
      if (currentKeyElement.ended) continue
      const currentElement = navigationMap.networkMap.get(currentKeyElement.key) ?? []
      const newElement = direction === 'L' ? currentElement[0] : currentElement[1]
      currentKeyElement.key = newElement
      if (endCondition(newElement)) {
        currentKeyElement.ended = true
        currentKeyElement.steps = steps + 1
      }
    }
    steps++
  }
  const endSteps = currentKey.map(e => e.steps)
  return lcm(endSteps)
}

// Greatest common divisor
function gcd (a: number, b: number): number {
  if (a < b) {
    const tmp = b
    b = a
    a = tmp
  }
  const t = a % b
  return t ? gcd(b, t) : b
}

// Least common multiple
function lcm (arr: number[]): number {
  let n = 1
  for (let i = 0; i < arr.length; i++) {
    n = arr[i] / gcd(arr[i], n) * n
  }
  return n
}

const calculateSteps = (navigationMap: NavigationMap, startingPoint: (val: string) => boolean, endCondition: (val: string) => boolean): number => {
  let steps = 0
  let currentKey: string[] = Array.from(navigationMap.networkMap.keys()).filter(k => k !== undefined).filter(d => startingPoint(d))
  while (!currentKey.every(k => endCondition(k))) {
    const direction = navigationMap.directions[steps % navigationMap.directions.length]
    currentKey = currentKey
      .map(k => {
        const currentElement = navigationMap.networkMap.get(k) ?? []
        return direction === 'L' ? currentElement[0] : currentElement[1]
      })
    steps++
  }

  return steps
}

export const part1 = (input: string[]): number => {
  const navigationMap = parseInput(input)
  return calculateSteps(navigationMap, (val) => val === 'AAA', (val) => val === 'ZZZ')
}

export const part2 = (input: string[]): number => {
  const navigationMap = parseInput(input)
  return calculateStepsLcm(navigationMap, (val) => val.endsWith('A'), (val) => val.endsWith('Z'))
}

export const parseInput = (input: string[]): NavigationMap => {
  const directions = input[0].trimEnd().split('')
  const map = new Map(input.slice(2).map(e => {
    const [,name, left, right] = /^(.*) = \((.*), (.*)\)/.exec(e) ?? []
    return [name, [left, right]]
  }))
  return {
    directions,
    networkMap: map
  }
}
