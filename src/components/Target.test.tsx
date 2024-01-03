import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import Target from './Target'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      pathname: '/',
    }
  },
}))

describe('load home page', () => {
  test('loads and displays target / stop loss', async () => {
    render(<Target name='target' />)

    await screen.findByTestId('target')
    expect(await screen.findByTestId('target')).toHaveTextContent('target')

    fireEvent.change(await screen.findByTestId('price'), {
      target: { value: '100' },
    })
    fireEvent.change(await screen.findByTestId('tp'), {
      target: { value: '1' },
    })
    fireEvent.change(await screen.findByTestId('sp'), {
      target: { value: '1' },
    })

    expect(await screen.findByTestId('target-price')).toHaveTextContent(
      '101.00'
    )
    expect(await screen.findByTestId('sl-price')).toHaveTextContent('99')
  })
})
