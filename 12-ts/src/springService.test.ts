import { expect, test } from 'vitest'
import { part1, getPossibleArrangements, isValidSpringCondition, part2 } from './springService'

test('Calculate possible arrangements', () => {
  expect(part1(['???.### 1,1,3'])).toBe(1)
  expect(part1(['.??..??...?##. 1,1,3'])).toBe(4)
  expect(part1(['?#?#?#?#?#?#?#? 1,3,1,6'])).toBe(1)
  expect(part1(['????.#...#... 4,1,1'])).toBe(1)
  expect(part1(['????.######..#####. 1,6,5'])).toBe(4)
  expect(part1(['?###???????? 3,2,1'])).toBe(10)
})

test('Calculate possible arrangements with list', () => {
  const exampleInput = [
    '???.### 1,1,3',
    '.??..??...?##. 1,1,3',
    '?#?#?#?#?#?#?#? 1,3,1,6',
    '????.#...#... 4,1,1',
    '????.######..#####. 1,6,5',
    '?###???????? 3,2,1'
  ]

  expect(part1(exampleInput)).toBe(21)
})

test('Is valid spring condition', () => {
  expect(isValidSpringCondition('#.#.###', [1, 1, 3])).toBe(true)
  expect(isValidSpringCondition('.#...#....###.', [1, 1, 3])).toBe(true)
  expect(isValidSpringCondition('.#.###.#.######', [1, 3, 1, 6])).toBe(true)
  expect(isValidSpringCondition('####.#...#...', [4, 1, 1])).toBe(true)
  expect(isValidSpringCondition('#....######..#####.', [1, 6, 5])).toBe(true)
  expect(isValidSpringCondition('.###.##....#', [3, 2, 1])).toBe(true)
})

test('Is invalid spring condition', () => {
  expect(isValidSpringCondition('#.#.###', [1, 1, 4])).toBe(false)
  expect(isValidSpringCondition('.#...#....###.', [1, 1])).toBe(false)
  expect(isValidSpringCondition('.#.###.#.######', [1, 3, 7])).toBe(false)
  expect(isValidSpringCondition('####.#...#...', [5, 1, 1])).toBe(false)
  expect(isValidSpringCondition('#....######..#####.', [6, 5])).toBe(false)
  expect(isValidSpringCondition('.###.##....#', [3, 1])).toBe(false)
})

test('Get possible arrangements', () => {
  const result = getPossibleArrangements('???.###')
  expect(result).length(8)
  expect(result).toContainEqual('....###')
  expect(result).toContainEqual('#...###')
  expect(result).toContainEqual('.#..###')
  expect(result).toContainEqual('..#.###')
  expect(result).toContainEqual('##..###')
  expect(result).toContainEqual('#.#.###')
  expect(result).toContainEqual('###.###')
  expect(result).toContainEqual('.##.###')
})

test('Multiply input', () => {
  expect(part2(['.# 1'])).toBe(1)
  expect(part2(['???.### 1,1,3'])).toBe(1)
  expect(part2(['.??..??...?##. 1,1,3'])).toBe(16384)
  expect(part2(['?###???????? 3,2,1'])).toBe(506250)
})
