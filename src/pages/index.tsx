import Gain from '@/components/Gain'
import NoLossBuy from '@/components/NoLossBuy'
import PossibleGain from '@/components/PossibleGain'
import Target from '@/components/Target'
import { menuItems, MenuItemType } from '@/constants/constants'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()
  const item = menuItems.find((i) => i.href === router.pathname) as MenuItemType

  return (
    <div>
      <Target name='Target / Stop Loss' />
      <Gain name='Gain / Loss' />
      <NoLossBuy name="Day's Range" />
      <PossibleGain name='Possible Gain' />
      <Link href={`/counter`}>Counter</Link>
    </div>
  )
}

export default Home
