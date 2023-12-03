const containsSymbol = (indices: number[], stringLine: string): boolean => {
  for (const index of indices) {
    const char = stringLine.charAt(index)
    if (isNaN(+char) && char !== '.') {
      return true
    }
  }
  return false
}

export const sumAllPartNumbers = (input: string[]): number => {
  const partNumbers = []
  for (let rowIndex = 0; rowIndex < input.length; rowIndex++) {
    const currentLine = input[rowIndex]
    const dummyLine = '.'.repeat(currentLine.length)
    const previousLine = rowIndex > 0 ? input[rowIndex - 1] : dummyLine
    const nextLine = rowIndex < input.length - 1 ? input[rowIndex + 1] : dummyLine

    let currentNumber = ''
    let indices: number[] = []
    for (let charIndex = 0; charIndex <= currentLine.length; charIndex++) {
      const currentChar = currentLine.charAt(charIndex)
      if (isNumeric(currentChar) && currentChar !== '') {
        currentNumber += currentChar
        indices.push(charIndex)
      } else {
        if (currentNumber !== '') {
          if (indices[0] !== 0) indices.unshift(indices[0] - 1)
          if (indices[indices.length - 1] !== currentLine.length - 1) indices.push(indices[indices.length - 1] + 1)
          if (containsSymbol(indices, previousLine) || containsSymbol(indices, currentLine) || containsSymbol(indices, nextLine)) {
            partNumbers.push(+currentNumber)
          }
          currentNumber = ''
          indices = []
        }
      }
    }
  }
  return partNumbers.reduce((acc, val) => acc + val, 0)
}

function getNumber (startingNumberIndex: number, line: string): number {
  let currentVal: string = ''
  for (let charIndex = startingNumberIndex; charIndex <= line.length; charIndex++) {
    const current: string = line.charAt(charIndex)
    if (isNumeric(current)) {
      currentVal += current
    } else {
      break
    }
  }
  return +currentVal
}

function getNumbers (possiblyIndices: number[], line: string): number[] {
  const numbers: number[] = []
  for (const index of possiblyIndices) {
    if (isNumeric(line.charAt(index))) {
      const startingNumberIndex = getFirstNumberIndex(index, line)
      if (startingNumberIndex !== undefined) {
        const number = getNumber(startingNumberIndex, line)
        numbers.push(number)
      }
    }
  }
  return numbers.filter((v: number, i: number) => numbers.indexOf(v) === i)
}

function getFirstNumberIndex (startingIndex: number, line: string): number | undefined {
  let firstIndex
  for (let i = startingIndex; i >= 0; i--) {
    const currentChar = line.charAt(i)
    if (isNumeric(currentChar)) {
      firstIndex = i
    } else {
      return firstIndex
    }
  }
  return firstIndex
}

export const sumAllGears = (input: string[]): number => {
  const gears = []
  for (let rowIndex = 0; rowIndex < input.length; rowIndex++) {
    const currentLine = input[rowIndex]
    for (let charIndex = 0; charIndex <= currentLine.length; charIndex++) {
      const currentChar = currentLine.charAt(charIndex)
      if (currentChar === '*') {
        const possiblyIndices: number[] = [charIndex]
        if (charIndex !== 0) possiblyIndices.unshift(charIndex - 1)
        if (charIndex !== currentLine.length - 1) possiblyIndices.push(charIndex + 1)
        const dummyLine = '.'.repeat(currentLine.length)
        const previousLine = rowIndex > 0 ? input[rowIndex - 1] : dummyLine
        const nextLine = rowIndex < input.length - 1 ? input[rowIndex + 1] : dummyLine
        const collectedNumbers = [...getNumbers(possiblyIndices, previousLine), ...getNumbers(possiblyIndices, currentLine), ...getNumbers(possiblyIndices, nextLine)]
        if (collectedNumbers.length === 2) {
          gears.push(collectedNumbers[0] * collectedNumbers[1])
        }
      }
    }
  }
  return gears.reduce((acc, val) => acc + val, 0)
}

const isNumeric = (val: string): boolean => {
  return !isNaN(+val)
}
