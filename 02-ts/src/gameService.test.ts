import { expect, test } from 'vitest'
import {sumAllPossibleGameIds, sumAllPowerOfMinimumSets} from './gameService'
import {Cubes} from "./types";

const exampleInput = [
  'Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green',
  'Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue',
  'Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red',
  'Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red',
  'Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green'
]

test('Sum all possible game ids', () => {
  const maxDefinition = {
    red: 12,
    green: 13,
    blue: 14
  }
  expect(sumAllPossibleGameIds(exampleInput, maxDefinition)).toBe(8)
})

test('Sum power of all minimum sets', () => {
  expect(sumAllPowerOfMinimumSets(exampleInput)).toBe(2286)
})


