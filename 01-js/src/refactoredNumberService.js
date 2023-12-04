function translate (s) {
  if (s.startsWith('one')) return 1
  if (s.startsWith('two')) return 2
  if (s.startsWith('three')) return 3
  if (s.startsWith('four')) return 4
  if (s.startsWith('five')) return 5
  if (s.startsWith('six')) return 6
  if (s.startsWith('seven')) return 7
  if (s.startsWith('eight')) return 8
  if (s.startsWith('nine')) return 9
  return undefined
}

function getNumbers (value) {
  const result = []
  for (let i = 0; i < value.length; i++) {
    const char = value.charAt(i)
    if (!isNaN(char)) result.push(char)
    const translatedVal = translate(value.substring(i))
    if (translatedVal && !isNaN(translatedVal)) result.push(translatedVal)
  }
  return result
}

export function getNewCombinedNumber (value) {
  const newNumberResult = getNumbers(value)
  const firstNumber = newNumberResult[0]
  const lastNumber = newNumberResult[newNumberResult.length - 1]
  return +(firstNumber + '' + lastNumber)
}
