import { expect, test } from 'vitest'
import { getCombinedNumber } from './numberService.js'

test('Input "1abc2" converts to 12', () => {
  expect(getCombinedNumber('1abc2')).toBe(12)
})

test('Input "pqr3stu8vwx" converts to 38', () => {
  expect(getCombinedNumber('pqr3stu8vwx')).toBe(38)
})

test('Input "a1b2c3d4e5f" converts to 15', () => {
  expect(getCombinedNumber('a1b2c3d4e5f')).toBe(15)
})

test('Input "treb7uchet" converts to 77', () => {
  expect(getCombinedNumber('treb7uchet')).toBe(77)
})

test('Input "xtwone3four" converts to 24', () => {
  expect(getCombinedNumber('xtwone3four')).toBe(24)
})

test('Input "two1nine" converts to 29', () => {
  expect(getCombinedNumber('two1nine')).toBe(29)
})

test('Input "abcone2threexyz" converts to 13', () => {
  expect(getCombinedNumber('abcone2threexyz')).toBe(13)
})

test('Input "zoneight234" converts to 14', () => {
  expect(getCombinedNumber('zoneight234')).toBe(14)
})

test('Input "4nineeightseven2" converts to 42', () => {
  expect(getCombinedNumber('4nineeightseven2')).toBe(42)
})

test('Input "7pqrstsixteen" converts to 76', () => {
  expect(getCombinedNumber('7pqrstsixteen')).toBe(76)
})

test('Input "eightwothree" converts to 83', () => {
  expect(getCombinedNumber('eightwothree')).toBe(83)
})
test('Input "eighthree" converts to 83', () => {
  expect(getCombinedNumber('eighthree')).toBe(83)
})

test('Input "sevenine" converts to 79', () => {
  expect(getCombinedNumber('sevenine')).toBe(79)
})
