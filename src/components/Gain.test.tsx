import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import Gain from './Gain'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      pathname: '/',
    }
  },
}))

describe('load home page', () => {
  test('loads and displays gain', async () => {
    render(<Gain name='gain' />)

    await screen.findByTestId('gain')
    expect(await screen.findByTestId('gain')).toHaveTextContent('gain')

    fireEvent.change(await screen.findByTestId('oldPrice'), {
      target: { value: '10' },
    })
    fireEvent.change(await screen.findByTestId('newPrice'), {
      target: { value: '11' },
    })

    expect(await screen.findByTestId('result')).toHaveTextContent('10.00%')
  })
})
