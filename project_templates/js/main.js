import { readFileSync } from 'fs'

const readFileLines = (filename) =>
    readFileSync(filename).toString('utf-8').split('\n')

const inputData = readFileLines('./src/input.txt')


console.log('XX.12.2023')
