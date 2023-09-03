import { useEffect, useState, useRef } from 'react'
import { isBrowser } from '@/utils/helpers'
import { Box, Tooltip } from '@chakra-ui/react'
import { MediaOutlet, MediaPlayButton, MediaPlayer, MediaPoster } from '@vidstack/react'
// import 'vidstack/styles/community-skin/video.css'
import 'vidstack/styles/defaults.css'
import VideoOverlay from './VideoOverlay'
import { useRouter } from 'next/router'

export default function VideoPlayer({
    playerRef,
    src,
    autoplay,
    muted,
    loop,
    videoKorero,
    title,
    isPlaying,
    poster,
    controls
}) {
    const [hasWindow, setHasWindow] = useState(false)
    const [isBuffering, setIsBuffering] = useState(null)
    const [isReady, setIsReady] = useState(null)
    const [showInfo, setShowInfo] = useState(false)
    const [videoChanged, setVideoChanged] = useState(false)
    const videoRef = useRef(null)

    useEffect(() => {
        if (isBrowser) {
            setHasWindow(true)
        }
    }, [])

    useEffect(() => {
        if (videoRef.current !== src) {
            setVideoChanged(true)
            videoRef.current === src
            setTimeout(() => {
                setVideoChanged(false)
            }, 50)
        }
    }, [src])

    const { pathname } = useRouter()

    return (
        <Box position="absolute" bg="black" w="100%" h="100%" userSelect="all" cursor="auto">
            {!videoChanged && (
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
                    className="media-player"
                >
                    <MediaOutlet>
                        <MediaPoster className="media-video-poster" data-loading alt={title} />
                        {pathname === '/' && (
                            <Box className="media-controls-container" role="group" aria-label="Media Controls">
                                <Box className="media-controls-group"></Box>
                                <Box className="media-controls-group">
                                    <Tooltip
                                        label={!isPlaying ? 'Click to play video' : 'Click to pause video'}
                                        placement="top"
                                        variant="video"
                                    >
                                        <MediaPlayButton aria-keyshortcuts="k Space" className="media-controls" />
                                    </Tooltip>
                                </Box>
                                <Box className="media-controls-group"></Box>
                            </Box>
                        )}
                    </MediaOutlet>
                    {/* <MediaCommunitySkin /> */}
                </MediaPlayer>
            )}
            {showInfo && <VideoOverlay showInfo={showInfo} videoKorero={videoKorero} />}
        </Box>
    )
}
