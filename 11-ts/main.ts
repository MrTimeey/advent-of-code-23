import { readFileSync } from 'fs'
import { calculateShortestPairDistances as part1 } from './src/galaxyServicePart1'
import { calculateShortestPairDistances as part2 } from './src/galaxyServicePart2'

const readFileLines = (filename: string): string[] =>
  readFileSync(filename).toString('utf-8').trimEnd().split('\n')

const inputLines = readFileLines('./src/input.txt')

console.log('11.12.2023')
console.log('Part 1: ', part1(inputLines))
console.log('Part 2: ', part2(inputLines))
