import { getCombinedNumber } from './src/numberService.js'
import { readFileSync } from 'fs'

const readFileLines = (filename) =>
  readFileSync(filename).toString('utf-8').split('\n')

const inputData = readFileLines('./src/input.txt')

const result = inputData
  .map(n => +getCombinedNumber(n))
  .reduce((acc, val) => acc + val, 0)

console.log('01.12.2023')
console.log(`Result: ${result}`)
