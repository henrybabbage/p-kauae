import { AspectRatio, Box, Heading } from '@chakra-ui/react'
import ReactPlayer from 'react-player'

export default function VideoPlayer({
    location,
    src,
    alt,
    poster,
    baseUrlVideo,
    autoPlay,
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
                <ReactPlayer
                    width="100%"
                    height="100%"
                    playsinline
                    autoplay
                    muted
                    loop
                    playing={true}
                    url={videoSrc}
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
