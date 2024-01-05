import CounterComponent from '@/components/CounterComponent'

export default function Counter({ name }: { name: string }) {
  return (
    <>
      <h1 data-testid='counter'>{name}</h1>
      <div className='flex justify-center my-2'>
        <CounterComponent name={'Counter'} />
      </div>
      {/* <div className='flex justify-center my-2'>
        <Kanye />
      </div> */}
    </>
  )
}
