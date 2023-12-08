import { expect, test } from 'vitest'
import { calculateTotalWinnings, getRank } from './cardServicePartTwo'

test('Calculate total winnings', () => {
  const input = [
    '32T3K 765',
    'T55J5 684',
    'KK677 28',
    'KTJJT 220',
    'QQQJA 483'
  ]

  const result = calculateTotalWinnings(input)

  expect(result).toBe(5905)
})

test('Calculate total winnings more complex example', () => {
  const input = [
    '2345A 1',
    'Q2KJJ 13',
    'Q2Q2Q 19',
    'T3T3J 17',
    'T3Q33 11',
    '2345J 3',
    'J345A 2',
    '32T3K 5',
    'T55J5 29',
    'KK677 7',
    'KTJJT 34',
    'QQQJA 31',
    'JJJJJ 37',
    'JAAAA 43',
    'AAAAJ 59',
    'AAAAA 61',
    '2AAAA 23',
    '2JJJJ 53',
    'JJJJ2 41'
  ]

  const result = calculateTotalWinnings(input)

  expect(result).toBe(6839)
})

test('Calculate total winnings edge case', () => {
  const input = [
    'JJJJJ 5',
    '22222 1'
  ]

  const result = calculateTotalWinnings(input)

  expect(result).toBe(7)
})

test('Calculate total winnings other edge case', () => {
  const input = [
    'J5432 5',
    '24566 1'
  ]

  const result = calculateTotalWinnings(input)

  expect(result).toBe(7)
})

test('Calculate rank', () => {
  expect(getRank('J8787')).toBe(5)
  expect(getRank('77QQJ')).toBe(5)
  expect(getRank('9JTTT')).toBe(6)
  expect(getRank('AJJ94')).toBe(4)
})
