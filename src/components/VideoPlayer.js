import { isBrowser } from '@/utils/helpers'
import { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/lazy'

export default function VideoPlayer({ playerRef, src, autoPlay, muted, loop }) {
    const [hasWindow, setHasWindow] = useState(false)
    useEffect(() => {
        if (isBrowser) {
            setHasWindow(true)
        }
    }, [])
    return (
        <>
            {hasWindow && (
                <ReactPlayer
                    ref={playerRef}
                    url={src}
                    width="100%"
                    height="100%"
                    playsinline
                    autoplay={autoPlay}
                    muted={muted}
                    loop={loop}
                    playing={true}
                />
            )}
        </>
    )
}
