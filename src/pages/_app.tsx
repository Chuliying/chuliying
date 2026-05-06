import { useEffect } from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import ReactGA from 'react-ga4'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect((): void => {
    ReactGA.initialize('G-Q5P2241XES')
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname })
  }, [])

  return (
    <>
      <Head>
        <title>Chu Liying — Frontend Lead</title>
        <link rel="shortcut icon" href="/images/favicon.svg" />
        <link rel="icon" href="/images/favicon.svg" />
        <meta
          name="description"
          content="Frontend Lead with 10+ years building production web applications across media, energy, and the arts. Specializing in React, Next.js, and scalable frontend architecture."
        />
        <meta property="og:title" content="Chu Liying — Frontend Lead" />
        <meta
          property="og:description"
          content="Frontend Lead with 10+ years building production web applications across media, energy, and the arts."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://chuliying.vercel.app/" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Chu Liying — Frontend Lead" />
        <meta
          name="twitter:description"
          content="Frontend Lead with 10+ years building production web applications across media, energy, and the arts."
        />
      </Head>
      <div className="min-h-screen bg-canvas pt-4 pr-4 flex overflow-x-hidden max-[900px]:pt-1 max-[900px]:pr-1">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
