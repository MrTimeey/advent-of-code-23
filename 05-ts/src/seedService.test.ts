import { expect, test } from 'vitest'
import { getLowestLocation } from './seedService'
import { readFileSync } from 'fs'

const readFileLines = (filename: string): string[] =>
  readFileSync(filename).toString('utf-8').split('\n')

const exampleInput = readFileLines('./src/testInput.txt')

test('Get the lowest location for part one', () => {
  expect(getLowestLocation(exampleInput)).toBe(35)
})
