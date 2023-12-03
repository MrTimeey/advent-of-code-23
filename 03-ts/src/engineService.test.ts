import { expect, test } from 'vitest'
import { sumAllGears, sumAllPartNumbers } from './engineService'

test('Sum of all part numbers', () => {
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
  expect(sumAllPartNumbers(exampleInput)).toBe(4361)
})

test('Sum of all part numbers with longer lines', () => {
  const exampleInput = [
    '........@.....+..........107*.....229....................*............*....%.896./......../..................=...........*.....#............',
    '........991..272.....575.................................958...........917.....*............*.......94.....985...+587...184.................',
    '...............................................657..........................423..........742.367...............................634..........'
  ]
  expect(sumAllPartNumbers(exampleInput)).toBe(7429)
})

test('Sum of all part numbers with values at the end', () => {
  const exampleInput = [
    '.795',
    '*...',
    '....'
  ]
  expect(sumAllPartNumbers(exampleInput)).toBe(795)
})

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
