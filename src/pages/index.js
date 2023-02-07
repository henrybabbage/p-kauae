import Header from '@/components/Header'
import Layout from '@/components/Layout'
import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import Head from 'next/head'

import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'

export const siteTitle = 'Tū Tama Wāhine o Taranaki'

export default function Home({ korero }) {
    const markdownTheme = {
        p: (props) => {
            const { children } = props
            return (
                <Text fontSize={'36px'} lineHeight={'1.36'}>
                    {children}
                </Text>
            )
        },
        blockquote: (props) => {
            const { children } = props
            return (
                <Box as="blockquote" color="#C3918F" my="78px">
                    {children}
                </Box>
            )
        }
    }

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
                <link rel="icon" href="data:," />
                <meta
                    name="description"
                    content="Tū Tama Wāhine o Taranaki is a tangata whenua development and liberation organisation."
                />
                <meta
                    name="author"
                    content="Henry Babbage, Luke Enoka, Rere-No-A-Rangi, Blaine Western"
                />
                <meta name="keywords" content="art" />
            </Head>
            <main>
                <Layout>
                    <Header />
                    <Box p="6" id="about">
                        <Grid templateColumns="repeat(12, 1fr)">
                            <GridItem colStart={2} colEnd={12}>
                                <Flex
                                    justify="center"
                                    flexDirection={'column'}
                                    height={
                                        'calc(100vh - var(--chakra-sizes-12))'
                                    }
                                >
                                    <ReactMarkdown
                                        remarkPlugins={[remarkBreaks]}
                                        components={ChakraUIRenderer(
                                            markdownTheme
                                        )}
                                        children={
                                            korero.attributes.tuhinga_timatanga
                                        }
                                        skipHtml
                                    />
                                </Flex>
                            </GridItem>
                            <GridItem colStart={2} colEnd={12} pt="6" pb="6">
                                <Flex
                                    justify="center"
                                    flexDirection={'column'}
                                    height={
                                        'calc(100vh - var(--chakra-sizes-12))'
                                    }
                                >
                                    <Text
                                        fontSize={'36px'}
                                        lineHeight={'1.36'}
                                        align="left"
                                    >
                                        Acknowledgements
                                    </Text>
                                    <ReactMarkdown
                                        remarkPlugins={[remarkBreaks]}
                                        components={ChakraUIRenderer(
                                            markdownTheme
                                        )}
                                        children={korero.attributes.mihi}
                                        skipHtml
                                    />
                                </Flex>
                            </GridItem>
                            <GridItem colStart={2} colEnd={12} pt="6" pb="6">
                                <Flex
                                    justify="center"
                                    flexDirection={'column'}
                                    height={'calc(100vh)'}
                                >
                                    <Text
                                        fontSize={'36px'}
                                        lineHeight={'1.36'}
                                        align="left"
                                    >
                                        A special thanks to
                                    </Text>
                                    <ReactMarkdown
                                        remarkPlugins={[remarkBreaks]}
                                        components={ChakraUIRenderer(
                                            markdownTheme
                                        )}
                                        children={
                                            korero.attributes.tangata_mihia
                                        }
                                        skipHtml
                                    />
                                </Flex>
                            </GridItem>
                            <GridItem colStart={2} colEnd={12} pt="16">
                                <ReactMarkdown
                                    remarkPlugins={[remarkBreaks]}
                                    components={ChakraUIRenderer(markdownTheme)}
                                    children={korero.attributes.tuhinga_matua.replace(
                                        /\n/gi,
                                        '&nbsp; \n \n'
                                    )}
                                    skipHtml
                                />
                            </GridItem>
                        </Grid>
                    </Box>
                </Layout>
            </main>
        </>
    )
}

export async function getStaticProps() {
    const koreroResponse = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/tu-tama-korero`
    )
    const result = await koreroResponse.json()
    return {
        props: {
            korero: result.data
        }
    }
}
