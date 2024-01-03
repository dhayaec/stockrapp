import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  const theme = '#4a90e2'

  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        {/* link manifest.json  */}
        <link rel='manifest' href='/manifest.json' />
        {/* this sets the color of url bar */}
        <meta name='theme-color' content='#ffffff' />
        {/* this sets logo in Apple smartphones.  */}
        <link rel='apple-touch-icon' href='/icon-192x192.png' />
        {/* this sets the color of url bar in Apple smartphones  */}
        <meta name='apple-mobile-web-app-status-bar' content={theme} />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=1'
        />
      </Head>

      <div className='px-2 text-center'>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default App
