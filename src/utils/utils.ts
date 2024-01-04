export const add = (a: number, b: number) => a + b

export const reverseStr = (str: string) => {
  let result = ''

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }

  return result
}

export const sub = (a: number, b: number) => a - b
