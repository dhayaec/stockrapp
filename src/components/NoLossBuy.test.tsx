import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import NoLossBuy from './NoLossBuy'

describe('load no loss buy', () => {
  test('loads and displays no loss buy', async () => {
    render(<NoLossBuy name='no loss buy' />)

    await screen.findByTestId('no-loss-buy')
    expect(await screen.findByTestId('no-loss-buy')).toHaveTextContent(
      'no loss buy'
    )

    fireEvent.change(await screen.findByTestId('range'), {
      target: { value: '20' },
    })

    expect(await screen.findByTestId('result')).toHaveTextContent('8.51')

    fireEvent.change(await screen.findByTestId('range'), {
      target: { value: '-1' },
    })

    expect(await screen.findByTestId('result')).toHaveTextContent('0')
  })
})
