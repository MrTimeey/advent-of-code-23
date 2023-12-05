import { readFileSync } from 'fs'
import { getLowestLocation, getLowestLocationBasedOnRanges } from './src/seedService'

const readFileLines = (filename: string): string[] =>
  readFileSync(filename).toString('utf-8').split('\n')

const inputLines = readFileLines('./src/input.txt')

console.log('05.12.2023')

console.log('Lowest location part one', getLowestLocation(inputLines))
console.log('Part 2 is slow as hell!')
console.log('Lowest location part two', getLowestLocationBasedOnRanges(inputLines))
