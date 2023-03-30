import ChakraNextImage from '@/components/ChakraNextImage'
import LandingBanner from '@/components/LandingBanner'
import LandingVideo from '@/components/LandingVideo'

import SmoothScroll from '@/components/SmoothScroll'
import {
    Box,
    Flex,
    Grid,
    GridItem,
    Heading,
    Link,
    Text
} from '@chakra-ui/react'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import { getPlaiceholder } from 'plaiceholder'
import { useRef } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'

export default function Home({
    korero,
    kaiwhakaahua,
    portrait,
    portraitImg,
    portraitBlurhash,
    heroVideo,
    videoKorero,
    videoTitle,
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
    const leftColumn = acknowledgementsList.slice(0, 8)
    const rightColumn = acknowledgementsList.slice(8, 16)

    const playerRef = useRef()

    return (
        <Box as="main">
            <SmoothScroll>
                <Box id="about" bg="grey.900">
                    <Grid
                        templateColumns="repeat(12, 1fr)"
                        px={['6', '6', '6', '0', '0']}
                    >
                        <GridItem
                            colStart={1}
                            colEnd={13}
                            h="100vh"
                            overflow="hidden"
                            position="relative"
                            bg="grey.900"
                        >
                            <Flex
                                position="relative"
                                justify="center"
                                flexDirection="column"
                                height="calc(100vh - var(--chakra-sizes-12))"
                            >
                                <LandingBanner />
                            </Flex>
                        </GridItem>
                        <GridItem
                            colStart={[1, 1, 1, 1, 4]}
                            colEnd={[13, 13, 13, 12, 12]}
                            pt="6"
                            pb="6"
                        >
                            <Flex
                                pt="12"
                                justify="center"
                                flexDirection={'column'}
                                height="50vh"
                            ></Flex>
                        </GridItem>
                        <GridItem colStart={2} colEnd={12} pt="6" pb="6">
                            <Box
                                className="player"
                                h={['auto', 'auto', 'auto', '100vh']}
                                w="100%"
                            >
                                <LandingVideo
                                    playerRef={playerRef}
                                    src={heroVideo}
                                    baseUrlVideo={baseUrlVideo}
                                    videoKorero={videoKorero}
                                    videoTitle={videoTitle}
                                    alt="Pūkauae Exhibition Opening 11th December 2019"
                                    autoplay={false}
                                    controls={true}
                                    muted={false}
                                    loop={false}
                                />
                            </Box>
                        </GridItem>
                        <GridItem
                            colStart={[1, 1, 1, 1, 4]}
                            colEnd={[13, 13, 13, 12, 12]}
                            pt="6"
                            pb="6"
                        >
                            <Flex
                                justify="center"
                                flexDirection={'column'}
                                height={'calc(100vh - var(--chakra-sizes-12))'}
                            >
                                <Heading
                                    as="h2"
                                    fontFamily="heading"
                                    fontSize={[
                                        '36px',
                                        '36px',
                                        '46px',
                                        '46',
                                        '84px'
                                    ]}
                                    lineHeight="1.36"
                                    textAlign="left"
                                    color="pink.200"
                                    pb="10"
                                >
                                    Acknowledgements
                                </Heading>
                                <ReactMarkdown
                                    remarkPlugins={[remarkBreaks]}
                                    components={ChakraUIRenderer(markdownTheme)}
                                    children={korero.mihi}
                                    skipHtml
                                />
                            </Flex>
                        </GridItem>
                        <GridItem
                            colStart={[1, 1, 1, 4, 4]}
                            colEnd={[13, 13, 13, 8, 8]}
                            pt="6"
                            pb="6"
                        >
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
                                    fontSize={['36px', '46px', '46', '84px']}
                                    lineHeight="1.36"
                                    textAlign="left"
                                    color="pink.200"
                                    w="100vw"
                                    pb="10"
                                >
                                    A special thanks to
                                </Heading>
                                {leftColumn.map((name, index) => (
                                    <Text
                                        fontSize="36px"
                                        lineHeight="1.36"
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
                            colStart={[1, 1, 1, 9, 9]}
                            colEnd={[13, 13, 13, 13, 13]}
                            pt="6"
                            pb="6"
                        >
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
                                    visibility="hidden"
                                >
                                    Heading space
                                </Heading>
                                {rightColumn.map((name, index) => (
                                    <Text
                                        fontSize="36px"
                                        lineHeight="1.36"
                                        textAlign="left"
                                        color="white"
                                        key={index}
                                    >
                                        {name}
                                    </Text>
                                ))}
                            </Flex>
                        </GridItem>
                        <GridItem colStart={4} colEnd={12} pt="16">
                            <ReactMarkdown
                                remarkPlugins={[remarkBreaks]}
                                components={ChakraUIRenderer(markdownTheme)}
                                children={korero.tuhinga_matua}
                                skipHtml
                            />
                        </GridItem>
                        <GridItem colStart={4} colEnd={12} pt="16">
                            <ReactMarkdown
                                remarkPlugins={[remarkBreaks]}
                                components={ChakraUIRenderer(markdownTheme)}
                                children={
                                    korero.tuhinga_tauaakii_whakamaunga_atu
                                }
                                skipHtml
                            />
                        </GridItem>
                        <GridItem colStart={4} colEnd={12} pt="16">
                            <ReactMarkdown
                                remarkPlugins={[remarkBreaks]}
                                components={ChakraUIRenderer(markdownTheme)}
                                children={korero.ropu}
                                skipHtml
                            />
                        </GridItem>
                        <GridItem colStart={2} colEnd={12} pt="16">
                            <Flex justifyContent="center">
                                <Heading
                                    as="h2"
                                    fontFamily="subheading"
                                    fontSize={['36px', '46px', '56', '84px']}
                                    lineHeight="1"
                                    textAlign="center"
                                    color="pink.200"
                                    w="100%"
                                    py="6"
                                >
                                    {korero.whakataukii}
                                </Heading>
                            </Flex>
                        </GridItem>
                        <GridItem
                            colStart={4}
                            colEnd={12}
                            pt="16"
                            whiteSpace="pre-line"
                        >
                            <ReactMarkdown
                                remarkPlugins={[remarkBreaks]}
                                components={ChakraUIRenderer(markdownTheme)}
                                children={korero.tuhinga_whakamutunga}
                                skipHtml
                            />
                        </GridItem>
                        <GridItem
                            colStart={4}
                            colEnd={12}
                            pt="16"
                            whiteSpace="pre-line"
                        >
                            <ReactMarkdown
                                remarkPlugins={[remarkBreaks]}
                                components={ChakraUIRenderer(markdownTheme)}
                                children={korero.tuhinga_whakaraapopoto}
                                skipHtml
                            />
                        </GridItem>
                    </Grid>
                </Box>
                <Box id="photographer" bg="grey.900">
                    <Grid
                        templateColumns="repeat(12, 1fr)"
                        h="100vh"
                        maxH="100vh"
                        px={['6', '6', '6', '0', '0']}
                    >
                        <GridItem
                            colStart={1}
                            colEnd={[13, 13, 9, 9]}
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
                                <Flex
                                    direction={[
                                        'column',
                                        'column',
                                        'row',
                                        'row'
                                    ]}
                                    alignItems="baseline"
                                    pt={6}
                                >
                                    <Heading
                                        fontSize={[
                                            '36px',
                                            '36px',
                                            '46px',
                                            '56px',
                                            '84px'
                                        ]}
                                        lineHeight="1"
                                        textAlign="left"
                                        color="pink.200"
                                        pb={['2', '2', '10', '10']}
                                    >
                                        {kaiwhakaahua.ingoa}
                                    </Heading>
                                    <Text
                                        fontFamily="heading"
                                        fontSize="24px"
                                        lineHeight="1.36"
                                        textAlign="left"
                                        color="pink.200"
                                        ml={['0', '0', '4', '4']}
                                        pb={['2', '2', '0', '0']}
                                    >
                                        {kaiwhakaahua.whakapapa}
                                    </Text>
                                </Flex>
                                <Text
                                    fontFamily="heading"
                                    fontSize={[
                                        '26px',
                                        '26px',
                                        '26px',
                                        '36',
                                        '36px'
                                    ]}
                                    lineHeight="1.36"
                                    textAlign="left"
                                    color="white"
                                >
                                    {kaiwhakaahua.korero}
                                </Text>
                                <Link
                                    href={`https://${kaiwhakaahua.paetukutuku}`}
                                    isExternal
                                    variant="menu"
                                    bottom="8"
                                    position="absolute"
                                >
                                    <Text
                                        fontFamily="heading"
                                        fontSize={[
                                            '26px',
                                            '26px',
                                            '26px',
                                            '36',
                                            '36px'
                                        ]}
                                        lineHeight="1.36"
                                        textAlign="left"
                                    >
                                        {kaiwhakaahua.paetukutuku}
                                    </Text>
                                </Link>
                            </Flex>
                        </GridItem>
                        <GridItem
                            colStart={[1, 1, 1, 9, 9]}
                            colEnd={[13, 13, 13, 13, 13]}
                            marginTop="auto"
                            pb={['10', '10', '10', '0', '0']}
                        >
                            <Flex
                                px="8"
                                pt="4"
                                pb="10"
                                flexDirection="column"
                                flexFlow="column"
                                alignItems="baseline"
                            >
                                <ChakraNextImage
                                    {...portraitImg}
                                    src={portrait}
                                    alt="Tania Niwa"
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
        </Box>
    )
}

import fsPromises from 'fs/promises'
import path from 'path'
export async function getStaticProps() {
    const filePath = path.join(process.cwd(), '/public/backend_data_final.json')
    const jsonData = await fsPromises.readFile(filePath)
    const objectData = JSON.parse(jsonData)

    const baseUrl = objectData.whakaahua_s3_bucket
    const baseUrlVideo = objectData.kiriata_cloudfront
    const heroVideo = objectData.tu_tama_korero.opening_video
    const videoKorero = objectData.tu_tama_korero.opening_video_korero
    const videoTitle = objectData.tu_tama_korero.opening_video_title
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
            videoKorero: videoKorero,
            videoTitle: videoTitle,
            baseUrlVideo: baseUrlVideo
        }
    }
}
