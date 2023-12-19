export const part1 = (inputLines: string[]): number => {
  const input: InputEntry[] = parseInput(inputLines)
  const radiusLength = input.map((e: InputEntry) => e.length).reduce((acc, val) => acc + val, 0)
  const coordinates = getCoordinates(input)
  return calculateArea(coordinates, radiusLength)
}

export const part2 = (inputLines: string[]): number => {
  let input: InputEntry[] = parseInput(inputLines)
  input = fixInput(input)
  const radiusLength = input.map((e: InputEntry) => e.length).reduce((acc, val) => acc + val, 0)
  const coordinates = getCoordinates(input)
  return calculateArea(coordinates, radiusLength)
}

interface InputEntry {
  direction: 'R' | 'D' | 'L' | 'U'
  length: number
  color: string
}

const directionMapping = {
  R: [1, 0],
  L: [-1, 0],
  U: [0, 1],
  D: [0, -1]
}

const mapDirection = (direction: string): 'R' | 'D' | 'L' | 'U' => {
  if (direction === 'R') return 'R'
  if (direction === 'D') return 'D'
  if (direction === 'L') return 'L'
  return 'U'
}

const parseInput = (inputLines: string[]): InputEntry[] => {
  return inputLines.map(row => {
    const [direction, length, color] = row.split(' ')
    return { direction: mapDirection(direction), length: +length, color }
  })
}

const fixInput = (input: InputEntry[]): InputEntry[] => {
  return input
    .map(i => {
      const dirs = ['R', 'D', 'L', 'U']
      const length = parseInt(i.color.substring(2, 7), 16)
      const directionNumber = parseInt(i.color.substring(7, 8))
      const direction = mapDirection(dirs[directionNumber])
      return { direction, length, color: i.color }
    })
}

const getCoordinates = (input: InputEntry[]): number[][] => {
  const result = [[0, 0]]
  input.forEach(e => {
    const [currentX, currentY] = result[result.length - 1]
    const [directionX, directionY] = directionMapping[e.direction]
    result.push([currentX + directionX * e.length, currentY + directionY * e.length])
  })
  return result
}

const calculateArea = (coordinates: number[][], radiusLength: number): number => {
  // Shoelace formula
  let sum = 0
  for (let i = 0; i < coordinates.length; i++) {
    const next = coordinates[i + 1] ? coordinates[i + 1] : coordinates[0]
    const [x, y] = coordinates[i]
    const [nx, ny] = next
    sum += x * ny - y * nx
  }
  const shoelace = Math.abs(sum / 2)
  return shoelace + radiusLength / 2 + 1
}
