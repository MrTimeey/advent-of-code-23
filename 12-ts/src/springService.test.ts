import { expect, test } from 'vitest'
import { calculatePossibleArrangements } from './springService'

test('Calculate possible arrangements', () => {
  expect(calculatePossibleArrangements(['???.### 1,1,3'])).toBe(1)
  expect(calculatePossibleArrangements(['.??..??...?##. 1,1,3'])).toBe(4)
  expect(calculatePossibleArrangements(['?#?#?#?#?#?#?#? 1,3,1,6'])).toBe(1)
  expect(calculatePossibleArrangements(['????.#...#... 4,1,1'])).toBe(1)
  expect(calculatePossibleArrangements(['????.######..#####. 1,6,5'])).toBe(4)
  expect(calculatePossibleArrangements(['?###???????? 3,2,1'])).toBe(10)
})

test('Calculate possible arrangements with list', () => {
  const exampleInput = [
    '???.### 1,1,3',
    '.??..??...?##. 1,1,3',
    '?#?#?#?#?#?#?#? 1,3,1,6',
    '????.#...#... 4,1,1',
    '????.######..#####. 1,6,5',
    '?###???????? 3,2,1'
  ]

  expect(calculatePossibleArrangements(exampleInput)).toBe(21)
})
