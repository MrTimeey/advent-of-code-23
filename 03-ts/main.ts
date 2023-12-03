import { readFileSync } from 'fs'
import { sumAllGears, sumAllPartNumbers } from './src/engineService'

const readFileLines = (filename: string): string[] =>
  readFileSync(filename).toString('utf-8').split('\n')

const inputLines = readFileLines('./src/input.txt')

console.log('03.12.2023')
console.log('Sum Parts', sumAllPartNumbers(inputLines))
console.log('Sum Gears', sumAllGears(inputLines))
