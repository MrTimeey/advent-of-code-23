import { inputData } from './src/inputData.js'
import { getCombinedNumber } from './src/numberService.js'

const result = inputData
  .map(n => +getCombinedNumber(n))
  .reduce((acc, val) => acc + val, 0)

console.log('01.12.2023')
console.log(`Result: ${result}`)
