import { readFileSync } from 'fs'
import { summarizeNotes } from './src/mirrorService'

const readFileLines = (filename: string): string[] =>
  readFileSync(filename).toString('utf-8').trimEnd().split('\n').map(line => line.trimEnd())

const inputLines = readFileLines('./src/input.txt')

console.log('13.12.2023')
console.log('Part 1: ', summarizeNotes(inputLines, 0))
console.log('Part 2: ', summarizeNotes(inputLines, 1))
