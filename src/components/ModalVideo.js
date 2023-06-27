import { AspectRatio, Box, Flex, Heading } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

const VideoPlayer = dynamic(() => import('@/components/VideoPlayer'), {
    ssr: false
})

export default function ModalVideo({
    playerRef,
    src,
    baseUrlVideo,
    location,
    poster,
    alt
}) {
    // const videoSrc = `${baseUrlVideo}${src}`
    const videoSrc = `${src}`
    return (
        <Box position="relative" w="100%" maxWidth="100%">
            <AspectRatio
                maxH={['auto', 'auto', 'auto', '75vh', '75vh', '75vh']}
                maxW={['96vw', '96vw', '96vw', '100vw', '100vw', '100vw']}
                ratio={16 / 9}
                cursor="auto"
                display="flex"
                justifyContent="center"
            >
                <VideoPlayer
                    playerRef={playerRef}
                    src={videoSrc}
                    poster={poster}
                    title={location}
                    autoplay={true}
                    controls={false}
                    muted={true}
                    loop={true}
                    cover={false}
                    info={false}
                    isPlaying={true}
                />
            </AspectRatio>
            <Flex
                maxH={['auto', 'auto', 'auto', '75vh', '75vh', '75vh']}
                maxW={['96vw', '96vw', '96vw', '100vw', '100vw', '100vw']}
                display="flex"
                justifyContent="end"
            >
                <Heading
                    fontSize={['16px', '16px', '16px', '36px', '36px', '36px']}
                    color="white"
                    fontWeight="regular"
                    fontFamily="heading"
                    position="absolute"
                    bottom={6}
                    right={6}
                    w="fit-content"
                    textAlign="right"
                >
                    {location}
                </Heading>
            </Flex>
        </Box>
    )
}
