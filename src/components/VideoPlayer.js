import { AspectRatio } from '@chakra-ui/react'
import '@vime/core/themes/default.css'
import { ClickToPlay, Player, Poster, Spinner, Ui, Video } from '@vime/react'

export default function VideoPlayer({
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
        <AspectRatio maxH="75vh" ratio={16 / 9} cursor="crosshair">
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
    )
}
