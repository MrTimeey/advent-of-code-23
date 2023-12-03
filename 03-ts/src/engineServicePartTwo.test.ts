import { expect, test } from 'vitest'
import { sumAllGears } from './engineServicePartTwo'

test('Calculate gears', () => {
  const exampleInput = [
    '467..114..',
    '...*......',
    '..35..633.',
    '......#...',
    '617*......',
    '.....+.58.',
    '..592.....',
    '......755.',
    '...$.*....',
    '.664.598..'
  ]
  // 467 * 35 + 755 * 598
  expect(sumAllGears(exampleInput)).toBe(467835)
})

test('Calculate gears with neighbours', () => {
  const exampleInput = [
    '......',
    '344*91',
    '......'
  ]
  expect(sumAllGears(exampleInput)).toBe(31304)
})

test('Calculate gears with mixed', () => {
  const exampleInput = [
    '344...',
    '...*91',
    '......'
  ]
  expect(sumAllGears(exampleInput)).toBe(31304)
})

test('Calculate gears with one line doubled', () => {
  const exampleInput = [
    '344.91',
    '...*..',
    '......'
  ]
  expect(sumAllGears(exampleInput)).toBe(31304)
})
