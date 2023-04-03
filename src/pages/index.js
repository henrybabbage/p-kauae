import ChakraNextImage from '@/components/ChakraNextImage'
import LandingBanner from '@/components/LandingBanner'
import LandingVideo from '@/components/LandingVideo'
import { MotionBox } from '@/components/MotionBox'
import SmoothScroll from '@/components/SmoothScroll'
import {
    Box,
    Flex,
    Grid,
    GridItem,
    Heading,
    Link,
    Text,
    useMediaQuery
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
                <Text
                    fontSize={['24px', '24px', '24px', '36px', '36px', '36px']}
                    lineHeight={['1.36']}
                    color="white"
                >
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
                    my={['68px', '68px', '78px', '78px', '78px']}
                    fontSize={['60px', '60px', '60px', '72px', '72px', '72px']}
                    fontFamily="heading"
                    lineHeight="1"
                    textAlign="center"
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

    const videoRef = useRef(null)

    const scrollToRef = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    const [isDesktop] = useMediaQuery('(min-width: 992px)', {
        ssr: true,
        fallback: false
    })

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
                            <Flex
                                direction="column"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Box
                                    position="absolute"
                                    bottom="150"
                                    right="150"
                                >
                                    <MotionBox position="relative">
                                        <ScrollPrompt />
                                    </MotionBox>
                                </Box>
                            </Flex>
                        </GridItem>
                        <GridItem
                            colStart={[1, 1, 1, 1, 4]}
                            colEnd={[13, 13, 13, 12, 12]}
                            pt={['0', '0', '6', '6', '6']}
                            pb={['0', '0', '6', '6', '6']}
                        >
                            <Flex
                                pt="12"
                                justify="center"
                                flexDirection={'column'}
                                height={[
                                    '10vh',
                                    '10vh',
                                    '10vh',
                                    '25vh',
                                    '25vh',
                                    '25vh'
                                ]}
                            ></Flex>
                        </GridItem>
                        <GridItem
                            colStart={[1, 1, 1, 2, 2, 2]}
                            colEnd={[13, 13, 13, 12, 12, 12]}
                            pt={['0', '0', '6', '6', '6']}
                            pb={['0', '0', '6', '6', '6']}
                            h={[
                                'fit-content',
                                'fit-content',
                                'fit-content',
                                '100vh',
                                '100vh',
                                '100vh'
                            ]}
                            ref={videoRef}
                            id="video"
                        >
                            <Box
                                className="player"
                                h={[
                                    'auto',
                                    'auto',
                                    'auto',
                                    '100vh',
                                    '100vh',
                                    '100vh'
                                ]}
                                w={[
                                    '100%',
                                    '100%',
                                    '100%',
                                    '100%',
                                    '100%',
                                    '100%'
                                ]}
                            >
                                <LandingVideo
                                    playerRef={playerRef}
                                    src={heroVideo}
                                    baseUrlVideo={baseUrlVideo}
                                    videoKorero={videoKorero}
                                    videoTitle={videoTitle}
                                    alt="Pūkauae exhibition opening 11th December 2019"
                                    autoplay={false}
                                    controls={true}
                                    muted={false}
                                    loop={false}
                                />
                            </Box>
                        </GridItem>
                        <GridItem
                            colStart={[1, 1, 1, 1, 4, 4]}
                            colEnd={[13, 13, 13, 12, 12, 12]}
                            pt={['2', '2', '6', '6', '6', '6']}
                            pb={['6', '6', '6', '6', '6', '6']}
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
                                        '24px',
                                        '24px',
                                        '24px',
                                        '46px',
                                        '84px',
                                        '84px'
                                    ]}
                                    lineHeight="1.36"
                                    textAlign="left"
                                    color="pink.200"
                                    pb={['6', '6', '10', '10', '10']}
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
                            colStart={[1, 1, 1, 4, 4, 4]}
                            colEnd={[13, 13, 13, 8, 8, 8]}
                            pt={['2', '2', '6', '6', '6']}
                            pb={['6', '6', '6', '6', '6']}
                            height="auto"
                        >
                            <Flex
                                as="div"
                                justify="center"
                                flexDirection="column"
                                height={[
                                    '40vh',
                                    '40vh',
                                    '100vh',
                                    '100vh',
                                    '100vh'
                                ]}
                                lineHeight="1.36"
                            >
                                <Heading
                                    as="h2"
                                    fontFamily="heading"
                                    fontSize={[
                                        '24px',
                                        '24px',
                                        '24px',
                                        '46px',
                                        '84px',
                                        '84px'
                                    ]}
                                    lineHeight="1.36"
                                    textAlign="left"
                                    color="pink.200"
                                    w="100vw"
                                    pb={['2', '2', '10', '10', '10']}
                                >
                                    A special thanks to
                                </Heading>
                                {leftColumn.map((name, index) => (
                                    <Text
                                        fontSize={[
                                            '24px',
                                            '24px',
                                            '24px',
                                            '36px',
                                            '36px',
                                            '36px'
                                        ]}
                                        lineHeight="1.36"
                                        textAlign="left"
                                        color="white"
                                        key={index}
                                        height="auto"
                                    >
                                        {name}
                                    </Text>
                                ))}
                            </Flex>
                        </GridItem>
                        <GridItem
                            colStart={[1, 1, 1, 9, 9]}
                            colEnd={[13, 13, 13, 13, 13]}
                            pt={['2', '2', '2', '6', '6', '6']}
                            pb={['36', '36', '36', '6', '6']}
                            height="auto"
                        >
                            <Flex
                                as="div"
                                justify="center"
                                flexDirection="column"
                                height={[
                                    '40vh',
                                    '40vh',
                                    '100vh',
                                    '100vh',
                                    '100vh'
                                ]}
                                lineHeight="1.36"
                            >
                                <Heading
                                    as="h2"
                                    fontFamily="heading"
                                    fontSize={[
                                        '24px',
                                        '24px',
                                        '24px',
                                        '46px',
                                        '84px',
                                        '84px'
                                    ]}
                                    lineHeight="1.36"
                                    textAlign="left"
                                    color="pink.200"
                                    w={[
                                        '98vw',
                                        '98vw',
                                        '98vw',
                                        '100vw',
                                        '100vw',
                                        '100vw'
                                    ]}
                                    pb={['2', '2', '10', '10', '10']}
                                    visibility="hidden"
                                >
                                    Heading space
                                </Heading>
                                {rightColumn.map((name, index) => (
                                    <Text
                                        fontSize={[
                                            '24px',
                                            '24px',
                                            '24px',
                                            '36px',
                                            '36px',
                                            '36px'
                                        ]}
                                        lineHeight="1.36"
                                        textAlign="left"
                                        color="white"
                                        key={index}
                                        height="auto"
                                    >
                                        {name}
                                    </Text>
                                ))}
                            </Flex>
                        </GridItem>
                        <GridItem
                            colStart={[1, 1, 1, 4, 4]}
                            colEnd={[13, 13, 13, 12, 12]}
                            pt={['16', '16', '16', '16', '16']}
                        >
                            <ReactMarkdown
                                remarkPlugins={[remarkBreaks]}
                                components={ChakraUIRenderer(markdownTheme)}
                                children={korero.tuhinga_matua}
                                skipHtml
                            />
                        </GridItem>
                        <GridItem
                            colStart={[1, 1, 1, 4, 4]}
                            colEnd={[13, 13, 13, 12, 12]}
                            pt={['6', '6', '6', '16', '16']}
                        >
                            <ReactMarkdown
                                remarkPlugins={[remarkBreaks]}
                                components={ChakraUIRenderer(markdownTheme)}
                                children={
                                    korero.tuhinga_tauaakii_whakamaunga_atu
                                }
                                skipHtml
                            />
                        </GridItem>
                        <GridItem
                            colStart={[1, 1, 1, 4, 4]}
                            colEnd={[13, 13, 13, 12, 12]}
                            pt={['6', '6', '6', '16', '16']}
                        >
                            <ReactMarkdown
                                remarkPlugins={[remarkBreaks]}
                                components={ChakraUIRenderer(markdownTheme)}
                                children={korero.ropu}
                                skipHtml
                            />
                        </GridItem>
                        <GridItem
                            colStart={[1, 1, 1, 2, 2]}
                            colEnd={[13, 13, 13, 12, 12]}
                            pt={['6', '6', '6', '16', '16']}
                        >
                            <Flex justifyContent="center">
                                <Heading
                                    as="h2"
                                    fontFamily="subheading"
                                    fontSize={[
                                        '40px',
                                        '48px',
                                        '48px',
                                        '84px',
                                        '84px',
                                        '84px'
                                    ]}
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
                            colStart={[1, 1, 1, 4, 4]}
                            colEnd={[13, 13, 13, 12, 12]}
                            pt={['6', '6', '6', '16', '16']}
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
                            colStart={[1, 1, 1, 4, 4]}
                            colEnd={[13, 13, 13, 12, 12]}
                            pt={['6', '6', '6', '16', '16']}
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
                <Box
                    id="photographer"
                    bg="grey.900"
                    pt={[24, 24, 24, null, null, null]}
                >
                    <Flex
                        direction={[
                            'column',
                            'column',
                            'column',
                            'row',
                            'row',
                            'row'
                        ]}
                        justifyContent={[
                            null,
                            null,
                            null,
                            'space-between',
                            'space-between',
                            'space-between'
                        ]}
                        h="100vh"
                        maxH="100vh"
                        px={['6', '6', '6', '6', '6']}
                    >
                        <Box marginTop="auto" w="80vw" h="55vh">
                            <Flex
                                flexDirection={[
                                    'column',
                                    'column',
                                    'column',
                                    'column',
                                    'column',
                                    'column'
                                ]}
                                alignItems="start"
                                textAlign="left"
                                color="white"
                            >
                                <Flex
                                    direction={[
                                        'column',
                                        'column',
                                        'column',
                                        'row',
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
                                        fontSize={[
                                            '16px',
                                            '16px',
                                            '16px',
                                            '24px',
                                            '24px',
                                            '24px'
                                        ]}
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
                                        '24px',
                                        '24px',
                                        '24px',
                                        '36px',
                                        '36px',
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
                                            '24px',
                                            '24px',
                                            '24px',
                                            '36px',
                                            '36px',
                                            '36px'
                                        ]}
                                        lineHeight="1.36"
                                        textAlign="left"
                                    >
                                        {kaiwhakaahua.paetukutuku}
                                    </Text>
                                </Link>
                            </Flex>
                        </Box>
                        <Box
                            marginTop="auto"
                            pb={['10', '10', '10', '0', '0']}
                            h="50vh"
                            w={['66vw', '66vw', '66vw', '32vw', '32vw', '32vw']}
                        >
                            <Flex
                                direction="column"
                                alignItems="baseline"
                                justifyContent={[
                                    'flex-end',
                                    'flex-end',
                                    'flex-end',
                                    null,
                                    null,
                                    null
                                ]}
                            >
                                <ChakraNextImage
                                    {...portraitImg}
                                    src={portrait}
                                    alt="Tania Niwa"
                                    // width={720}
                                    // height={648}
                                    fill
                                    blurhash={portraitBlurhash}
                                    sizes={
                                        '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
                                    }
                                />
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
            </SmoothScroll>
        </Box>
    )
}

import ScrollPrompt from '@/components/ScrollPrompt'
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
