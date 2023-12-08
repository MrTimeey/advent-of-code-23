import { expect, test } from 'vitest'
import { part1, part2 } from './navigationService'

test('Simple directions', () => {
  const input = [
    'RL',
    '',
    'AAA = (BBB, CCC)',
    'BBB = (DDD, EEE)',
    'CCC = (ZZZ, GGG)',
    'DDD = (DDD, DDD)',
    'EEE = (EEE, EEE)',
    'GGG = (GGG, GGG)',
    'ZZZ = (ZZZ, ZZZ)'
  ]

  const result = part1(input)

  expect(result).toBe(2)
})

test('Repeated directions', () => {
  const input = [
    'LLR',
    '',
    'AAA = (BBB, BBB)',
    'BBB = (AAA, ZZZ)',
    'ZZZ = (ZZZ, ZZZ)'
  ]

  const result = part1(input)

  expect(result).toBe(6)
})

test('Part 2', () => {
  const input = [
    'LR',
    '',
    '11A = (11B, XXX)',
    '11B = (XXX, 11Z)',
    '11Z = (11B, XXX)',
    '22A = (22B, XXX)',
    '22B = (22C, 22C)',
    '22C = (22Z, 22Z)',
    '22Z = (22B, 22B)',
    'XXX = (XXX, XXX)'
  ]

  const result = part2(input)

  expect(result).toBe(6)
})
