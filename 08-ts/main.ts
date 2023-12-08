import { readFileSync } from 'fs'
import { part1, part2 } from './src/navigationService'

const readFileLines = (filename: string): string[] =>
  readFileSync(filename).toString('utf-8').split('\n')

const inputLines = readFileLines('./src/input.txt')

console.log('08.12.2023')
console.log('Total steps part 1', part1(inputLines))
console.log('Total steps part 2', part2(inputLines))
