import { readFileSync } from 'fs'
import { totalSumOfNextNumbers, totalSumOfPreviousNumbers } from './src/predictionService'

const readFileLines = (filename: string): string[] =>
  readFileSync(filename).toString('utf-8').split('\n')

const inputLines = readFileLines('./src/input.txt')

console.log('09.12.2023')
console.log('Total sum of next values', totalSumOfNextNumbers(inputLines))
console.log('Total sum of previous values', totalSumOfPreviousNumbers(inputLines))
