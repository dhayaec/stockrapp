import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <div className='my-2'>
      <Link href='/' title='Home'>
        <div className='flex flex-col justify-center items-center m-2'>
          <Image
            src={'/icon-192x192.png'}
            alt='Stockr'
            width={50}
            height={50}
          />
          <p className='text-center'>Stockr</p>
        </div>
      </Link>
    </div>
  )
}
