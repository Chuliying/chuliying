import { useEffect } from 'react';
import Head from 'next/head'
import type { AppProps } from "next/app";
import './styles/index.scss'
import ReactGA from 'react-ga4'

function MyApp({ Component, pageProps }: AppProps) {
    useEffect((): void => {
        const gaTrackingId: string = 'G-Q5P2241XES';
        ReactGA.initialize(gaTrackingId)
        ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    }, [])
    return (
        <>
            <Head>
                <title>CHU LIYING</title>
                <link rel="shortcut icon" href={'./images/favicon.svg'} />
                <link rel="icon" href={'./images/favicon.svg'} />
                <meta name="description"
                    content="CHULIYING Portfolio" />
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/favicon.svg" />
                <meta property="og:title" content="CHULIYING Portfolio" />
                <meta property="og:description"
                    content="CHULIYING Portfolio" />
                <meta property="og:type" content="website" />
                {/* <meta property="og:url" content="/" />
                <meta property="og:image" content="/" /> */}
            </Head>
            <div className='App'>
                <Component {...pageProps} />
            </div>
        </>
    )
}

export default MyApp