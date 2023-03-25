import { AspectRatio, Box, Heading } from '@chakra-ui/react'
import '@vime/core/themes/default.css'
import { ClickToPlay, Player, Poster, Spinner, Ui, Video } from '@vime/react'

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
            <AspectRatio maxH="75vh" h="100%" ratio={16 / 9} cursor="crosshair">
                <Player playsinline aspectRatio muted loop autoplay>
                    <Video>
                        <source src={videoSrc} type="video/mp4" />
                    </Video>
                    <Ui>
                        <ClickToPlay />
                        <Spinner />
                        <Poster />
                    </Ui>
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
