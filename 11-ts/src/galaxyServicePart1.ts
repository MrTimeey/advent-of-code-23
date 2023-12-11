import { type Position } from './types'

export const calculateShortestPairDistances = (inputLines: string[]): number => {
  const input = inputLines.map(line => line.trimEnd().split(''))
  const expandedUniverse = expandUniverse(input)
  const galaxies = getGalaxies(expandedUniverse)
  const galaxyPairs = getPairCombinations(galaxies)
  return galaxyPairs
    .map(pair => getDistance(pair[0], pair[1]))
    .reduce((acc, val) => acc + val, 0)
}

export const getGalaxies = (universe: string[][]): Position[] => {
  const result = []
  for (let y = 0; y < universe.length; y++) {
    for (let x = 0; x < universe[y].length; x++) {
      const char = universe[y][x]
      if (char === '#') result.push({ x, y })
    }
  }
  return result
}

export const expandUniverse = (galaxy: string[][]): string[][] => {
  const result = galaxy.slice()
  for (let y = 0; y < result.length; y++) {
    if (result[y].every(v => v === '.')) {
      result.splice(y, 0, result[y].slice())
      y++
    }
  }

  for (let x = 0; x < result[0].length; x++) {
    if (result.map((row) => row[x]).every(v => v === '.')) {
      result.forEach(row => row.splice(x, 0, '.'))
      x++
    }
  }
  return result
}

export const getDistance = (pos1: Position, pos2: Position): number => {
  const { x: x1, y: y1 } = pos1
  const { x: x2, y: y2 } = pos2
  return Math.abs(x2 - x1) + Math.abs(y2 - y1)
}

export const getPairCombinations = (input: any[]): any[][] => {
  const result: any[][] = []

  for (let i = 0; i < input.length; i++) {
    const curr = input[i]
    for (let y = i + 1; y < input.length; y++) {
      result.push([curr, input[y]])
    }
  }
  return result
}
