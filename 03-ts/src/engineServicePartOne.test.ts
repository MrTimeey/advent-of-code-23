import { expect, test } from 'vitest'
import { sumAllPartNumbers } from './engineServicePartOne'

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
