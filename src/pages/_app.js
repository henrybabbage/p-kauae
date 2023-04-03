import Header from '@/components/Header'
import SplashBanner from '@/components/SplashBanner'
import TransitionBanner from '@/components/TransitionBanner'
import theme from '@/styles/ChakraTheme'
import Fonts from '@/styles/Fonts'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import { Router, useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const siteTitle = 'Pūkauae'

export const metadata = {
    title: 'Pūkauae',
    description:
        'Tū Tama Wāhine o Taranaki is a tangata whenua development and liberation organisation.',
    keywords: [
        'pūkauae',
        'pukauae',
        'tu tama wahine o taranaki',
        'tu tama wahine',
        'taranaki'
    ],
    authors: [
        { name: 'Henry Babbage' },
        { name: 'Luke Enoka' },
        { name: 'Rere-No-A-Rangi Pope' },
        { name: 'Blaine Western' }
    ],
    icons: {
        icon: [
            {
                url: '/favicons/favicon-16x16.png',
                sizes: '16x16',
                type: 'image/png'
            },
            {
                url: '/favicons/favicon-32x32.png',
                sizes: '32x32',
                type: 'image/png'
            }
        ],
        apple: '/apple-touch-icon.png',
        other: [
            {
                rel: 'manifest',
                url: '/favicons/site.webmanifest'
            },
            {
                rel: 'shortcut icon',
                url: '/favicons/favicon.ico'
            }
        ]
    },
    openGraph: {
        title: 'Pūkauae',
        description:
            'Tū Tama Wāhine o Taranaki is a tangata whenua development and liberation organisation.',
        url: 'https://www.pukauae.com',
        siteName: 'Pūkauae',
        images: [
            {
                url: '',
                width: 800,
                height: 600,
                alt: 'Pūkauae'
            },
            {
                url: '',
                width: 1800,
                height: 1600,
                alt: 'Pūkauae'
            }
        ],
        locale: 'en-US',
        type: 'website'
    }
}

export default function App({ Component, pageProps }) {
    const { asPath } = useRouter()
    const [loading, setLoading] = useState(false)
    const [bannerShown, setBannerShown] = useState(false)

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

    // useEffect(() => {
    //     const handleContextMenu = (e) => {
    //         // prevent the right-click menu from appearing
    //         e.preventDefault()
    //     }
    //     document.addEventListener('contextmenu', handleContextMenu)
    //     return () => {
    //         document.removeEventListener('contextmenu', handleContextMenu)
    //     }
    // }, [])

    return (
        <>
            <Head>
                <title>{siteTitle}</title>
                <meta
                    name="description"
                    content="Website for the Pūkauae Photographic exhibition"
                />
                <meta
                    name="author"
                    content="Henry Babbage, Luke Enoka, Rere-No-A-Rangi Pope, Blaine Western"
                />
                <meta name="keywords" content="art" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta charset="utf-8" />
                <meta
                    name="msapplication-config"
                    content="/favicons/browserconfig.xml"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicons/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicons/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicons/favicon-16x16.png"
                />
                <link rel="manifest" href="/favicons/site.webmanifest" />
                <link rel="shortcut icon" href="/favicons/favicon.ico" />
            </Head>
            <ChakraProvider theme={theme}>
                <Fonts />
                <AnimatePresence
                    mode="wait"
                    initial={true}
                    onExitComplete={() => {
                        window.scrollTo(0, 0)
                    }}
                >
                    {/* <SplashBanner /> */}
                    <Header />
                    {loading ? (
                        <TransitionBanner />
                    ) : (
                        <Component layout {...pageProps} key={asPath} />
                    )}
                </AnimatePresence>
            </ChakraProvider>
        </>
    )
}
