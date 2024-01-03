import Image from 'next/image'

export default function Header() {
  return (
    <div className='my-2'>
      <div className='flex flex-col justify-center items-center m-2'>
        <Image src={'/icon-192x192.png'} alt='Stockr' width={50} height={50} />
        <p className='text-center'>Stockr</p>
      </div>
    </div>
  )
}
