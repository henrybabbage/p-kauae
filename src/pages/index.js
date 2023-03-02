import Header from '@/components/Header'
import Layout from '@/components/Layout'
import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react'

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
                <Text fontSize={'36px'} lineHeight={'1.36'} color="white">
                    {children}
                </Text>
            )
        },
        blockquote: (props) => {
            const { children } = props
            return (
                <Box
                    as="blockquote"
                    color="pink.200"
                    my="78px"
                    fontSize={'72px'}
                    fontFamily={'heading'}
                    lineHeight={'1'}
                    textAlign={'center'}
                >
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
                    <Box p="6" id="about" bg="grey.600">
                        <Grid
                            templateColumns="repeat(12, 1fr)"
                            position={'relative'}
                            scrollSnapType="y mandatory"
                            overflowY="scroll"
                            h={'100vh'}
                        >
                            <GridItem
                                colStart={2}
                                colEnd={12}
                                position={'relative'}
                                scrollSnapAlign="start"
                                h={'100vh'}
                            >
                                <Flex
                                    justify="center"
                                    flexDirection={'column'}
                                    height={
                                        'calc(100vh - var(--chakra-sizes-12))'
                                    }
                                >
                                    <Heading
                                        fontSize={'84px'}
                                        lineHeight={'1'}
                                        textAlign={'center'}
                                        color={'pink.200'}
                                    >
                                        {korero.attributes.tuhinga_timatanga}
                                    </Heading>
                                </Flex>
                            </GridItem>
                            <GridItem
                                colStart={2}
                                colEnd={12}
                                pt="6"
                                pb="6"
                                position={'relative'}
                                scrollSnapAlign="start"
                                h={'100vh'}
                            >
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
                                        textAlign="left"
                                        color="white"
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
                            <GridItem
                                colStart={2}
                                colEnd={6}
                                pt="6"
                                pb="6"
                                position={'relative'}
                                scrollSnapAlign="start"
                                h={'100vh'}
                            >
                                <Flex
                                    justify="center"
                                    flexDirection={'column'}
                                    height={'100vh'}
                                >
                                    <Text
                                        fontSize={'36px'}
                                        lineHeight={'1.36'}
                                        textAlign="left"
                                        color="white"
                                    >
                                        A special thanks to
                                    </Text>
                                    {leftColumn.map((name, index) => (
                                        <Text
                                            fontSize={'36px'}
                                            lineHeight={'1.36'}
                                            textAlign="left"
                                            color="white"
                                            key={index}
                                        >
                                            {name}
                                        </Text>
                                    ))}
                                </Flex>
                            </GridItem>
                            <GridItem
                                colStart={7}
                                colEnd={11}
                                pt="6"
                                pb="6"
                                position={'relative'}
                                scrollSnapAlign="start"
                                h={'100vh'}
                            >
                                <Flex
                                    justify="center"
                                    flexDirection={'column'}
                                    height={'100vh'}
                                >
                                    <Text
                                        fontSize={'36px'}
                                        lineHeight={'1.36'}
                                        textAlign="left"
                                        color="white"
                                        visibility="hidden"
                                    >
                                        Heading space
                                    </Text>
                                    {rightColumn.map((name, index) => (
                                        <Text
                                            fontSize={'36px'}
                                            lineHeight={'1.36'}
                                            textAlign="left"
                                            color="white"
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
                    <Box p="6" id="photographer" bg="grey.600">
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
                                    textAlign="left"
                                    color="white"
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
