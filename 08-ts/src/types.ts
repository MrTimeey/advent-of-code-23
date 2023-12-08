export interface NavigationMap {
  directions: string[]
  networkMap: Map<string, string[]>
}

export interface Entry {
  name: string
  left: string
  right: string
}
