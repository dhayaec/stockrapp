import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import About from './about'

describe('About page', () => {
  it('should render', () => {
    render(<About />)
  })
})
