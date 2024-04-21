import { Box } from '@chakra-ui/react'
import { Controls, MediaPlayer, MediaProvider, PlayButton, Poster, useMediaState } from '@vidstack/react'
import '@vidstack/react/player/styles/base.css'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { PauseIcon } from '../Icons/PauseIcon'
import { PlayIcon } from '../Icons/PlayIcon'
import VideoOverlay from './VideoOverlay'

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
    const [isBuffering, setIsBuffering] = useState(null)
    const [isReady, setIsReady] = useState(null)
    const [showInfo, setShowInfo] = useState(false)
    const [videoChanged, setVideoChanged] = useState(false)

    const player = useRef(null)
    const videoRef = useRef(null)
    const { pathname } = useRouter()

    useEffect(() => {
        if (videoRef.current !== src) {
            setVideoChanged(true)
            videoRef.current === src
            setTimeout(() => {
                setVideoChanged(false)
            }, 50)
        }
    }, [src])

    const paused = useMediaState('paused', player)

    return (
        <Box position="absolute" bg="black" w="100%" h="100%" userSelect="all" cursor="auto">
            {!videoChanged && (
                <MediaPlayer
                    ref={player}
                    title={title}
                    src={src}
                    loop={loop}
                    muted={muted}
                    controls={controls}
                    autoPlay={autoplay}
                    poster={poster}
                    posterLoad="eager"
                    viewType="video"
                    aspectRatio={'16/9'}
                    playsInline
                    eager
                    className="media-player"
                >
                    <MediaProvider>
                        <Poster asChild className="media-poster">
                            <Image
                                src={poster ?? '/public/images/poster.jpg'}
                                alt={title}
                                width={1920}
                                height={1080}
                                style={{ objectFit: 'cover' }}
                            />
                        </Poster>
                        {pathname === '/' && (
                            <Controls.Root className="media-controls">
                                <Controls.Group className="media-controls-group"></Controls.Group>
                                <div className="media-controls-spacer" />
                                <Controls.Group className="media-controls-group">
                                    <PlayButton>{paused ? <PlayIcon /> : <PauseIcon />}</PlayButton>
                                </Controls.Group>
                                <div className="media-controls-spacer" />
                                <Controls.Group className="media-controls-group"></Controls.Group>
                            </Controls.Root>
                        )}
                    </MediaProvider>
                </MediaPlayer>
            )}
            {showInfo && <VideoOverlay showInfo={showInfo} videoKorero={videoKorero} />}
        </Box>
    )
}
