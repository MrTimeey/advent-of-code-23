import { expect, test } from 'vitest'
import {
  calculateShortestPairDistances,
  expandUniverse,
  getDistance,
  getGalaxies,
  getPairCombinations
} from './galaxyServicePart1'

test('Calculate shortest pair distances', () => {
  const input = [
    '...#......',
    '.......#..',
    '#.........',
    '..........',
    '......#...',
    '.#........',
    '.........#',
    '..........',
    '.......#..',
    '#...#.....'
  ]

  const result = calculateShortestPairDistances(input)

  expect(result).toBe(374)
})

test('Expand galaxy', () => {
  const input = [
    '...#',
    '....',
    '#...'
  ]
  const result = expandUniverse(input.map(r => r.split('')))

  const expectedOutput = [
    '.....#',
    '......',
    '......',
    '#.....'
  ]

  expect(result.map(r => r.join(''))).toStrictEqual(expectedOutput)
})

test('Get galaxies', () => {
  const input = [
    '...#',
    '....',
    '#...'
  ]
  const result = getGalaxies(input.map(r => r.split('')))

  expect(result).length(2)
  expect(result).toContainEqual({ x: 3, y: 0 })
  expect(result).toContainEqual({ x: 0, y: 2 })
})

test('Calculate distance', () => {
  expect(getDistance({ x: 4, y: 0 }, { x: 9, y: 10 })).toBe(15)
  expect(getDistance({ x: 0, y: 2 }, { x: 12, y: 7 })).toBe(17)
  expect(getDistance({ x: 0, y: 11 }, { x: 5, y: 11 })).toBe(5)
})

test('Get pair combinations', () => {
  const input = getPairCombinations([1, 2, 3, 4]) // 1,2 - 1,3 - 1,4 - 2,3 - 2,4 - 3,4

  expect(input).length(6)
  expect(input).toContainEqual([1, 2])
  expect(input).toContainEqual([1, 3])
  expect(input).toContainEqual([1, 4])
  expect(input).toContainEqual([2, 3])
  expect(input).toContainEqual([2, 4])
  expect(input).toContainEqual([3, 4])
})

test('Get pair combinations for example', () => {
  const input = getPairCombinations([1, 2, 3, 4, 5, 6, 7, 8, 9])

  expect(input).length(36)
})
