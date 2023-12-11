import { expect, test } from 'vitest'
import {
  calculateShortestPairDistances
} from './galaxyServicePart2'

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

  expect(calculateShortestPairDistances(input, 10)).toBe(1030)
  expect(calculateShortestPairDistances(input, 100)).toBe(8410)
})
