import { getKanyeQuote, selectKanye } from '@/redux/features/kanyeSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

export default function Kanye() {
  const dispatch = useAppDispatch()
  const { data, pending, error } = useAppSelector(selectKanye)

  return (
    <div>
      <h2>Generate random Kanye West quote</h2>
      <div className='h-60'>
        {pending && <p data-testid='loading'>Loading...</p>}
        {data && !pending && (
          <blockquote data-testid='quote' className='text-4xl font-semibold'>
            <p>{data.quote}</p>
          </blockquote>
        )}
        {error && <p>Oops, something went wrong</p>}
      </div>
      <button
        onClick={() => dispatch(getKanyeQuote())}
        disabled={pending}
        className='bg-blue border-primary border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-blue hover:border-blue disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 active:bg-blue active:border-blue'
        data-testid='generateQuote'
      >
        Generate Kanye Quote
      </button>
    </div>
  )
}
