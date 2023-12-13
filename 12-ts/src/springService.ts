import { generateCombinations } from './combinationUtils'

export const part1 = (inputLines: string[]): number => {
  return inputLines
    .map(line => {
      const [input, condition] = line.split(' ')
      return [input.trimEnd(), condition.split(',').map(v => +v)] as [string, number[]]
    })
    .map(tuple => getPossibleArrangements(tuple[0]).filter(a => isValidSpringCondition(a, tuple[1])).length)
    .reduce((acc, val) => acc + val, 0)
}

export const part2 = (inputLines: string[]): number => {
  return inputLines
    .map(line => {
      const [input, condition] = line.split(' ')
      return [input.trimEnd(), condition.split(',').map(v => +v)] as [string, number[]]
    })
    .map((tuple, i) => {
      const newNumbers = repeatString(tuple[1].join(','), ',').split(',').map(v => +v)
      return [repeatString(tuple[0], '?'), newNumbers] as [string, number[]]
    })
    .map(tuple => calculatePossibleAppearances(tuple[0], tuple[1]))
    .reduce((acc, val) => acc + val, 0)
}

const damagedRegex = /#+/g

export const isValidSpringCondition = (input: string, condition: number[]): boolean => {
  const groups = input.match(damagedRegex)
  if (groups && groups.length === condition.length) {
    return groups.every((val, i) => val.length === condition[i])
  }
  return false
}

export const getPossibleArrangements = (input: string): string[] => {
  const unknownParts = (input.match(/\?/g) ?? []).length
  return generateCombinations(unknownParts)
    .map(c => {
      let result = input.slice()
      for (const char of c.split('')) {
        result = result.replace('?', char)
      }
      return result
    })
}

const repeatString = (value: string, separator: string): string => {
  return Array(5).fill(value).join(separator)
}

const helper = new Map<string, number>()

function calculatePossibleAppearances (input: string, condition: number[]): number {
  if (input.length === 0) return condition.length === 0 ? 1 : 0
  if (condition.length === 0) return input.includes('#') ? 0 : 1

  const helperKey = `${input}${condition.join(',')}`
  if (helper.has(helperKey)) return helper?.get(helperKey) ?? 0

  let result = 0

  const currentChar = input[0]
  if (currentChar === '.' || currentChar === '?') {
    result += calculatePossibleAppearances(input.slice(1), [...condition])
  }

  if (currentChar === '#' || currentChar === '?') {
    const currentCondition = condition[0]
    const groupCanFit = currentCondition <= input.length
    const groupIsValid = !input.slice(0, currentCondition).includes('.')

    if (groupCanFit && groupIsValid) {
      const groupIsClosed = input[currentCondition] !== '#'
      const allInputHandled = currentCondition === input.length
      if (groupIsClosed || allInputHandled) {
        result += calculatePossibleAppearances(input.slice(currentCondition + 1), [...condition.slice(1)])
      }
    }
  }
  helper.set(helperKey, result)
  return result
}

/*
export function count (input: string, condition: number[]): number {
  if (input.length === 0) return condition.length === 0 ? 1 : 0

  if (condition.length === 0) return input.includes('#') ? 0 : 1

  const helperKey = `${input}${condition.join(',')}`
  if (helper[helperKey]) return helper[helperKey]

  let result = 0

  if ('.?'.includes(input[0])) {
    result += count(input.slice(1), [...condition])
  }

  if ('#?'.includes(input[0])) {
    const longEnough = condition[0] <= input.length
    const noDots = !input.slice(0, condition[0]).includes('.')
    const endOfString = condition[0] === input.length
    const followingCharIsNotBroken = input[condition[0]] !== '#'
    if (longEnough && noDots && (endOfString || followingCharIsNotBroken)) {
      result += count(input.slice(condition[0] + 1), [...condition.slice(1)])
    }
  }
  helper[helperKey] = result
  return result
}
*/
