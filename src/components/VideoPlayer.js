import { Box } from '@chakra-ui/react'
import { MediaOutlet, MediaPlayer, MediaPoster } from '@vidstack/react'
import 'vidstack/styles/base.css'

export default function VideoPlayer({
    src,
    alt,
    poster,
    baseUrlVideo,
    autoPlay,
    controls,
    muted,
    loop
}) {
    const videoSrc = `${baseUrlVideo}${src}`
    return (
        <MediaPlayer
            src={videoSrc}
            load="eager"
            poster=""
            aspect-ratio={16 / 9}
            autoplay={autoPlay}
            controls={controls}
            muted={muted}
            loop={loop}
        >
            <Box className="media-buffering-container">
                <svg
                    className="media-buffering-icon"
                    fill="none"
                    viewBox="0 0 120 120"
                    aria-hidden="true"
                >
                    <circle
                        className="media-buffering-track"
                        cx="60"
                        cy="60"
                        r="54"
                        stroke="currentColor"
                        stroke-width="8"
                    ></circle>
                    <circle
                        className="media-buffering-track-fill"
                        cx="60"
                        cy="60"
                        r="54"
                        stroke="currentColor"
                        stroke-width="10"
                        pathLength="100"
                    ></circle>
                </svg>
            </Box>
            <MediaOutlet />
            <MediaPoster alt={alt} />
        </MediaPlayer>
    )
}
