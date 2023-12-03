import { readFileSync } from 'fs'
import { sumAllPartNumbers } from './src/engineServicePartOne'
import { sumAllGears } from './src/engineServicePartTwo'

const readFileLines = (filename: string): string[] =>
  readFileSync(filename).toString('utf-8').split('\n')

const inputLines = readFileLines('./src/input.txt')

console.log('03.12.2023')
console.log('Sum Parts', sumAllPartNumbers(inputLines))
console.log('Sum Gears', sumAllGears(inputLines))
