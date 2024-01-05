import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from '@/redux/features/counterSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

import { useState } from 'react'

export default function CounterComponent({ name }: { name: string }) {
  const dispatch = useAppDispatch()
  const count = useAppSelector(selectCount)
  const [incrementAmount, setIncrementAmount] = useState<number>(0)

  return (
    <div className='w-full max-w-md mx-auto p-4'>
      <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl '>
        {name}
      </h1>

      <h2 className='text-2xl'>{`The current number is ${count}`}</h2>
      <input
        type='text'
        className='w-full border p-2 mb-4'
        value={incrementAmount || ''}
        onChange={(e) => setIncrementAmount(Number(e.target.value))}
      />
      <div className='flex space-x-4'>
        <button
          className='flex-1 bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
        >
          Increment by Amount
        </button>
        <button
          className='flex-1 bg-green hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
          onClick={() => dispatch(increment())}
        >
          Increment by 1
        </button>
        <button
          className='flex-1 bg-red hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
          onClick={() => dispatch(decrement())}
        >
          Decrement by 1
        </button>
      </div>
    </div>
  )
}
