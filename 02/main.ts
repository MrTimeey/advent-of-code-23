import {type Cubes} from './src/types'
import {sumAllPossibleGameIds, sumAllPowerOfMinimumSets} from './src/gameService'
import {readFileSync} from 'fs';

const readFileLines = (filename: string) =>
    readFileSync(filename).toString('utf-8').split('\n');

const inputLines = readFileLines('./src/input.txt');

const maxDefinition: Cubes = {
  red: 12,
  green: 13,
  blue: 14
}

console.log('02.12.2023')
console.log('Sum of all possible game ids',sumAllPossibleGameIds(inputLines, maxDefinition))
console.log('Sum of all powers of the minimum sets',sumAllPowerOfMinimumSets(inputLines))
