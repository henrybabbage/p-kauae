import { urlFor } from '@/sanity/lib/sanity.image'
import { Box } from '@chakra-ui/react'
import { Controls, MediaPlayer, MediaProvider, PlayButton, Poster, useMediaState } from '@vidstack/react'
import '@vidstack/react/player/styles/default/theme.css'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { PauseIcon } from '../Icons/PauseIcon'
import { PlayIcon } from '../Icons/PlayIcon'
import VideoOverlay from './VideoOverlay'

export default function VideoPlayer({ src, autoplay, muted, loop, videoKorero, title, poster, controls }) {
    const [isBuffering, setIsBuffering] = useState(null)
    const [isReady, setIsReady] = useState(null)
    const [showInfo, setShowInfo] = useState(false)
    const [videoSourceChanged, setVideoSourceChanged] = useState(false)

    const player = useRef(null)
    const videoRef = useRef(null)
    const { pathname } = useRouter()

    useEffect(() => {
        if (videoRef.current !== src) {
            setVideoSourceChanged(true)
            videoRef.current === src
            setTimeout(() => {
                setVideoSourceChanged(false)
            }, 50)
        }
    }, [src])

    const paused = useMediaState('paused', player)
    const sanityImage = urlFor(poster).width(1920).url()
    return (
        <Box position="absolute" bg="black" w="100%" h="100%" userSelect="all" cursor="auto">
            {!videoSourceChanged && (
                <MediaPlayer
                    ref={player}
                    title={title}
                    src={src}
                    loop={loop}
                    muted={muted}
                    controls={controls}
                    autoPlay={autoplay}
                    viewType="video"
                    aspectRatio={'16/9'}
                    playsInline
                    crossOrigin
                    className="media-player"
                >
                    <MediaProvider>
                        {pathname === '/' && (
                            <Poster
                                src={sanityImage}
                                alt={title ?? 'Pūkauae exhibition opening 11th December 2019'}
                                className="vds-poster"
                            />
                        )}
                    </MediaProvider>
                    {pathname === '/' && (
                        <Controls.Root className="vds-controls">
                            <Controls.Group className="vds-controls-group"></Controls.Group>
                            <div className="vds-controls-spacer" />
                            <Controls.Group className="vds-controls-group">
                                <PlayButton>{paused ? <PlayIcon /> : <PauseIcon />}</PlayButton>
                            </Controls.Group>
                            <div className="vds-controls-spacer" />
                            <Controls.Group className="vds-controls-group"></Controls.Group>
                        </Controls.Root>
                    )}
                </MediaPlayer>
            )}
            {showInfo && <VideoOverlay showInfo={showInfo} videoKorero={videoKorero} />}
        </Box>
    )
}
