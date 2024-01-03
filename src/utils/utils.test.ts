import { add, reverseStr } from './utils'

describe('utils', () => {
  test('should add two numbers', () => {
    expect(add(1, 2)).toEqual(3)
  })

  test('reverseStr should reverse string', () => {
    expect(reverseStr('hello')).toEqual('olleh')
  })
})
