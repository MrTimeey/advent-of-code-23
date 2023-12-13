export const generateCombinations = (size: number): string[] => {
  if (size <= 0) return []

  const result: string[] = []

  const generateRecursive = (combination: string, remainingSize: number): void => {
    if (remainingSize === 0) {
      result.push(combination)
      return
    }

    generateRecursive(combination + '.', remainingSize - 1)
    generateRecursive(combination + '#', remainingSize - 1)
  }

  generateRecursive('', size)

  return result
}
