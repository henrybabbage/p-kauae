import ChakraNextImage from '@/components/ChakraNextImage'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import LandingBanner from '@/components/LandingBanner'
import LandingVideo from '@/components/LandingVideo'
import LinkPrompt from '@/components/LinkPrompt'
import { MotionBox } from '@/components/MotionBox'
import SectionBreakIcon from '@/components/SectionBreakIcon'
import SmoothScroll from '@/components/SmoothScroll'
import { cloudfrontDomain } from '@/utils/api'
import {
    Box,
    Flex,
    Grid,
    GridItem,
    Heading,
    Link,
    Text
} from '@chakra-ui/react'
import { useRef } from 'react'
import { CustomPortableText } from './CustomPortableText'
import PreviewButton from './PreviewButton'

export default function HomePage({ kaiwhakaahua, korero, preview }) {
    const baseUrlVideo = cloudfrontDomain
    const {
        whakataukii,
        tangata_mihia,
        tuhinga_matua,
        tuhinga_timatanga,
        tuhinga_timatanga_english,
        ropu,
        tuhinga_whakaraapopoto,
        mihi,
        tuhinga_tauaakii_whakamaunga_atu,
        opening_video,
        opening_video_korero,
        opening_video_title,
        opening_video_poster,
        tuhinga_whakamutunga
    } = korero

    const playerRef = useRef()
    const videoRef = useRef(null)

    // split array of items into two columns
    const acknowledgementsList = tangata_mihia
    const leftColumn = acknowledgementsList.slice(0, 8)
    const rightColumn = acknowledgementsList.slice(8, 16)

    return (
        <Box as="main">
            <Header />
            {preview && <PreviewButton />}
            <SmoothScroll>
                <Box>
                    <Box id="about" bg="grey.900">
                        <Grid
                            templateColumns="repeat(12, 1fr)"
                            px={['6', '6', '6', '0', '0', '0']}
                            w="100vw"
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
                                    height="80vh"
                                >
                                    <LandingBanner
                                        reoText={tuhinga_timatanga}
                                        englishText={tuhinga_timatanga_english}
                                    />
                                </Flex>
                                <MotionBox pt={['0', '0', '0', '4', '4', '4']}>
                                    <SectionBreakIcon />
                                </MotionBox>
                            </GridItem>
                            <GridItem
                                colStart={[1, 1, 1, 1, 4, 4]}
                                colEnd={[13, 13, 13, 12, 12, 12]}
                                pt={['0', '0', '6', '6', '6', '6']}
                                pb={['0', '0', '6', '6', '6', '6']}
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
                                        src={opening_video}
                                        baseUrlVideo={baseUrlVideo}
                                        videoKorero={opening_video_korero}
                                        videoTitle={opening_video_title}
                                        poster={opening_video_poster.asset.url}
                                        alt="Pūkauae exhibition opening 11th December 2019"
                                        autoplay={false}
                                        controls={true}
                                        muted={false}
                                        loop={false}
                                    />
                                </Box>
                            </GridItem>
                            <GridItem
                                colStart={[1, 1, 1, 4, 4, 4]}
                                colEnd={[13, 13, 13, 12, 12, 12]}
                                pt={['2', '2', '6', '6', '6', '6']}
                                pb={['6', '6', '6', '6', '6', '6']}
                            >
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
                                        fontSize={[
                                            '24px',
                                            '24px',
                                            '24px',
                                            '46px',
                                            '74px',
                                            '84px'
                                        ]}
                                        lineHeight="1.36"
                                        textAlign="left"
                                        color="pink.200"
                                        pb={['6', '6', '6', '10', '10', '10']}
                                    >
                                        Acknowledgements
                                    </Heading>
                                    <CustomPortableText
                                        as={'p'}
                                        sx={{
                                            fontSize: [
                                                '24px',
                                                '24px',
                                                '24px',
                                                '32px',
                                                '32px',
                                                '32px'
                                            ],
                                            lineHeight: ['1.36'],
                                            color: 'white'
                                        }}
                                        value={mihi}
                                    />
                                </Flex>
                            </GridItem>
                            <GridItem
                                colStart={[1, 1, 1, 4, 4, 4]}
                                colEnd={[13, 13, 13, 8, 8, 8]}
                                pt={['2', '2', '6', '6', '6', '6']}
                                pb={['6', '6', '6', '6', '6', '6']}
                                height="auto"
                            >
                                <Flex
                                    as="div"
                                    justify="center"
                                    flexDirection="column"
                                    height={[
                                        '40vh',
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
                                            '74px',
                                            '84px'
                                        ]}
                                        lineHeight="1.36"
                                        textAlign="left"
                                        color="pink.200"
                                        w="100vw"
                                        pb={['2', '2', '2', '10', '10', '10']}
                                    >
                                        A special thanks to
                                    </Heading>
                                    {leftColumn.map((name, index) => (
                                        <Text
                                            fontSize={[
                                                '24px',
                                                '24px',
                                                '24px',
                                                '32px',
                                                '32px',
                                                '32px'
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
                                                '32px',
                                                '32px',
                                                '32px'
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
                                <CustomPortableText
                                    as={'p'}
                                    sx={{
                                        fontSize: [
                                            '24px',
                                            '24px',
                                            '24px',
                                            '32px',
                                            '32px',
                                            '32px'
                                        ],
                                        lineHeight: ['1.36'],
                                        color: 'white'
                                    }}
                                    value={tuhinga_matua}
                                />
                            </GridItem>
                            <GridItem
                                colStart={[1, 1, 1, 4, 4]}
                                colEnd={[13, 13, 13, 12, 12]}
                                pt={['6', '6', '6', '16', '16']}
                            >
                                <CustomPortableText
                                    as={'p'}
                                    sx={{
                                        fontSize: [
                                            '24px',
                                            '24px',
                                            '24px',
                                            '32px',
                                            '32px',
                                            '32px'
                                        ],
                                        lineHeight: ['1.36'],
                                        color: 'white'
                                    }}
                                    value={tuhinga_tauaakii_whakamaunga_atu}
                                />
                            </GridItem>
                            <GridItem
                                colStart={[1, 1, 1, 4, 4]}
                                colEnd={[13, 13, 13, 12, 12]}
                                pt={['6', '6', '6', '16', '16']}
                            >
                                <CustomPortableText
                                    as={'p'}
                                    sx={{
                                        fontSize: [
                                            '24px',
                                            '24px',
                                            '24px',
                                            '32px',
                                            '32px',
                                            '32px'
                                        ],
                                        lineHeight: ['1.36'],
                                        color: 'white'
                                    }}
                                    value={ropu}
                                />
                            </GridItem>
                            <GridItem
                                colStart={[1, 1, 1, 2, 2]}
                                colEnd={[13, 13, 13, 12, 12]}
                                pt={['6', '6', '6', '16', '16']}
                            >
                                <Flex justifyContent="center">
                                    <CustomPortableText
                                        as={'h2'}
                                        sx={{
                                            fontFamily: 'subheading',
                                            fontSize: [
                                                '36px',
                                                '36px',
                                                '36px',
                                                '62px',
                                                '62px',
                                                '72px'
                                            ],
                                            lineHeight: '1.10',
                                            textAlign: 'left',
                                            color: 'pink.200',
                                            width: '100%',
                                            py: '6'
                                        }}
                                        value={whakataukii}
                                    />
                                </Flex>
                            </GridItem>
                            <GridItem
                                colStart={[1, 1, 1, 4, 4]}
                                colEnd={[13, 13, 13, 12, 12]}
                                pt={['6', '6', '6', '16', '16']}
                                whiteSpace="pre-line"
                            >
                                <CustomPortableText
                                    as={'p'}
                                    sx={{
                                        fontSize: [
                                            '24px',
                                            '24px',
                                            '24px',
                                            '32px',
                                            '32px',
                                            '32px'
                                        ],
                                        lineHeight: ['1.36'],
                                        color: 'white'
                                    }}
                                    value={tuhinga_whakamutunga}
                                />
                            </GridItem>
                            <GridItem
                                colStart={[1, 1, 1, 4, 4, 4]}
                                colEnd={[13, 13, 13, 12, 12, 12]}
                                pt={['6', '6', '6', '16', '16']}
                                whiteSpace="pre-line"
                            >
                                <CustomPortableText
                                    as={'p'}
                                    sx={{
                                        fontSize: [
                                            '24px',
                                            '24px',
                                            '24px',
                                            '32px',
                                            '32px',
                                            '32px'
                                        ],
                                        lineHeight: ['1.36'],
                                        color: 'white'
                                    }}
                                    value={tuhinga_whakaraapopoto}
                                />
                            </GridItem>
                        </Grid>
                    </Box>
                </Box>
                <Box
                    id="photographer"
                    bg="grey.900"
                    pt={['24', '24', '24', null, null, null]}
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
                        px={['6', '6', '6', '6', '6', '6']}
                        pb={['2', '2', '2', '2', '2', '2']}
                    >
                        <Box
                            w="84vw"
                            pb={['4', '4', '8', '0', '0', '0']}
                            height="100vh"
                            display="flex"
                            flexDirection="column-reverse"
                            // marginTop="auto"
                        >
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
                                        pb={['2', '2', '2', '10', '10', '10']}
                                    >
                                        {kaiwhakaahua.ingoa}
                                        <br />
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
                                        ml={['0', '0', '0', '4', '4', '4']}
                                        pb={['2', '2', '2', '0', '0', '0']}
                                    >
                                        {kaiwhakaahua.whakapapa}
                                    </Text>
                                </Flex>
                                <Box
                                    fontFamily="body"
                                    fontSize={[
                                        '24px',
                                        '24px',
                                        '24px',
                                        '30px',
                                        '30px',
                                        '30px'
                                    ]}
                                    lineHeight="1.36"
                                    textAlign="left"
                                    color="white"
                                >
                                    <CustomPortableText
                                        as={'p'}
                                        sx={{
                                            fontSize: [
                                                '24px',
                                                '24px',
                                                '24px',
                                                '32px',
                                                '32px',
                                                '32px'
                                            ],
                                            lineHeight: ['1.36'],
                                            color: 'white'
                                        }}
                                        value={kaiwhakaahua.korero}
                                    />
                                </Box>
                                <Link
                                    href={`https://${kaiwhakaahua.paetukutuku}`}
                                    isExternal
                                    variant="menu"
                                >
                                    <Text
                                        fontFamily="heading"
                                        fontSize={[
                                            '24px',
                                            '24px',
                                            '24px',
                                            '32px',
                                            '32px',
                                            '32px'
                                        ]}
                                        lineHeight="1.36"
                                        textAlign="left"
                                    >
                                        <br />
                                        {kaiwhakaahua.paetukutuku}
                                    </Text>
                                </Link>
                            </Flex>
                        </Box>
                        <Box
                            // marginTop="auto"
                            pb={['10', '10', '10', '0', '0', '0']}
                            h={[
                                '100vh',
                                '100vh',
                                '100vh',
                                '100vh',
                                '100vh',
                                '100vh'
                            ]}
                            w={['66vw', '66vw', '66vw', '32vw', '32vw', '32vw']}
                            display="flex"
                            flexDirection="column-reverse"
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
                                    src={kaiwhakaahua.whakaahua.asset.url}
                                    alt="Tania Niwa"
                                    width={720}
                                    height={648}
                                    fill
                                    blurhash={
                                        kaiwhakaahua.whakaahua.asset.metadata
                                            .blurHash
                                    }
                                    sizes={
                                        '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
                                    }
                                />
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
                <Box h="100vh" w="100vw" position="relative">
                    <Flex
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        h="100%"
                        w="100%"
                    >
                        <LinkPrompt />
                    </Flex>
                </Box>
                <Box pb={['4', '4', '4', '6', '6', '6']}>
                    <Footer />
                </Box>
            </SmoothScroll>
        </Box>
    )
}
