import { store } from '@/redux/store'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import CounterComponent from './CounterComponent'

describe('load home page', () => {
  test('loads and displays CounterComponent', async () => {
    render(
      <Provider store={store}>
        <CounterComponent name='counter' />
      </Provider>
    )

    await screen.findByTestId('counter')

    expect(await screen.findByTestId('counter')).toHaveTextContent('counter')

    expect(await screen.findByTestId('currentNumber')).toHaveTextContent(
      `The current number is 0`
    )

    fireEvent.change(await screen.findByTestId('incrementAmount'), {
      target: { value: '10' },
    })

    fireEvent.click(await screen.findByTestId('incrementAmountButton'))

    expect(await screen.findByTestId('currentNumber')).toHaveTextContent(
      `The current number is 10`
    )
    fireEvent.click(await screen.findByTestId('incrementAmountBy1'))
    expect(await screen.findByTestId('currentNumber')).toHaveTextContent(
      `The current number is 11`
    )
    fireEvent.click(await screen.findByTestId('decrementAmountBy1'))
    expect(await screen.findByTestId('currentNumber')).toHaveTextContent(
      `The current number is 10`
    )
  })
})
