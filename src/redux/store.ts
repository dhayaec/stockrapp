import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { counterSlice } from './features/counterSlice'
import { kanyeSlice } from './features/kanyeSlice'

export const store = configureStore({
  reducer: {
    // This is where we add reducers.
    // Since we don't have any yet, leave this empty
    counter: counterSlice.reducer,
    kanyeQuote: kanyeSlice.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
