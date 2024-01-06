import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Header from './Header'

describe('Header component', () => {
  it('should render', () => {
    render(<Header />)
  })
})
