import LandingBanner from '@/components/Index/LandingBanner'
import { Box, Flex, Heading, Link, Text, VStack } from '@chakra-ui/react'
import PreviewButton from '../Common/Buttons/PreviewButton'
import Footer from '../Common/Footer/Footer'
import ChakraNextImage from '../Primitives/ChakraNextImage'
import { CustomPortableText } from '../Primitives/CustomPortableText'
import LenisScroll from '../Primitives/LenisScroll'
import PageTransition from '../Primitives/PageTransition'
import LandingVideo from './LandingVideo'
import LinkPrompt from './LinkPrompt'
import VerticalSpacer from './VerticalSpacer'

export default function HomePage({ korero, preview }) {
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
        tuhinga_whakamutunga,
        kaiwhakaahua
    } = korero ?? {}

    // split array of items into two columns
    const acknowledgementsList = tangata_mihia
    const leftColumn = acknowledgementsList?.slice(0, 8) || []
    const rightColumn = acknowledgementsList?.slice(8, 16) || []

    const photographerUrl = kaiwhakaahua?.paetukutuku?.replace(/^(https?:|)\/\//, '') || ''
    return (
        <Box as="main" bg="grey.900" minH="100%">
            {preview && <PreviewButton />}
            <PageTransition>
                <LenisScroll>
                    <Box id="about" h="100%" minH="100vh" w="100vw" px={['6', '6', '6', '0', '0', '0']}>
                        <Flex flexDir="column" justifyContent="center" alignItems="center" w="100%" h="100%" gap="12">
                            <LandingBanner reoText={tuhinga_timatanga} englishText={tuhinga_timatanga_english} />

                            <LandingVideo
                                src={opening_video}
                                videoKorero={opening_video_korero}
                                videoTitle={opening_video_title}
                                poster={opening_video_poster}
                                autoplay={false}
                                controls={false}
                                muted={false}
                                loop={false}
                            />

                            <VerticalSpacer height={['100%', '100%', '100%', '20vh', '20vh', '20vh']} />

                            <VStack
                                spacing={['6', '6', '6', '10', '10', '10']}
                                maxW={['100%', '100%', '100%', '84vw', '84vw', '84vw']}
                            >
                                <Heading
                                    as="h2"
                                    fontFamily={['heading', 'heading', 'heading', 'heading', 'heading', 'heading']}
                                    fontSize={['24px', '24px', '24px', '46px', '84px', '84px']}
                                    lineHeight="1.2"
                                    textAlign="left"
                                    textColor="pink.200"
                                >
                                    Acknowledgements
                                </Heading>
                                <CustomPortableText
                                    as="p"
                                    sx={{
                                        fontSize: ['24px', '24px', '24px', '32px', '32px', '32px'],
                                        lineHeight: '1.2',
                                        letterSpacing: '0.010em',
                                        textAlign: 'left',
                                        textColor: 'white',
                                        maxWidth: '65ch'
                                    }}
                                    value={mihi}
                                />
                            </VStack>

                            <VerticalSpacer height={['100%', '100%', '100%', '20vh', '20vh', '20vh']} />

                            <VStack
                                spacing={['6', '6', '6', '10', '10', '10']}
                                maxW={['100%', '100%', '100%', '84vw', '84vw', '84vw']}
                            >
                                <Heading
                                    as="h2"
                                    fontFamily={['heading', 'heading', 'heading', 'heading', 'heading', 'heading']}
                                    fontSize={['24px', '24px', '24px', '46px', '84px', '84px']}
                                    lineHeight="1.2"
                                    textAlign="left"
                                    textColor="pink.200"
                                >
                                    A special thanks to
                                </Heading>
                                <Box display="flex" gap="12">
                                    <Box display="flex" flexDir="column" flexWrap="nowrap" flexBasis="100%">
                                        {leftColumn.map((name, index) => (
                                            <Text
                                                fontSize={['24px', '24px', '24px', '32px', '32px', '32px']}
                                                lineHeight="1.2"
                                                textAlign="left"
                                                textColor="white"
                                                key={index}
                                                height="auto"
                                            >
                                                {name}
                                            </Text>
                                        ))}
                                    </Box>
                                    <Box display="flex" flexDir="column" flexWrap="nowrap" flexBasis="100%">
                                        {rightColumn.map((name, index) => (
                                            <Text
                                                fontSize={['24px', '24px', '24px', '32px', '32px', '32px']}
                                                lineHeight="1.2"
                                                textAlign="left"
                                                textColor="white"
                                                key={index}
                                                height="auto"
                                            >
                                                {name}
                                            </Text>
                                        ))}
                                    </Box>
                                </Box>
                            </VStack>

                            <VerticalSpacer height={['100%', '100%', '100%', '20vh', '20vh', '20vh']} />

                            <VStack
                                spacing={['6', '6', '6', '10', '10', '10']}
                                maxW={['100%', '100%', '100%', '84vw', '84vw', '84vw']}
                            >
                                <CustomPortableText
                                    as="p"
                                    sx={{
                                        fontSize: ['24px', '24px', '24px', '32px', '32px', '32px'],
                                        lineHeight: '1.2',
                                        letterSpacing: '0.010em',
                                        textAlign: 'left',
                                        textColor: 'white',
                                        maxWidth: '65ch'
                                    }}
                                    value={tuhinga_matua}
                                />
                                <CustomPortableText
                                    as="p"
                                    sx={{
                                        fontSize: ['24px', '24px', '24px', '32px', '32px', '32px'],
                                        lineHeight: '1.2',
                                        letterSpacing: '0.010em',
                                        textAlign: 'left',
                                        textColor: 'white',
                                        maxWidth: '65ch'
                                    }}
                                    value={tuhinga_tauaakii_whakamaunga_atu}
                                />
                                <CustomPortableText
                                    as="p"
                                    sx={{
                                        fontSize: ['24px', '24px', '24px', '32px', '32px', '32px'],
                                        lineHeight: '1.2',
                                        letterSpacing: '0.010em',
                                        textAlign: 'left',
                                        textColor: 'white',
                                        maxWidth: '65ch'
                                    }}
                                    value={ropu}
                                />
                            </VStack>

                            <Flex
                                justifyContent="center"
                                w="100%"
                                px={['16px', '16px', '16px', '16px', '16px', '16px']}
                            >
                                <CustomPortableText
                                    as="h2"
                                    sx={{
                                        fontFamily: 'heading',
                                        fontSize: ['32px', '32px', '32px', '56px', '62px', '72px'],
                                        lineHeight: ['1.2', '1.2', '1.2', '1.2', '1.1', '1.1'],
                                        letterSpacing: '0.016em',
                                        textAlign: 'left',
                                        color: 'pink.200',
                                        width: '100%',
                                        maxWidth: '65ch'
                                    }}
                                    value={whakataukii}
                                />
                            </Flex>

                            <VStack
                                spacing={['6', '6', '6', '10', '10', '10']}
                                maxW={['100%', '100%', '100%', '84vw', '84vw', '84vw']}
                            >
                                <CustomPortableText
                                    as="p"
                                    sx={{
                                        fontSize: ['24px', '24px', '24px', '32px', '32px', '32px'],
                                        lineHeight: '1.2',
                                        letterSpacing: '0.010em',
                                        textAlign: 'left',
                                        textColor: 'white',
                                        maxWidth: '65ch'
                                    }}
                                    value={tuhinga_whakamutunga}
                                />
                                <CustomPortableText
                                    as="p"
                                    sx={{
                                        fontSize: ['24px', '24px', '24px', '32px', '32px', '32px'],
                                        lineHeight: '1.2',
                                        letterSpacing: '0.010em',
                                        textAlign: 'left',
                                        textColor: 'white',
                                        maxWidth: '65ch'
                                    }}
                                    value={tuhinga_whakaraapopoto}
                                />
                            </VStack>

                            <VerticalSpacer height={['100%', '100%', '100%', '20vh', '20vh', '20vh']} />

                            <Box
                                h={['fit-content', 'fit-content', 'fit-content', '50vh', '50vh', '50vh']}
                                maxW={['100%', '100%', '100%', '100vw', '100vw', '100vw']}
                                px={['16px', '16px', '16px', '16px', '16px', '16px']}
                            >
                                <Flex direction={['column', 'column', 'column', 'row', 'row', 'row']}>
                                    <Flex
                                        flexDirection={['column', 'column', 'column', 'row', 'row', 'row']}
                                        alignItems="start"
                                        textAlign="left"
                                        color="white"
                                        gap={['6', '6', '6', '10', '10', '10']}
                                    >
                                        <Flex direction="column" basis="70%" gap={['6', '6', '6', '10', '10', '10']}>
                                            <Flex
                                                direction={['column', 'column', 'column', 'row', 'row', 'row']}
                                                alignItems="baseline"
                                                gap={['2', '2', '2', '4', '4', '4']}
                                            >
                                                <Heading
                                                    fontFamily={[
                                                        'heading',
                                                        'heading',
                                                        'heading',
                                                        'heading',
                                                        'heading',
                                                        'heading'
                                                    ]}
                                                    fontSize={['36px', '36px', '36px', '46px', '56px', '84px']}
                                                    lineHeight={['1.2', '1.2', '1.2', '1.2', '1.1', '1.1']}
                                                    textAlign="left"
                                                    textColor="pink.200"
                                                    w="fit-content"
                                                >
                                                    {kaiwhakaahua?.ingoa}
                                                    <br />
                                                </Heading>
                                                <Text
                                                    fontFamily={[
                                                        'heading',
                                                        'heading',
                                                        'heading',
                                                        'heading',
                                                        'heading',
                                                        'heading'
                                                    ]}
                                                    fontSize={['18px', '18px', '18px', '24px', '24px', '24px']}
                                                    lineHeight="1.2"
                                                    textAlign="left"
                                                    color="pink.200"
                                                    w="fit-content"
                                                >
                                                    {kaiwhakaahua?.whakapapa}
                                                </Text>
                                            </Flex>
                                            <VStack
                                                spacing={['6', '6', '6', '10', '10', '10']}
                                                display="flex"
                                                align="start"
                                            >
                                                <CustomPortableText
                                                    as="p"
                                                    sx={{
                                                        fontSize: ['24px', '24px', '24px', '32px', '32px', '32px'],
                                                        lineHeight: '1.2',
                                                        letterSpacing: '0.010em',
                                                        textAlign: 'left',
                                                        textColor: 'white',
                                                        maxWidth: '65ch'
                                                    }}
                                                    value={kaiwhakaahua?.korero}
                                                />
                                                <Link href={kaiwhakaahua?.paetukutuku} isExternal variant="menu">
                                                    <Text
                                                        fontFamily={[
                                                            'body',
                                                            'body',
                                                            'body',
                                                            'heading',
                                                            'heading',
                                                            'heading'
                                                        ]}
                                                        fontSize={['24px', '24px', '24px', '32px', '32px', '32px']}
                                                        lineHeight="1.2"
                                                        letterSpacing="0.010em"
                                                        textAlign="left"
                                                        textColor="white"
                                                    >
                                                        {photographerUrl}
                                                    </Text>
                                                </Link>
                                            </VStack>
                                        </Flex>
                                        <Flex basis="30%">
                                            <ChakraNextImage
                                                src={kaiwhakaahua?.whakaahua?.asset?.url}
                                                alt="Tania Niwa"
                                                width={720}
                                                height={648}
                                                blurhash={kaiwhakaahua?.whakaahua?.asset?.metadata?.blurHash}
                                                sizes={'(min-width: 1000px) 27vw, 50vw'}
                                            />
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Box>
                            <Box
                                h="100vh"
                                w="100vw"
                                position="relative"
                                display="flex"
                                flexDir="column"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <LinkPrompt />
                            </Box>

                            <Footer />

                            <VerticalSpacer height="4vh" />
                        </Flex>
                    </Box>
                </LenisScroll>
            </PageTransition>
        </Box>
    )
}
