import {input} from "./input.js";
import {getCombinedNumber} from "./numberService.js";

console.log('12', getCombinedNumber('1abc2'))
console.log('38', getCombinedNumber('pqr3stu8vwx'))
console.log('15', getCombinedNumber('a1b2c3d4e5f'))
console.log('77', getCombinedNumber('treb7uchet'))

console.log('29', getCombinedNumber('two1nine'))
console.log('14', getCombinedNumber('zoneight234'))
console.log('13', getCombinedNumber('abcone2threexyz'))
console.log('24', getCombinedNumber('xtwone3four'))
console.log('42', getCombinedNumber('4nineeightseven2'))
console.log('76', getCombinedNumber('7pqrstsixteen'))
console.log('83', getCombinedNumber('eightwothree'))
console.log('83', getCombinedNumber('eighthree'))
console.log('79', getCombinedNumber('sevenine'))

const result = input
    .map(n => getCombinedNumber(n))
    .reduce((acc, val) => +acc + +val, 0)

console.log('01.12.2023')
console.log(`Result: ${result}`)
