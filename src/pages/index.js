import AboutBanner from '@/components/AboutBanner'
import BackgroundImage from '@/components/BackgroundImage'
import { ChakraBox } from '@/components/ChakraBox'
import ChakraNextImage from '@/components/ChakraNextImage'
import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react'

import SmoothScroll from '@/components/SmoothScroll'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import { getPlaiceholder } from 'plaiceholder'
import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'

export default function Home({
    korero,
    kaiwhakaahua,
    portrait,
    portraitImg,
    portraitBlurhash,
    heroVideo,
    baseUrlVideo
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
    const lines = acknowledgementsList.split('Coles')
    const leftColumn = lines[0]
    const rightColumn = lines[1]

    const container = {
        animate: {
            transition: {
                staggerChildren: 0.35
            }
        }
    }

    const itemMain = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                ease: 'easeIn',
                duration: 2.5
            }
        }
    }

    return (
        <>
            <main>
                <SmoothScroll>
                    <Box id="about" bg="grey.800">
                        <Grid templateColumns="repeat(12, 1fr)">
                            <GridItem
                                colStart={1}
                                colEnd={13}
                                h="100vh"
                                overflow="hidden"
                            >
                                <ChakraBox
                                    initial="initial"
                                    animate="animate"
                                    variants={container}
                                >
                                    <ChakraBox variants={itemMain}>
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
                                        <AboutBanner />
                                    </Flex>
                                </ChakraBox>
                            </GridItem>
                            <GridItem colStart={2} colEnd={12} pt="6" pb="6">
                                <Flex
                                    pt="12"
                                    justify="center"
                                    flexDirection={'column'}
                                    height={
                                        'calc(100vh - var(--chakra-sizes-12))'
                                    }
                                >
                                    <VideoPlayer
                                        src={heroVideo}
                                        baseUrlVideo={baseUrlVideo}
                                        alt="Pūkauae Exhibition Opening 11th December 2019"
                                        autoPlay={false}
                                        controls={true}
                                        muted={false}
                                        loop={false}
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
                                    <Heading
                                        as="h2"
                                        fontFamily="heading"
                                        fontSize="84px"
                                        lineHeight="1.36"
                                        textAlign="left"
                                        color="pink.200"
                                        pb="10"
                                    >
                                        Acknowledgements
                                    </Heading>
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
                                    flexDirection="column"
                                    height="100vh"
                                    lineHeight="1.36"
                                >
                                    <Heading
                                        as="h2"
                                        fontFamily="heading"
                                        fontSize="84px"
                                        lineHeight="1.36"
                                        textAlign="left"
                                        color="pink.200"
                                        w="100vw"
                                        pb="10"
                                    >
                                        A special thanks to
                                    </Heading>

                                    <Text
                                        fontSize="36px"
                                        lineHeight="1.36"
                                        textAlign="left"
                                        color="white"
                                    >
                                        {leftColumn}
                                    </Text>
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
                                    <Text
                                        fontSize={'36px'}
                                        lineHeight={'1.36'}
                                        textAlign="left"
                                        color="white"
                                    >
                                        {rightColumn}
                                    </Text>
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
                    <Box id="photographer" bg="grey.800">
                        <Grid templateColumns="repeat(12, 1fr)" h="100vh">
                            <GridItem
                                colStart={1}
                                colEnd={9}
                                marginTop="auto"
                                px="6"
                            >
                                <Flex
                                    h="55vh"
                                    flexDirection="column"
                                    alignItems="start"
                                    textAlign="left"
                                    color="white"
                                >
                                    <Flex alignItems="baseline" pt={6}>
                                        <Heading
                                            fontSize="84px"
                                            lineHeight="1"
                                            textAlign="left"
                                            color="pink.200"
                                            pb="10"
                                        >
                                            {kaiwhakaahua.ingoa}
                                        </Heading>
                                        <Text
                                            fontFamily="heading"
                                            fontSize="24px"
                                            lineHeight="1.36"
                                            textAlign="left"
                                            color="pink.200"
                                            ml="4"
                                        >
                                            {kaiwhakaahua.whakapapa}
                                        </Text>
                                    </Flex>
                                    <Text
                                        fontFamily="heading"
                                        fontSize={'36px'}
                                        lineHeight={'1.36'}
                                        textAlign="left"
                                        color="white"
                                        pb="28"
                                    >
                                        {kaiwhakaahua.korero}
                                    </Text>
                                    <Text
                                        fontFamily="heading"
                                        fontSize={'36px'}
                                        lineHeight={'1.36'}
                                        textAlign="left"
                                        color="white"
                                    >
                                        {kaiwhakaahua.paetukutuku}
                                    </Text>
                                </Flex>
                            </GridItem>
                            <GridItem colStart={9} colEnd={13} marginTop="auto">
                                <Flex
                                    px="8"
                                    pt="4"
                                    pb="10"
                                    flexDirection="column"
                                    flexFlow="column"
                                    alignItems="baseline"
                                    filter="grayscale(100%)"
                                >
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
                                </Flex>
                            </GridItem>
                        </Grid>
                    </Box>
                </SmoothScroll>
            </main>
        </>
    )
}

import VideoPlayer from '@/components/VideoPlayer'
import fsPromises from 'fs/promises'
import path from 'path'
export async function getStaticProps() {
    const filePath = path.join(process.cwd(), '/public/backend_data_final.json')
    const jsonData = await fsPromises.readFile(filePath)
    const objectData = JSON.parse(jsonData)

    const baseUrl = objectData.whakaahua_s3_bucket
    const baseUrlVideo = objectData.kiriata_cloudfront
    const heroVideo = objectData.tu_tama_korero.opening_video
    const imagePath = objectData.kaiwhakaahua.whakaahua.original
    const imageUrl = `${baseUrl}${imagePath}`

    const { blurhash, img } = await getPlaiceholder(imageUrl)

    return {
        props: {
            korero: objectData.tu_tama_korero,
            kaiwhakaahua: objectData.kaiwhakaahua,
            portrait: imageUrl,
            portraitImg: img,
            portraitBlurhash: blurhash,
            heroVideo: heroVideo,
            baseUrlVideo: baseUrlVideo
        }
    }
}
