import Header from '@/components/Header'
import theme from '@/styles/ChakraTheme'
import Fonts from '@/styles/Fonts'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import Head from 'next/head'
import { useRouter } from 'next/router'

export const siteTitle = 'Tū Tama Wāhine o Taranaki'

export default function App({ Component, pageProps }) {
    const { asPath } = useRouter()
    return (
        <>
            <Head>
                <title>{siteTitle}</title>
                <meta
                    name="description"
                    content="Website for the Pūkauae Photographic exhibition"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta charset="utf-8" />
                <link rel="icon" href="data:," />
                <meta
                    name="description"
                    content="Tū Tama Wāhine o Taranaki is a tangata whenua development and liberation organisation."
                />
                <meta
                    name="author"
                    content="Henry Babbage, Luke Enoka, Rere-No-A-Rangi Pope, Blaine Western"
                />
                <meta name="keywords" content="art" />
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
                    <Header />
                    <Component {...pageProps} key={asPath} />
                </AnimatePresence>
            </ChakraProvider>
        </>
    )
}
