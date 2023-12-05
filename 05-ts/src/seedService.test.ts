import { expect, test } from 'vitest'
import { getLowestLocation, getLowestLocationBasedOnRanges } from './seedService'
import { readFileSync } from 'fs'

const readFileLines = (filename: string): string[] =>
  readFileSync(filename).toString('utf-8').split('\n')

const exampleInput = readFileLines('./src/testInput.txt')

test('Get the lowest location for part one', () => {
  expect(getLowestLocation(exampleInput)).toBe(35)
})

test('Get the lowest location for part two', () => {
  expect(getLowestLocationBasedOnRanges(exampleInput)).toBe(46)
})
