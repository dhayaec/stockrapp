import counterReducer, { incrementAsync } from './counterSlice'
import { CounterState, counterStatus } from './types'

describe('counter reducer async actions', () => {
  const initialState: CounterState = {
    value: 5,
    status: counterStatus.idle,
    error: '',
  }

  it('should set status to "pending"', async () => {
    const action = { type: incrementAsync.pending.type }
    const state = counterReducer(initialState, action)
    expect(state).toEqual({
      ...initialState,
      status: counterStatus.pending,
    })
  })

  it('should set status to "idle"', async () => {
    const amount = 2
    const action = { type: incrementAsync.fulfilled.type, payload: amount }
    const state = counterReducer(initialState, action)
    expect(state).toEqual({
      ...initialState,
      value: initialState.value + amount,
      status: counterStatus.idle,
    })
  })

  it('should set status to "failed"', async () => {
    const action = {
      type: incrementAsync.rejected.type,
      payload: 'loading error',
    }
    const state = counterReducer(initialState, action)
    expect(state).toEqual({
      ...initialState,
      error: 'loading error',
      status: counterStatus.failed,
    })
  })
})
