import { MediaOutlet, MediaPlayer, MediaPoster } from '@vidstack/react'
import 'vidstack/styles/base.css'

export default function VideoPlayer({
    src,
    alt,
    poster,
    baseUrlVideo,
    autoPlay,
    controls
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
            loop
            muted
        >
            <MediaOutlet />
            <MediaPoster alt={alt} />
        </MediaPlayer>
    )
}
