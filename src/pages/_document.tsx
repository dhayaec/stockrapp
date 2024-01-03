import Footer from '@/common/Footer'
import Header from '@/common/Header'
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body className='flex flex-col min-h-screen'>
        <Header />
        <div className='container mx-auto w-full lg:w-8/12'>
          <Main />
          <NextScript />
        </div>
        <Footer />
      </body>
    </Html>
  )
}
