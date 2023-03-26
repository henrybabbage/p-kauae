import { AspectRatio, Box, Heading } from '@chakra-ui/react'
import '@vime/core/themes/default.css'
import { DefaultUi, Player, Spinner, Video } from '@vime/react'

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
                <Player playsinline aspectRatio preload muted loop autoplay>
                    <Video>
                        <source src={videoSrc} type="video/mp4" />
                    </Video>
                    <DefaultUi>
                        <Spinner />
                    </DefaultUi>
                </Player>
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
