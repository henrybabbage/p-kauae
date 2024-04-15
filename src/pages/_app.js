import TransitionBanner from '@/components/Common/Banners/TransitionBanner'
import Header from '@/components/Common/Header/Header'
import theme from '@/styles/ChakraTheme'
import Fonts from '@/styles/Fonts'
import '@/styles/globals.css'
import useFoucFix from '@/utils/useFoucFix'
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import { Router, useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { HydrationProvider } from 'react-hydration-provider'

export const siteTitle = 'Pūkauae'

export default function App({ Component, pageProps }) {
    const [loading, setLoading] = useState(false)

    useFoucFix()

    const { asPath, pathname } = useRouter()

    useEffect(() => {
        // Used for page transition
        const start = () => {
            setLoading(true)
        }
        const end = () => {
            setLoading(false)
        }
        Router.events.on('routeChangeStart', start)
        Router.events.on('routeChangeComplete', end)
        Router.events.on('routeChangeError', end)
        return () => {
            Router.events.off('routeChangeStart', start)
            Router.events.off('routeChangeComplete', end)
            Router.events.off('routeChangeError', end)
        }
    }, [])

    useEffect(() => {
        const handleContextMenu = (e) => {
            // prevent the right-click menu from appearing
            e.preventDefault()
        }
        document.addEventListener('contextmenu', handleContextMenu)
        return () => {
            document.removeEventListener('contextmenu', handleContextMenu)
        }
    }, [])

    return (
        <>
            <Head>
                <title>Pūkauae</title>
                <meta name="description" content="Website for the Pūkauae photographic exhibition" />
                <meta name="author" content="Henry Babbage, Luke Enoka, Rere-No-A-Rangi Pope, Blaine Western" />
                <meta name="keywords" content="pukauae, tu tama wahine o taranaki, tu tama wahine, art" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
                <link rel="manifest" href="/favicons/site.webmanifest" />
                <link rel="shortcut icon" href="/favicons/favicon.ico" />
                <link rel="canonical" href="https://www.pukauae.com" />
            </Head>
            <HydrationProvider>
                <ChakraProvider theme={theme}>
                    <Fonts />
                    <AnimatePresence
                        mode="sync"
                        initial={true}
                        onExitComplete={() => {
                            window.scrollTo(0, 0)
                        }}
                    >
                        <Header
                            key="header"
                            blurEffect={pathname === '/' ? true : false}
                            opacity={pathname === '/haeranga' ? 0.5 : 1}
                        />
                        {loading ? (
                            <TransitionBanner key="transition" />
                        ) : (
                            <Component layout {...pageProps} key={asPath} />
                        )}
                    </AnimatePresence>
                </ChakraProvider>
            </HydrationProvider>
        </>
    )
}
