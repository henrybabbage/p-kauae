import { isBrowser } from '@/utils/helpers'
import { Box, useMediaQuery } from '@chakra-ui/react'
import { MediaOutlet, MediaPlayButton, MediaPlayer, MediaPoster } from '@vidstack/react'
import { useEffect, useState } from 'react'
import 'vidstack/styles/base.css'
// import 'vidstack/styles/community-skin/video.css'
import 'vidstack/styles/defaults.css'

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
    poster,
    controls
}) {
    const [hasWindow, setHasWindow] = useState(false)
    const [isBuffering, setIsBuffering] = useState(null)
    const [isReady, setIsReady] = useState(null)

    useEffect(() => {
        if (isBrowser) {
            setHasWindow(true)
        }
    }, [])

    const [isMobile] = useMediaQuery('(max-width: 640px)', {
        ssr: true,
        fallback: false
    })

    return (
        <Box position="relative" bg="black" w="100%" h="100%" userSelect="auto" cursor="auto">
            <MediaPlayer
                title={title}
                src={src}
                poster={poster}
                aspectRatio={16 / 9}
                autoplay={autoplay}
                loop={loop}
                muted={muted}
                controls={controls}
                playsinline
                eager
            >
                <MediaOutlet />
                <MediaPoster data-loading alt={title} />
                {/* {controls && !isMobile && <MediaCommunitySkin />} */}
                {controls && !isMobile && (
                    <Box className="media-controls-container" role="group" aria-label="Media Controls">
                        <Box className="media-controls-group"></Box>
                        <Box className="media-controls-group">
                            <MediaPlayButton className="media-controls" />
                        </Box>
                        <Box className="media-controls-group"></Box>
                    </Box>
                )}
            </MediaPlayer>
            {/* {!isReady && <VideoLoading />}
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
            )} */}
        </Box>
    )
}
