import { Box, Heading } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'

export default function Custom500() {
    return (
        <>
            <NextSeo
                title="Pukauae | Error"
                description="Website for the Pūkauae photographic exhibition."
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
                    }
                ]}
                additionalLinkTags={[
                    {
                        rel: 'icon',
                        href: '/public/favicons/favicon.ico'
                    }
                ]}
            />
            <Box as="main" bg="grey.900" h="100vh" w="100%" maxW="100vw" maxH="100vh">
                <Heading
                    fontFamily={['subheading', 'subheading', 'subheading', 'heading', 'heading', 'heading']}
                    fontSize={['36px', '36px', '36px', '46px', '56px', '84px']}
                    lineHeight={['1.2', '1.2', '1.2', '1.2', '1.1', '1.1']}
                    textAlign="center"
                    textColor="pink.200"
                >
                    500 - Server-side error occurred
                </Heading>
            </Box>
        </>
    )
}
