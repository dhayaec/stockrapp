import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import PossibleGain from './PossibleGain'

describe('load possible gain', () => {
  test('loads and displays possible gain', async () => {
    render(<PossibleGain name='possible gain' />)

    await screen.findByTestId('possible-gain')
    expect(await screen.findByTestId('possible-gain')).toHaveTextContent(
      'possible gain'
    )

    fireEvent.change(await screen.findByTestId('price'), {
      target: { value: '100' },
    })

    fireEvent.change(await screen.findByTestId('percentage'), {
      target: { value: '1' },
    })

    expect(await screen.findByTestId('result')).toHaveTextContent('₹ 1.00')
  })
})
