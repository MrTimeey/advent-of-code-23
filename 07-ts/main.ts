import { readFileSync } from 'fs'
import { calculateTotalWinnings as partOne } from './src/cardServicePartOne'
import { calculateTotalWinnings as partTwo } from './src/cardServicePartTwo'

const readFileLines = (filename: string): string[] =>
  readFileSync(filename).toString('utf-8').split('\n')

const inputLines = readFileLines('./src/input.txt')

console.log('07.12.2023')
console.log('Total winnings part 1', partOne(inputLines))
console.log('Total winnings part 2', partTwo(inputLines))
