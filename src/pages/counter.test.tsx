import CounterComponent from '@/components/CounterComponent'
import { store } from '@/redux/store'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

describe('Counter page', () => {
  it('should render', () => {
    render(
      <Provider store={store}>
        <CounterComponent name='counter' />
      </Provider>
    )
  })
})
