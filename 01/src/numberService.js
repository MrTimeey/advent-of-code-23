function getFirstNumber (value) {
  let currentVal = ''
  for (const char of value) {
    currentVal += char
    if (!isNaN(char)) return char
    const converted = convertStringNumber(currentVal)
    if (converted.length !== 0 && !isNaN(converted[0])) return converted
  }
  return 0
}

function getLastNumber (value) {
  let currentVal = ''
  for (let i = value.length - 1; i >= 0; i--) {
    const char = value.charAt(i)
    currentVal = char + currentVal
    if (!isNaN(char)) return char
    const converted = convertStringNumber(currentVal)
    if (converted.length !== 0 && !isNaN(converted[0])) return converted[0]
  }
  return 0
}

export function getCombinedNumber (value) {
  const firstNumber = getFirstNumber(value)
  const lastNumber = getLastNumber(value)
  return +(firstNumber + '' + lastNumber)
}

function convertStringNumber (value) {
  return [
    { label: 'one', number: 1 },
    { label: 'two', number: 2 },
    { label: 'three', number: 3 },
    { label: 'four', number: 4 },
    { label: 'five', number: 5 },
    { label: 'six', number: 6 },
    { label: 'seven', number: 7 },
    { label: 'eight', number: 8 },
    { label: 'nine', number: 9 }]
    .filter(n => value.includes(n.label))
    .map(v => v.number)
}
