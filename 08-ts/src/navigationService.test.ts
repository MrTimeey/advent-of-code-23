import { expect, test } from 'vitest'
import { neededSteps } from './navigationService'

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

  const result = neededSteps(input)

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

  const result = neededSteps(input)

  expect(result).toBe(6)
})
