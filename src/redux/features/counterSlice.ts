import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import fetchCount from './countApi'
import { CounterState, counterStatus } from './types'

export const initialState: CounterState = {
  value: 0,
  status: counterStatus.idle,
  error: '',
}

export const incrementAsync = createAsyncThunk<
  number,
  number,
  {
    rejectValue: string
  }
>('counter/fetchCount', async (amount, thunkApi) => {
  const response = await fetchCount(amount)

  if (response.data !== 5) {
    return response.data
  } else {
    return thunkApi.rejectWithValue('Validation error! Response data was 5!')
  }
})

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = counterStatus.pending
        state.error = ''
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = counterStatus.idle
        state.value += action.payload
        state.error = ''
      })
      // some error occurred while loading repository content
      .addCase(incrementAsync.rejected, (state, action) => {
        state.status = counterStatus.failed
        if (action.payload) {
          // For example this could be validation error handling
          state.error = action?.payload
        } else {
          state.error = action.error.message
        }
      })
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export const selectCountState = (state: RootState) => state.counter

export default counterSlice.reducer
export * from './types'
