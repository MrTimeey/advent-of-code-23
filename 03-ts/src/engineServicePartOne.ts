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

const isNumeric = (val: string): boolean => {
  return !isNaN(+val)
}
