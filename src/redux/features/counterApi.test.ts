import fetchCount from './countApi'

describe('fetchCount', () => {
  it('works with fetchCount success', async () => {
    jest.useFakeTimers()
    const asyncResult = fetchCount(1)
    jest.runAllTimers()
    const r = await asyncResult
    expect(r).toEqual({ data: 2 })
  })
})
