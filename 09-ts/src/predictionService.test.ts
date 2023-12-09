import { expect, test } from 'vitest'
import { totalSumOfNextNumbers, totalSumOfPreviousNumbers } from './predictionService'

test('Calculate next number', () => {
  expect(totalSumOfNextNumbers(['0 3 6 9 12 15'])).toBe(18)
  expect(totalSumOfNextNumbers(['1 3 6 10 15 21'])).toBe(28)
  expect(totalSumOfNextNumbers(['10 13 16 21 30 45'])).toBe(68)
})

test('Calculate next number with multiple numbers', () => {
  const result = totalSumOfNextNumbers(['0 3 6 9 12 15', '1 3 6 10 15 21', '10 13 16 21 30 45'])
  expect(result).toBe(114)
})

test('Calculate previous number', () => {
  expect(totalSumOfPreviousNumbers(['0 3 6 9 12 15'])).toBe(-3)
  expect(totalSumOfPreviousNumbers(['1 3 6 10 15 21'])).toBe(0)
  expect(totalSumOfPreviousNumbers(['10 13 16 21 30 45'])).toBe(5)
})

test('Calculate previous number with multiple lines', () => {
  expect(totalSumOfPreviousNumbers(['0 3 6 9 12 15', '1 3 6 10 15 21', '10 13 16 21 30 45'])).toBe(2)
})
