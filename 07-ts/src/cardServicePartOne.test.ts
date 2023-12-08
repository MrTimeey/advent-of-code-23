import { expect, test } from 'vitest'
import { calculateTotalWinnings, getRank } from './cardServicePartOne'

test('Calculate total winnings', () => {
  const input = [
    '32T3K 765',
    'T55J5 684',
    'KK677 28',
    'KTJJT 220',
    'QQQJA 483'
  ]

  const result = calculateTotalWinnings(input)

  expect(result).toBe(6440)
})

test('Test calculate rank', () => {
  expect(getRank('AAAAA')).toBe(7)
  expect(getRank('AABAA')).toBe(6)
  expect(getRank('BAAAB')).toBe(5)
  expect(getRank('AABBA')).toBe(5)
  expect(getRank('ACBBB')).toBe(4)
  expect(getRank('1BB2B')).toBe(4)
  expect(getRank('BAB2B')).toBe(4)
  expect(getRank('BABA2')).toBe(3)
  expect(getRank('1122B')).toBe(3)
  expect(getRank('112AB')).toBe(2)
  expect(getRank('123AB')).toBe(1)
})
