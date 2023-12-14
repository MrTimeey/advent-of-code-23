import { readFileSync } from 'fs'
import { part1, part2 } from './src/plattformService'

const readFileLines = (filename: string): string[] =>
  readFileSync(filename).toString('utf-8').trimEnd().split('\n').map(line => line.trimEnd())

const inputLines = readFileLines('./src/input.txt')

console.log('14.12.2023')
console.log('Part 1: ', part1(inputLines))
console.log('Part 2: ', part2(inputLines))
