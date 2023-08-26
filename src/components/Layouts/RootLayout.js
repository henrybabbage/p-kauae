import { Box } from '@chakra-ui/react'
import Head from 'next/head'

export const siteTitle = 'Tū Tama Wāhine o Taranaki'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>{siteTitle}</title>
                <meta name="description" content="Website for the Pūkauae Photographic exhibition" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="data:," />
                <meta
                    name="description"
                    content="Tū Tama Wāhine o Taranaki is a tangata whenua development and liberation organisation."
                />
                <meta name="author" content="Henry Babbage, Luke Enoka, Rere-No-A-Rangi Pope, Blaine Western" />
                <meta name="keywords" content="art" />
            </Head>
            <Box w="100vw" h="100vh" display="flex" flexDirection="column">
                {children}
            </Box>
        </>
    )
}

export default Layout
