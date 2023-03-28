import { isBrowser } from '@/utils/helpers'
import { Box, IconButton, Tooltip } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/lazy'
import { PlayIcon } from './PlayIcon'
import VideoLoading from './VideoLoading'

export default function VideoPlayer({
    playerRef,
    src,
    autoplay,
    controls,
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
            {controls && (
                <Box position="absolute">
                    <Tooltip
                        label="Click to play video"
                        placement="top"
                        variant="video"
                    >
                        <IconButton
                            aria-label="Play video"
                            isRound
                            bg="transparent"
                            icon={<PlayIcon boxSize={10} color="white" />}
                        />
                    </Tooltip>
                </Box>
            )}
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
