import Gain from '@/components/Gain'
import NoLossBuy from '@/components/NoLossBuy'
import PossibleGain from '@/components/PossibleGain'
import Target from '@/components/Target'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Stockr</title>
        <meta
          name='description'
          content='Stockr Home'
        />
      </Head>
      <Target name='Target / Stop Loss' />
      <Gain name='Gain / Loss' />
      <NoLossBuy name="Day's Range" />
      <PossibleGain name='Possible Gain' />
      <Link
        className='bg-blue border-primary border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-blue hover:border-blue disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5 active:bg-blue active:border-blue'
        href={`/counter`}
      >
        Counter
      </Link>
    </main>
  )
}

export default Home
