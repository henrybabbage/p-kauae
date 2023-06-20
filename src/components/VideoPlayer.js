import { isBrowser } from '@/utils/helpers'
import { Box, Center, Spinner } from '@chakra-ui/react'
import { MediaOutlet, MediaPlayer, MediaPoster } from '@vidstack/react'
import { useEffect, useState } from 'react'
import 'vidstack/styles/base.css'
import 'vidstack/styles/defaults.css'
import 'vidstack/styles/ui/buffering.css'
import VideoOverlay from './VideoOverlay'
import VideoLoading from './VideoLoading'
import VideoCover from './VideoCover'
import ReactPlayer from 'react-player'

export default function VideoPlayer({
    playerRef,
    src,
    autoplay,
    muted,
    loop,
    info,
    cover,
    videoKorero,
    title,
    isPlaying,
    showInfo,
    showCover,
    poster
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
        <Box position="relative" bg="black" w="100%" h="100%">
            {/* <MediaPlayer
                title={title}
                src={src}
                poster={poster}
                aspectRatio={16 / 9}
                autoplay={autoplay}
                loop={loop}
                muted={muted}
                playsinline
                eager
            >
                <MediaOutlet />
                <MediaPoster alt={title} />
            </MediaPlayer> */}
            {!isReady && <VideoLoading />}
            {isReady && isBuffering && (
                <Center h="100%" w="100vw" position="absolute" z="50">
                    <Spinner
                        size="xl"
                        thickness="4px"
                        speed="0.65s"
                        color="pink.400"
                    />
                </Center>
            )}
            {info && (
                <VideoOverlay showInfo={!isPlaying} videoKorero={videoKorero} />
            )}
            {cover && <VideoCover showCover={showCover} />}
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
                    playing={isPlaying}
                    controls={false}
                    // light={poster}
                    onReady={() => {
                        setIsReady(true)
                    }}
                    onPause={() => {
                        console.log('pause')
                    }}
                    onPlay={() => {
                        console.log('play')
                    }}
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
