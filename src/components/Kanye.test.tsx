import { store } from '@/redux/store'
import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import Kanye from './Kanye'

describe('load Kanye page', () => {
  test('displays Kanye', async () => {
    render(
      <Provider store={store}>
        <Kanye />
      </Provider>
    )

    fireEvent.click(await screen.findByTestId('generateQuote'))

    expect(await screen.findByTestId('loading')).toHaveTextContent(`Loading...`)

    await waitFor(async () => {
      expect(await screen.findByTestId('quote')).toBeInTheDocument()
    })
  })
})
