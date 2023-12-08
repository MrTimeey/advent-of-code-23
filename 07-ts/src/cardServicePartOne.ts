import { type CamelCardHand } from './types'

export const getRank = (hand: string): number => {
  const sortedHand: Record<string, number> = {}
  for (const character of hand) {
    sortedHand[character] = (sortedHand[character] ?? 0) + 1
  }
  const values = Object.values(sortedHand)
  if (values.includes(5)) return 7
  if (values.includes(4)) return 6
  if (values.includes(3) && values.includes(2)) return 5
  if (values.includes(3) && !values.includes(2)) return 4
  if (values.includes(2, values.indexOf(2) + 1)) return 3
  if (values.includes(2)) return 2
  return 1
}

const mapToNumber = (char: string): number => {
  switch (char) {
    case 'A': return 14
    case 'K': return 13
    case 'Q': return 12
    case 'J': return 11
    case 'T': return 10
  }
  return +char
}

function sortHands (a: CamelCardHand, b: CamelCardHand): number {
  if (a.handValue > b.handValue) return -1
  if (a.handValue < b.handValue) return 1
  for (let i = 0; i < a.cards.length; i++) {
    const aChar = mapToNumber(a.cards.charAt(i))
    const bChar = mapToNumber(b.cards.charAt(i))
    if (aChar === bChar) continue
    if (aChar > bChar) return -1
    if (aChar < bChar) return 1
  }
  return 0
}

const parseInput = (inputLines: string[]): CamelCardHand[] => {
  return inputLines
    .filter(i => i !== undefined && i !== '')
    .map(i => {
      const [hand, bid] = i.split(' ')
      return {
        cards: hand,
        bid: +bid,
        handValue: getRank(hand)
      }
    })
}

export const calculateTotalWinnings = (inputStrings: string[]): number => {
  return parseInput(inputStrings)
    .sort((a, b) => sortHands(a, b))
    .map((val, index) => val.bid * (inputStrings.length - index))
    .reduce((acc, val) => acc + val, 0)
}
