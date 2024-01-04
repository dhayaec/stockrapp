import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Index from './'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      pathname: '/',
    }
  },
}))

describe('Index page', () => {
  it('should render', () => {
    render(<Index />)
  })
})
