import Kanye from '@/components/Kanye'
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from '@/redux/features/counterSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { useState } from 'react'

export default function Counter({ name }: { name: string }) {
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCount)
  const [incrementAmount, setIncrementAmount] = useState<number>(0)

  return (
    <>
      <h1 data-testid='counter'>{name}</h1>
      <h2 className='text-2xl'>{`The current number is ${count}`}</h2>
      <div className='flex justify-between my-2'>
        <input
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
          type='number'
        />
        <button
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
          className='bg-blue border-primary border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-blue hover:border-blue disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 active:bg-blue active:border-blue'
        >
          Increment by amount
        </button>
      </div>
      <div className='flex justify-between my-2'>
        <button
          onClick={() => dispatch(decrement())}
          className='bg-blue border-primary border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-blue hover:border-blue disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 active:bg-blue active:border-blue'
        >
          Decrement by 1
        </button>
        <button
          onClick={() => dispatch(increment())}
          className='bg-blue border-primary border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-blue hover:border-blue disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 active:bg-blue active:border-blue'
        >
          Increment by 1
        </button>
      </div>
      <div className='flex justify-center my-2'>
        <Kanye />
      </div>
    </>
  )
}
