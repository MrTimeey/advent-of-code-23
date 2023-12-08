import { type CamelCardHand } from './types'

const FIVE_OF_A_KIND = 7
const FOUR_OF_A_KIND = 6
const FULL_HOUSE = 5
const THREE_OF_A_KIND = 4
const TWO_PAIRS = 3
const PAIR = 2
const HIGHEST_CARD = 1

const allCardsWithoutJoker = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'Q', 'K', 'A']

export function getRank (hand: string): number {
  if (hand.includes('J')) {
    return expandJokers(hand)
  }
  return calculateRank(hand)
}

const expandJokers = (hand: string): number => {
  const firstCardVariations = hand[0] === 'J' ? allCardsWithoutJoker : [hand[0]]
  const secondCardVariations = hand[1] === 'J' ? allCardsWithoutJoker : [hand[1]]
  const thirdCardVariations = hand[2] === 'J' ? allCardsWithoutJoker : [hand[2]]
  const fourthCardVariations = hand[3] === 'J' ? allCardsWithoutJoker : [hand[3]]
  const fifthCardVariations = hand[4] === 'J' ? allCardsWithoutJoker : [hand[4]]
  const variations: string[] = []
  for (const firstCardVariation of firstCardVariations) {
    for (const secondCardVariation of secondCardVariations) {
      for (const thirdCardVariation of thirdCardVariations) {
        for (const fourthCardVariation of fourthCardVariations) {
          for (const fifthCardVariation of fifthCardVariations) {
            variations.push([
              firstCardVariation,
              secondCardVariation,
              thirdCardVariation,
              fourthCardVariation,
              fifthCardVariation
            ].join(''))
          }
        }
      }
    }
  }
  return variations.map(v => calculateRank(v)).reduce((acc, val) => Math.max(acc, val), 0)
}

const calculateRank = (hand: string): number => {
  const sortedHand: Record<string, number> = {}
  for (const character of hand) {
    sortedHand[character] = (sortedHand[character] ?? 0) + 1
  }
  const values = Object.values(sortedHand)
  if (values.includes(5)) return FIVE_OF_A_KIND
  if (values.includes(4)) return FOUR_OF_A_KIND
  if (values.includes(3) && values.includes(2)) return FULL_HOUSE
  if (values.includes(3) && !values.includes(2)) return THREE_OF_A_KIND
  if (values.includes(2, values.indexOf(2) + 1)) return TWO_PAIRS
  if (values.includes(2)) return PAIR
  return HIGHEST_CARD
}

const mapToNumber = (char: string): number => {
  switch (char) {
    case 'A': return 13
    case 'K': return 12
    case 'Q': return 11
    case 'J': return 1
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
  const camelCardHands = parseInput(inputStrings)
  return camelCardHands
    .sort((a, b) => sortHands(a, b))
    .map((val, index) => val.bid * (camelCardHands.length - index))
    .reduce((acc, val) => acc + val, 0)
}
