import { Box, Flex, Heading } from '@chakra-ui/react'
import { NextSeo } from 'next-seo'

export default function Custom404() {
    return (
        <>
            <NextSeo
                title="Pukauae | Page not found"
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
                        href: 'https://www.xn--pkauae-bmb.com/favicons/favicon.ico'
                    }
                ]}
            />
            <Box as="main" bg="grey.900" h="100vh" w="100%" maxW="100vw" maxH="100vh" p="6">
                <Flex justifyContent="center" alignItems="center" h="100%" w="100%">
                    <Heading
                        fontFamily={['subheading', 'subheading', 'subheading', 'heading', 'heading', 'heading']}
                        fontWeight="normal"
                        fontSize={['20px', '20px', '36px', '46px', '56px', '84px']}
                        lineHeight={['1.2', '1.2', '1.2', '1.2', '1.1', '1.1']}
                        textAlign="center"
                        textColor="pink.200"
                    >
                        404 - Page Not Found
                    </Heading>
                </Flex>
            </Box>
        </>
    )
}
