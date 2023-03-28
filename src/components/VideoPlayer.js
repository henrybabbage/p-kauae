import { isBrowser } from '@/utils/helpers'
import { Box } from '@chakra-ui/react'
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
    const [showCover, setShowCover] = useState(null)
    const [isBuffering, setIsBuffering] = useState(null)
    const [isReady, setIsReady] = useState(null)

    useEffect(() => {
        if (isBrowser) {
            setHasWindow(true)
            setShowCover(true)
        }
    }, [])

    return (
        <Box position="relative">
            {!isReady && <VideoLoading />}
            {hasWindow && (
                <ReactPlayer
                    ref={playerRef}
                    url={src}
                    width="100%"
                    height="100%"
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
