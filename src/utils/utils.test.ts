import { add, mergeSortedArray, reverseStr } from './utils'

describe('utils', () => {
  test('should add two numbers', () => {
    expect(add(1, 2)).toEqual(3)
  })

  test('reverseStr should reverse string', () => {
    expect(reverseStr('hello')).toEqual('olleh')
  })

  test('should mergeSortedArray', () => {
    expect(mergeSortedArray([1, 7, 9], [2, 5, 8, 99])).toEqual([
      1, 2, 5, 7, 8, 9, 99,
    ])
  })
})
