export interface Cubes {
  blue: number
  red: number
  green: number
}

export interface Game {
  id: number
  rounds: Cubes[]
  minimumCubesNeeded: Cubes
}
