import { readFileSync } from 'fs'
import { getLowestLocation } from './src/seedService'

const readFileLines = (filename: string): string[] =>
  readFileSync(filename).toString('utf-8').split('\n')

const inputLines = readFileLines('./src/input.txt')

console.log('05.12.2023')

console.log('Lowest location', getLowestLocation(inputLines))
