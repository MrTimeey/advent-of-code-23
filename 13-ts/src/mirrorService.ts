export const summarizeNotes = (inputLines: string[], allowedErrors: number): number => {
  return inputLines.join('\n').split('\n\n')
    .map(input => input.split('\n'))
    .map(grid => {
      let result = 0
      const row = findMirror(grid, allowedErrors)
      const col = findMirror(flip(grid), allowedErrors)
      result += row * 100
      result += col
      return result
    })
    .reduce((acc, val) => acc + val, 0)
}

const findMirror = (grid: string[], allowedErrors: number): number => {
  for (let i = 1; i < grid.length; i++) {
    let gridAbove = grid.slice(0, i).reverse()
    let gridBelow = grid.slice(i)
    const comparisonLength = Math.min(gridAbove.length, gridBelow.length)
    gridAbove = gridAbove.slice(0, comparisonLength)
    gridBelow = gridBelow.slice(0, comparisonLength)
    let errorsCounted = 0
    for (let gridIndex = 0; gridIndex < comparisonLength; gridIndex++) {
      for (let lineIndex = 0; lineIndex < gridBelow[gridIndex].length; lineIndex++) {
        if (gridAbove[gridIndex].charAt(lineIndex) !== gridBelow[gridIndex].charAt(lineIndex)) {
          errorsCounted++
        }
      }
    }
    if (errorsCounted === allowedErrors) return i
  }
  return 0
}

const flip = (grid: string[]): string[] => {
  const inputGrid = grid.map(row => row.split(''))
  const flipped = inputGrid[0].map((_, j) => inputGrid.map((_, i) => inputGrid[i][j]))
  return flipped.map(row => row.join(''))
}
