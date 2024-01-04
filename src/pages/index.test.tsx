import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Index from './'

describe('Index page', () => {
  it('should render', () => {
    render(<Index />)
  })
})
