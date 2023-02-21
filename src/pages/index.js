import Header from '@/components/Header'
import Layout from '@/components/Layout'
import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react'

import { ChakraNextImage } from '@/components/ChakraNextImage'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import { getPlaiceholder } from 'plaiceholder'
import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'

export default function Home({ korero, kaiwhakaahua, img, blurhash }) {
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

    const totalList = korero.attributes.tangata_mihia
    const lines = totalList.split(/\r\n|\r|\n/)
    const leftColumn = lines.slice(0, 8)
    const rightColumn = lines.slice(8, 16)

    return (
        <>
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
                            <GridItem colStart={2} colEnd={6} pt="6" pb="6">
                                <Flex
                                    justify="center"
                                    flexDirection={'column'}
                                    height={'100vh'}
                                >
                                    <Text
                                        fontSize={'36px'}
                                        lineHeight={'1.36'}
                                        align="left"
                                    >
                                        A special thanks to
                                    </Text>
                                    {leftColumn.map((name, index) => (
                                        <Text
                                            fontSize={'36px'}
                                            lineHeight={'1.36'}
                                            align="left"
                                            key={index}
                                        >
                                            {name}
                                        </Text>
                                    ))}
                                </Flex>
                            </GridItem>
                            <GridItem colStart={7} colEnd={11} pt="6" pb="6">
                                <Flex
                                    justify="center"
                                    flexDirection={'column'}
                                    height={'100vh'}
                                >
                                    <Text
                                        fontSize={'36px'}
                                        lineHeight={'1.36'}
                                        align="left"
                                        visibility="hidden"
                                    >
                                        Heading space
                                    </Text>
                                    {rightColumn.map((name, index) => (
                                        <Text
                                            fontSize={'36px'}
                                            lineHeight={'1.36'}
                                            align="left"
                                            key={index}
                                        >
                                            {name}
                                        </Text>
                                    ))}
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
                    <Box p="6" id="photographer">
                        <Grid
                            templateColumns="repeat(12, 1fr)"
                            h={'calc(100vh - var(--chakra-sizes-12))'}
                        >
                            <GridItem colStart={2} colEnd={7}>
                                <Box pt={32}>
                                    <ChakraNextImage
                                        {...img}
                                        src={
                                            kaiwhakaahua.attributes.whakaahua
                                                .data.attributes.url
                                        }
                                        alt={
                                            kaiwhakaahua.attributes.whakaahua
                                                .data.attributes.alternativeText
                                        }
                                        width={
                                            kaiwhakaahua.attributes.whakaahua
                                                .data.attributes.width
                                        }
                                        height={
                                            kaiwhakaahua.attributes.whakaahua
                                                .data.attributes.height
                                        }
                                        blurhash={blurhash}
                                        sizes={
                                            '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
                                        }
                                    />
                                </Box>
                            </GridItem>
                            <GridItem colStart={8} colEnd={13}>
                                <Box
                                    pt={32}
                                    fontSize={'36px'}
                                    lineHeight={'1.36'}
                                    align="left"
                                >
                                    <Text>{kaiwhakaahua.attributes.ingoa}</Text>
                                    <Text>
                                        {kaiwhakaahua.attributes.korero}
                                    </Text>
                                    <Text>
                                        {kaiwhakaahua.attributes.whakapapa}
                                    </Text>
                                    <Text>
                                        {kaiwhakaahua.attributes.paetukutuku}
                                    </Text>
                                </Box>
                            </GridItem>
                        </Grid>
                    </Box>
                </Layout>
            </main>
        </>
    )
}

export async function getStaticProps() {
    const [koreroResponse, kaiwhakaahuaResponse] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/tu-tama-korero`),
        fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/kaiwhakaahua?populate=whakaahua.*`
        )
    ])

    const korero = await koreroResponse.json()
    const kaiwhakaahua = await kaiwhakaahuaResponse.json()

    const imageUrl = kaiwhakaahua.data.attributes.whakaahua.data.attributes.url
    const { blurhash, img } = await getPlaiceholder(imageUrl)

    return {
        props: {
            korero: korero.data,
            kaiwhakaahua: kaiwhakaahua.data,
            img,
            blurhash
        }
    }
}
