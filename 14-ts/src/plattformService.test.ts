import { expect, test } from 'vitest'
import { part1, part2 } from './plattformService'

test('Example part 1', () => {
  const input = [
    'O....#....',
    'O.OO#....#',
    '.....##...',
    'OO.#O....O',
    '.O.....O#.',
    'O.#..O.#.#',
    '..O..#O..O',
    '.......O..',
    '#....###..',
    '#OO..#....'
  ]
  const result = part1(input)
  expect(result).toBe(136)
})

test('Example part 2', () => {
  const input = [
    'O....#....',
    'O.OO#....#',
    '.....##...',
    'OO.#O....O',
    '.O.....O#.',
    'O.#..O.#.#',
    '..O..#O..O',
    '.......O..',
    '#....###..',
    '#OO..#....'
  ]
  const result = part2(input)
  expect(result).toBe(64)
})
