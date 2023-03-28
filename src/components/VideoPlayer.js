import { isBrowser } from '@/utils/helpers'
import { Box } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/lazy'
import VideoLoading from './VideoLoading'
import VideoOverlay from './VideoOverlay'

export default function VideoPlayer({
    playerRef,
    src,
    autoplay,
    muted,
    loop,
    playing,
    showOverlay
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
        <Box position="absolute">
            {!isReady && <VideoLoading />}
            {/* {showOverlay && <VideoOverlay />} */}
            {hasWindow && (
                <ReactPlayer
                    ref={playerRef}
                    url={src}
                    width="100%"
                    height="100%"
                    position="relative"
                    playsinline
                    autoplay={autoplay}
                    muted={muted}
                    loop={loop}
                    playing={playing}
                    controls={false}
                    onReady={() => {
                        console.log('onReady'), setIsReady(true)
                    }}
                    onBuffer={() => {
                        console.log('onBuffer'), setIsBuffering(true)
                    }}
                    onBufferEnd={() => {
                        console.log('onBufferEnd'), setIsBuffering(false)
                    }}
                />
            )}
        </Box>
    )
}
