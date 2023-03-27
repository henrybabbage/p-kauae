import { AspectRatio, Box, Heading } from '@chakra-ui/react'
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
    alt,
    autoplay,
    controls,
    muted,
    loop
}) {
    const videoSrc = `${baseUrlVideo}${src}`
    return (
        <Box position="relative">
            <AspectRatio
                maxH="75vh"
                maxW="100vw"
                ratio={16 / 9}
                cursor="crosshair"
                display="flex"
                justifyContent="center"
            >
                <VideoPlayer
                    playerRef={playerRef}
                    src={videoSrc}
                    autoplay={autoplay}
                    muted={muted}
                    loop={loop}
                    playing={true}
                />
            </AspectRatio>
            <Heading
                fontSize="36px"
                color="white"
                fontWeight="regular"
                fontFamily="heading"
                position="absolute"
                bottom={6}
                right={6}
            >
                {location}
            </Heading>
        </Box>
    )
}
