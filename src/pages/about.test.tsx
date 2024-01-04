import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import About from './about'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      pathname: '/',
    }
  },
}))

describe('About page', () => {
  it('should render', () => {
    render(<About />)
  })
})
