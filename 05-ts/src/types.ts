export interface MappingDescription {
  destinationRangeStart: number
  sourceRangeStart: number
  rangeLength: number
}

export interface MappingTable {
  name: string
  mappings: MappingDescription[]
}

export interface MappingInput {
  inputs: number []
  mappings: MappingTable[]
}
