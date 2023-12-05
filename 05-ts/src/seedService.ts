import { type MappingInput, type MappingTable } from './types'

function parseInput (inputStrings: string[]): MappingInput {
  const splitInput = inputStrings.join('\n').split('\r\n\r\n')
  const seeds = splitInput[0].replace('seeds: ', '').split(' ').map(v => +v)
  const mappingTables: MappingTable[] = splitInput.slice(1)
    .map(table => {
      const entries = table.split('\n')
      const mappingName = entries[0]
      const mappings = entries.slice(1)
        .filter(r => r !== '')
        .map(i => {
          const [destinationRangeStart, sourceRangeStart, rangeLength] = i.split(' ')
          return {
            destinationRangeStart: parseInt(destinationRangeStart.trim()),
            sourceRangeStart: parseInt(sourceRangeStart.trim()),
            rangeLength: parseInt(rangeLength.trim())
          }
        })
      return {
        name: mappingName,
        mappings
      }
    })
  return {
    inputs: seeds,
    mappings: mappingTables
  }
}

function getLocation (seedNumber: number, mappingTables: MappingTable[]): number {
  let currentValue = seedNumber
  for (const mappingTable of mappingTables) {
    const mappingDescription = mappingTable.mappings
      .find(m => m.sourceRangeStart <= currentValue && currentValue <= (m.sourceRangeStart + m.rangeLength))
    if (mappingDescription !== undefined) {
      currentValue = currentValue - mappingDescription.sourceRangeStart + mappingDescription.destinationRangeStart
    }
  }
  return currentValue
}

export const getLowestLocation = (inputStrings: string[]): number => {
  const mappingInput = parseInput(inputStrings)
  return mappingInput.inputs
    .map(i => getLocation(i, mappingInput.mappings))
    .reduce((acc, val) => Math.min(acc, val), Number.MAX_VALUE)
}

function getRangeNumbers (inputs: number[], mappings: MappingTable[]): number {
  const result = []
  for (let i = 0; i < inputs.length; i = i + 2) {
    const start = inputs[i]
    const rangeLength = inputs[i + 1]
    let minValue = Number.MAX_VALUE
    for (let j = start; j < start + rangeLength; j++) {
      minValue = Math.min(getLocation(j, mappings), minValue)
    }
    result.push(minValue)
  }
  return result.reduce((acc, val) => Math.min(acc, val), Number.MAX_VALUE)
}

export const getLowestLocationBasedOnRanges = (inputStrings: string[]): number => {
  const mappingInput = parseInput(inputStrings)
  // Slow as hell!
  return getRangeNumbers(mappingInput.inputs, mappingInput.mappings)
}
