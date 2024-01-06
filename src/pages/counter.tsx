import CounterComponent from '@/components/CounterComponent'
import Kanye from '@/components/Kanye'
import Head from 'next/head'

export default function Counter({ name }: { name: string }) {
  return (
    <>
      <Head>
        <title>Counter</title>
        <meta name='description' content='Counter Home' />
      </Head>
      <h1 data-testid='counter'>{name}</h1>
      <div className='flex justify-center my-2'>
        <CounterComponent name={'Counter'} />
      </div>
      <div className='flex justify-center my-2'>
        <Kanye />
      </div>
    </>
  )
}
