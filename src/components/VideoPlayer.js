import { isBrowser } from '@/utils/helpers'
import { Box, Center, Spinner } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/lazy'
import VideoLoading from './VideoLoading'

export default function VideoPlayer({
    playerRef,
    src,
    autoplay,
    muted,
    loop,
    playing
}) {
    const [hasWindow, setHasWindow] = useState(false)
    const [isBuffering, setIsBuffering] = useState(null)
    const [isReady, setIsReady] = useState(null)

    useEffect(() => {
        if (isBrowser) {
            setHasWindow(true)
        }
    }, [])

    return (
        <Box position="absolute" bg="black" w="100%" h="100%">
            {!isReady && <VideoLoading />}
            {isReady && isBuffering && (
                <Center h="100%" w="100vw" position="absolute" z="50">
                    <Spinner
                        size="xl"
                        thickness="6px"
                        speed="0.65s"
                        color="pink.400"
                    />
                </Center>
            )}
            {hasWindow && (
                <ReactPlayer
                    ref={playerRef}
                    url={src}
                    width="100%"
                    height="100%"
                    position="relative"
                    playsinline
                    autoPlay={autoplay}
                    muted={muted}
                    loop={loop}
                    playing={playing}
                    controls={false}
                    onReady={() => {
                        setIsReady(true)
                    }}
                    onPause={() => {}}
                    onBuffer={() => {
                        setIsBuffering(true)
                    }}
                    onBufferEnd={() => {
                        setIsBuffering(false)
                    }}
                    onEnded={() => {
                        console.log('ended')
                    }}
                />
            )}
        </Box>
    )
}
