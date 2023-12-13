import { expect, test } from 'vitest'
import { generateCombinations } from './combinationUtils'

test('Generate combinations - Size 1', () => {
  const result = generateCombinations(1)

  expect(result).length(2)
  expect(result).contains('.')
  expect(result).contains('#')
})

test('Generate combinations - Size 2', () => {
  const result = generateCombinations(2)

  expect(result).length(4)
  expect(result).contains('..')
  expect(result).contains('.#')
  expect(result).contains('#.')
  expect(result).contains('##')
})

test('Generate combinations - Size 3', () => {
  const result = generateCombinations(3)

  expect(result).length(8)
  expect(result).toStrictEqual(['...', '..#', '.#.', '.##', '#..', '#.#', '##.', '###'])
})
