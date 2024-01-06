import {
  KanyeState,
  getKanyeQuote,
  kanyeSlice,
} from '@/redux/features/kanyeSlice'
import { store } from '@/redux/store'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import Kanye from './Kanye'

jest.mock('axios')
const res = 'some'

describe('load Kanye page', () => {
  test('displays Kanye', async () => {
    render(
      <Provider store={store}>
        <Kanye />
      </Provider>
    )

    fireEvent.click(await screen.findByTestId('generateQuote'))

    expect(await screen.findByTestId('loading')).toHaveTextContent(`Loading...`)
  })
})

describe('Kanye async', () => {
  const initialState: KanyeState = {
    data: { quote: 'click that button' },
    pending: false,
    error: false,
  }

  it('should set status to "pending"', async () => {
    const action = { type: getKanyeQuote.pending.type }
    const state = kanyeSlice.reducer(initialState, action)
    expect(state).toEqual({
      ...initialState,
      pending: true,
    })
  })

  // it('should return mock value', async () => {
  //   ;(axios.get as jest.Mock).mockResolvedValue('some')
  //   const data = getKanyeQuote()
  //   expect(data).toBe('')
  // })
})
