import TransitionBanner from '@/components/Common/Banners/TransitionBanner'
import Header from '@/components/Common/Header/Header'
import { RealViewport } from '@/components/Primitives/RealViewport'
import theme from '@/styles/ChakraTheme'
import Fonts from '@/styles/Fonts'
import '@/styles/globals.css'
import useFoucFix from '@/utils/useFoucFix'
import { ChakraProvider } from '@chakra-ui/react'
import { GoogleTagManager } from '@next/third-parties/google'
import { AnimatePresence } from 'framer-motion'
import { DefaultSeo } from 'next-seo'
import { Router, useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { HydrationProvider } from 'react-hydration-provider'

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
            <DefaultSeo
                title="Pukauae"
                description="Website for the Pūkauae photographic exhibition."
                canonical="https://www.xn--pkauae-bmb.com/"
                additionalMetaTags={[
                    {
                        name: 'viewport',
                        content: 'width=device-width, initial-scale=1'
                    },
                    {
                        name: 'author',
                        content: 'Henry Babbage, Luke Enoka, Rere-No-A-Rangi Pope, Blaine Western'
                    },
                    {
                        name: 'keywords',
                        content: 'pukauae, tu tama wahine o taranaki, tu tama wahine, art'
                    },
                    {
                        name: 'msapplication-config',
                        content: '/public/favicons/browserconfig.xml'
                    }
                ]}
                additionalLinkTags={[
                    {
                        rel: 'icon',
                        href: '/public/favicons/favicon.ico'
                    },
                    {
                        rel: 'icon',
                        href: '/public/favicons/favicon-32x32.png',
                        sizes: '32x32'
                    },
                    {
                        rel: 'icon',
                        href: '/public/favicons/favicon-16x16.png',
                        sizes: '16x16'
                    },
                    {
                        rel: 'apple-touch-icon',
                        href: 'public/favicons/apple-touch-icon.png',
                        sizes: '180x180'
                    },
                    {
                        rel: 'manifest',
                        href: '/public/favicons/site.webmanifest'
                    }
                ]}
                openGraph={{
                    type: 'website',
                    title: 'Pukauae',
                    description: 'Website for the Pūkauae photographic exhibition.',
                    locale: 'en_IE',
                    url: 'https://www.xn--pkauae-bmb.com/',
                    siteName: 'Pūkauae',
                    images: [
                        {
                            url: '/public/og_1200w.png',
                            width: 2400,
                            height: 1558,
                            alt: 'Pūkauae | Tu Tama Wahine o Taranaki'
                        }
                    ]
                }}
            />
            <GoogleTagManager gtmId="G-XK1ZE2MSV0" />
            <HydrationProvider>
                <RealViewport />
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
