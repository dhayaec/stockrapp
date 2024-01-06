export const add = (a: number, b: number) => a + b

export const reverseStr = (str: string) => {
  let result = ''

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }

  return result
}

export const mergeSortedArray = (arr1: number[], arr2: number[]) => {
  let mergedArray = []
  let i = 0
  let j = 0

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i])
      i++
    } else {
      mergedArray.push(arr2[j])
      j++
    }
  }

  while (i < arr1.length) {
    mergedArray.push(arr1[i])
    i++
  }

  while (j < arr2.length) {
    mergedArray.push(arr2[j])
    j++
  }

  return mergedArray
}
