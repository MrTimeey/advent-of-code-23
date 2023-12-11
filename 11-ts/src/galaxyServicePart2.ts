import { type EmptyIndices, type Position } from './types'
import { getPairCombinations } from './galaxyServicePart1'

export const calculateShortestPairDistances = (inputLines: string[], expansion = 1000000): number => {
  const input = inputLines.map(line => line.trimEnd().split(''))
  const galaxies = getGalaxies(input)
  const emptyIndices = getEmptyIndices(input, galaxies)
  return getPairCombinations(galaxies)
    .map(pair => getDistance(pair[0], pair[1], emptyIndices, expansion))
    .reduce((acc, val) => acc + val, 0)
}

const getEmptyIndices = (input: string[][], galaxies: Position[]): EmptyIndices => {
  let emptyYNumbers = input.map((_, i) => i)
  let emptyXNumbers = input[0].map((_, i) => i)
  galaxies.forEach(g => {
    emptyYNumbers = emptyYNumbers.filter(n => n !== g.y)
    emptyXNumbers = emptyXNumbers.filter(n => n !== g.x)
  })
  return {
    emptyYNumbers,
    emptyXNumbers
  }
}

export const getGalaxies = (universe: string[][]): Position[] => {
  const result = []
  for (let y = 0; y < universe.length; y++) {
    for (let x = 0; x < universe[y].length; x++) {
      if (universe[y][x] === '#') result.push({ x, y })
    }
  }
  return result
}

export const getDistance = (pos1: Position, pos2: Position, emptyDistances: EmptyIndices, expansion: number): number => {
  const maxY = Math.max(pos1.y, pos2.y)
  const minY = Math.min(pos1.y, pos2.y)
  const minX = Math.min(pos1.x, pos2.x)
  const maxX = Math.max(pos1.x, pos2.x)

  const emptyRowCount = emptyDistances.emptyYNumbers.filter(y => y < maxY && y > minY).length
  const emptyColCount = emptyDistances.emptyXNumbers.filter(x => x < maxX && x > minX).length

  const distanceX = (maxX - minX) + (expansion - 1) * emptyColCount
  const distanceY = (maxY - minY) + (expansion - 1) * emptyRowCount

  return distanceX + distanceY
}
