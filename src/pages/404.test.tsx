import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import NotFound from './404'

describe('NotFound page', () => {
  it('should render', () => {
    render(<NotFound />)
  })
})
