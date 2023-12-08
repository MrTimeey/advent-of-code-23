import { readFileSync } from 'fs'
import { neededSteps } from './src/navigationService'

const readFileLines = (filename: string): string[] =>
  readFileSync(filename).toString('utf-8').split('\n')

const inputLines = readFileLines('./src/input.txt')

console.log('08.12.2023')
console.log('Total steps', neededSteps(inputLines))
