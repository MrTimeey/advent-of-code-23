const getValues = (line: number[]): number[] => {
  return line.map((val, i, arr) => arr[i + 1] - val).slice(0, -1)
}

const getNextNumber = (line: number[]): number => {
  const list = [line[line.length - 1]]
  let val = line
  do {
    val = getValues(val)
    list.push(val[val.length - 1])
  } while (!val.every((v) => v === val[0]))
  return list.reduce((acc, val) => acc + val, 0)
}

const getPreviousNumber = (line: number[]): number => {
  const list = [line[0]]
  let val = line
  do {
    val = getValues(val)
    list.push(val[0])
  } while (!val.every((v) => v === val[0]))
  const numbers = Array.from(list).reverse()
  numbers
    .forEach((n, i) => {
      if (i + 1 !== numbers.length) {
        numbers[i + 1] = numbers[i + 1] - n
      }
    })
  return numbers[numbers.length - 1]
}

export const totalSumOfNextNumbers = (input: string[]): number => {
  return input
    .filter(s => s !== undefined && s !== '')
    .map(i => i.split(' ').map(Number))
    .map(s => getNextNumber(s))
    .reduce((acc, val) => acc + val, 0)
}

export const totalSumOfPreviousNumbers = (input: string[]): number => {
  return input
    .filter(s => s !== undefined && s !== '')
    .map(i => i.split(' ').map(Number))
    .map(s => getPreviousNumber(s))
    .reduce((acc, val) => acc + val, 0)
}
