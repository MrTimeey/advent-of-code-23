import { expect, test } from 'vitest'
import { part1, part2 } from './aService'

const exampleInput = ['']
test('Part 1', () => {
  const result = part1(exampleInput)
  expect(result).toBe(0)
})

test('Part 2', () => {
  const result = part2(exampleInput)
  expect(result).toBe(0)
})
