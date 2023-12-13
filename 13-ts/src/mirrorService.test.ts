import { expect, test } from 'vitest'
import { summarizeNotes } from './mirrorService'

test('Summarize notes - Find row part 1', () => {
  const example = [
    '#...##..#',
    '#....#..#',
    '..##..###',
    '#####.##.',
    '#####.##.',
    '..##..###',
    '#....#..#'
  ]
  const result = summarizeNotes(example, 0)
  expect(result).toBe(400)
})

test('Summarize notes - Find col part 1', () => {
  const example = [
    '#.##..##.',
    '..#.##.#.',
    '##......#',
    '##......#',
    '..#.##.#.',
    '..##..##.',
    '#.#.##.#.'
  ]
  const result = summarizeNotes(example, 0)
  expect(result).toBe(5)
})

test('Summarize notes - Find row part 2', () => {
  const example = [
    '#...##..#',
    '#....#..#',
    '..##..###',
    '#####.##.',
    '#####.##.',
    '..##..###',
    '#....#..#'
  ]
  const result = summarizeNotes(example, 1)
  expect(result).toBe(100)
})

test('Summarize notes - Find col part 2', () => {
  const example = [
    '#.##..##.',
    '..#.##.#.',
    '##......#',
    '##......#',
    '..#.##.#.',
    '..##..##.',
    '#.#.##.#.'
  ]
  const result = summarizeNotes(example, 1)
  expect(result).toBe(300)
})
