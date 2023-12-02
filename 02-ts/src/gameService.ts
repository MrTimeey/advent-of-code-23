import type { Cubes, Game } from './types'

const redRegex = /([0-9]*) red/
const greenRegex = /([0-9]*) green/
const blueRegex = /([0-9]*) blue/

function getAmount (input: string, regExp: RegExp): number {
  const match = input.match(regExp)
  return match !== null && match?.length > 0 ? +match[1] : 0
}

function toGame (inputLine: string): Game {
  const input = inputLine.split(':')
  const gameId = input[0].replace('Game ', '')
  const gamesInput = input[1].split(';')
  const games = gamesInput
    .map(g => {
      const redCubes = getAmount(g, redRegex)
      const greenCubes = getAmount(g, greenRegex)
      const blueCubes = getAmount(g, blueRegex)
      return {
        red: redCubes,
        green: greenCubes,
        blue: blueCubes
      }
    })
  const maxDefinition = games
    .reduce((acc, val) => {
      return {
        red: Math.max(acc.red, val.red),
        green: Math.max(acc.green, val.green),
        blue: Math.max(acc.blue, val.blue)
      }
    }, { red: 0, green: 0, blue: 0 })
  return {
    id: +gameId,
    rounds: games,
    minimumCubesNeeded: maxDefinition
  }
}

const isPossible = (game: Cubes, maxDefinition: Cubes): boolean => {
  return game.red <= maxDefinition.red && game.blue <= maxDefinition.blue && game.green <= maxDefinition.green
}

export const sumAllPossibleGameIds = (input: string[], maxDefinition: Cubes): number => {
  return input
    .map(i => toGame(i))
    .filter(g => isPossible(g.minimumCubesNeeded, maxDefinition))
    .map(g => g.id)
    .reduce((acc, val) => acc + val, 0)
}

export const sumAllPowerOfMinimumSets = (input: string[]): number => {
  return input
    .map(i => toGame(i))
    .map(g => g.minimumCubesNeeded)
    .map(c => c.green * c.red * c.blue)
    .reduce((acc, val) => acc + val, 0)
}
