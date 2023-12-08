import { type NavigationMap } from './types'

const calculateSteps = (navigationMap: NavigationMap, startingPoint: string): number => {
  let steps = 0
  let currentKey = startingPoint

  while (currentKey !== 'ZZZ') {
    const direction = navigationMap.directions[steps % navigationMap.directions.length]
    const currentElement = navigationMap.networkMap.get(currentKey) ?? []
    currentKey = direction === 'L' ? currentElement[0] : currentElement[1]
    steps++
  }

  return steps
}

export const neededSteps = (input: string[]): number => {
  const navigationMap = parseInput(input)
  return calculateSteps(navigationMap, 'AAA')
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
