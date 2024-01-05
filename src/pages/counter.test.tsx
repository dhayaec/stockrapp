import Kanye from '@/components/Kanye'
import { store } from '@/redux/store'
import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import Counter from './counter'

describe('Counter page', () => {
  it('should render', () => {
    render(
      <Provider store={store}>
        <Counter name='counter' />
        <Kanye />
      </Provider>
    )
  })
})
