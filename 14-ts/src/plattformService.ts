export const part1 = (inputLines: string[]): number => {
  let grid = flip(inputLines)
  grid = grid.map(row => shift(row))
  grid = flip(grid)
  return getLoad(grid)
}

export const part2 = (inputLines: string[]): number => {
  let grid = inputLines
  const fullCycle = (grid: string[]): string[] => {
    for (let i = 0; i < 4; i++) {
      grid = rotateClockwise(grid)
    }
    return grid
  }

  const seenGrids: string[][] = [grid]
  let cycleEnd = 0
  for (let i = 1; i < 10000; i++) {
    grid = fullCycle(grid)
    if (seenGrids.some(seen => seen.join(',') === grid.join(','))) {
      cycleEnd = i
      break
    }
    seenGrids.push(grid)
  }
  const cycleStart = seenGrids.findIndex(seen => seen.join(',') === grid.join(','))

  grid = seenGrids[(1000000000 - cycleStart) % (cycleEnd - cycleStart) + cycleStart]

  return getLoad(grid)
}

const rotateClockwise = (input: string[]): string[] => {
  let grid = flip(input)
  grid = grid.map(row => shift(row))
  return grid.map(row => row.split('').reverse().join(''))
}

const shift = (row: string): string => {
  return row.split('#')
    .map(e => e.split('').sort((a, b) => (a > b ? -1 : 1)).join(''))
    .join('#')
}

const flip = (grid: string[]): string[] => {
  const inputGrid = grid.map(row => row.split(''))
  const flipped = inputGrid[0].map((_, j) => inputGrid.map((_, i) => inputGrid[i][j]))
  return flipped.map(row => row.join(''))
}

const getLoad = (grid: string[]): number => {
  return grid
    .map((row, i) => (row.match(/O/g)?.length ?? 0) * (grid.length - i))
    .reduce((acc, val) => acc + val, 0)
}
