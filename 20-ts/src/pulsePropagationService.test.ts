import { expect, test } from 'vitest'
import { part1, part2 } from './pulsePropagationService'

test('Part 1 - Example', () => {
  const input = [
    'broadcaster -> a',
    '%a -> inv, con',
    '&inv -> b',
    '%b -> con',
    '&con -> output'
  ]

  const result = part1(input)

  expect(result).toBe(11687500)
})

test('Part 2', () => {
  const result = part2([''])
  expect(result).toBe(0)
})
