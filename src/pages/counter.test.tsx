import { store } from '@/redux/store'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import Counter from './counter'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      pathname: '/',
    }
  },
}))

describe('Counter page', () => {
  it('should render', () => {
    render(
      <Provider store={store}>
        <Counter name='counter' />
      </Provider>
    )
  })
})
