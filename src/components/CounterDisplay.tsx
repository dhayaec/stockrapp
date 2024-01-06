import { CounterState, counterStatus } from '@/redux/features/types'

export default function CounterDisplay({ state }: { state: CounterState }) {
  if (state.status === counterStatus.pending) {
    return <h2 data-testid='currentNumber'>Loading</h2>
  }

  if (state.status === counterStatus.failed) {
    return <h2 data-testid='currentNumber'>{state.error}</h2>
  }

  return <h2 data-testid='currentNumber'>{state.value}</h2>
}
