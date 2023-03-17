import BackgroundImage from '@/components/BackgroundImage'
import ChakraNextImage from '@/components/ChakraNextImage'
import { ChakraBox } from '@/components/ChakraBox'
import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react'

import SmoothScroll from '@/components/SmoothScroll'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import { getPlaiceholder } from 'plaiceholder'
import ReactMarkdown from 'react-markdown'
import Balancer from 'react-wrap-balancer'
import remarkBreaks from 'remark-breaks'

export default function Home({
    korero,
    kaiwhakaahua,
    portrait,
    portraitImg,
    portraitBlurhash
}) {
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

    const acknowledgementsList = korero.tangata_mihia
    const lines = acknowledgementsList.split(/\r\n|\r|\n/)
    const leftColumn = lines.slice(0, 8)
    const rightColumn = lines.slice(8, 16)

    return (
        <>
            <main>
                <SmoothScroll>
                    <Box id="about" bg="grey.600">
                        <Grid templateColumns="repeat(12, 1fr)">
                            <GridItem colStart={1} colEnd={13}>
                                <ChakraBox initial="hidden" animate="enter">
                                    <BackgroundImage
                                        src={'/images/background.jpeg'}
                                        alt={'Taranaki landscape'}
                                    />
                                </ChakraBox>
                                <Flex
                                    position="relative"
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
                                        <Balancer ratio={1.0}>
                                            {korero.tuhinga_timatanga}
                                        </Balancer>
                                    </Heading>
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
                                        fontSize={'md'}
                                        lineHeight={'1.36'}
                                        textAlign="left"
                                        color="white"
                                    >
                                        Acknowledgements
                                        <br />
                                        <br />
                                    </Text>
                                    <ReactMarkdown
                                        remarkPlugins={[remarkBreaks]}
                                        components={ChakraUIRenderer(
                                            markdownTheme
                                        )}
                                        children={korero.mihi}
                                        skipHtml
                                    />
                                </Flex>
                            </GridItem>
                            <GridItem colStart={2} colEnd={6} pt="6" pb="6">
                                <Flex
                                    as="div"
                                    justify="center"
                                    flexDirection={'column'}
                                    height={'100vh'}
                                    lineHeight="1.36"
                                >
                                    <Text
                                        fontSize={'36px'}
                                        lineHeight={'1.36'}
                                        textAlign="left"
                                        color="white"
                                    >
                                        A special thanks to
                                        <br />
                                        <br />
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
                                        <br />
                                        <br />
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
                                    children={korero.tuhinga_matua.replace(
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
                                <Box pt={32} w="100%" h="100%">
                                    <ChakraNextImage
                                        {...portraitImg}
                                        src={portrait}
                                        alt={'Tania Niwa'}
                                        width={720}
                                        height={648}
                                        blurhash={portraitBlurhash}
                                        sizes={
                                            '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
                                        }
                                    />
                                </Box>
                            </GridItem>
                            <GridItem colStart={8} colEnd={13}>
                                <Box pt={32} textAlign="left" color="white">
                                    <Heading
                                        fontSize={'84px'}
                                        lineHeight={'1'}
                                        textAlign={'left'}
                                        color={'pink.200'}
                                    >
                                        {kaiwhakaahua.ingoa}
                                    </Heading>
                                    <Text
                                        fontSize={'36px'}
                                        lineHeight={'1.36'}
                                        textAlign="left"
                                        color="white"
                                    >
                                        {kaiwhakaahua.korero}
                                    </Text>
                                    <Text
                                        fontSize={'36px'}
                                        lineHeight={'1.36'}
                                        textAlign="left"
                                        color="white"
                                    >
                                        {kaiwhakaahua.whakapapa}
                                    </Text>
                                    <Text
                                        fontSize={'36px'}
                                        lineHeight={'1.36'}
                                        textAlign="left"
                                        color="white"
                                    >
                                        {kaiwhakaahua.paetukutuku}
                                    </Text>
                                </Box>
                            </GridItem>
                        </Grid>
                    </Box>
                </SmoothScroll>
            </main>
        </>
    )
}

import fsPromises from 'fs/promises'
import path from 'path'
export async function getStaticProps() {
    const filePath = path.join(process.cwd(), '/public/backend_data_final.json')
    const jsonData = await fsPromises.readFile(filePath)
    const objectData = JSON.parse(jsonData)

    const baseUrl = objectData.whakaahua_s3_bucket
    const imagePath = objectData.kaiwhakaahua.whakaahua.original
    const imageUrl = `${baseUrl}${imagePath}`

    const { blurhash, img } = await getPlaiceholder(imageUrl)

    return {
        props: {
            korero: objectData.tu_tama_korero,
            kaiwhakaahua: objectData.kaiwhakaahua,
            portrait: imageUrl,
            portraitImg: img,
            portraitBlurhash: blurhash
        }
    }
}
