import { readFileSync } from 'fs';

const readFileLines = (filename: string) =>
    readFileSync(filename).toString('utf-8').split('\n');

const inputLines = readFileLines('./src/input.txt');

console.log('XX.12.2023')
