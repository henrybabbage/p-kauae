import { MediaOutlet, MediaPlayer, MediaPoster } from '@vidstack/react'
import 'vidstack/styles/base.css'

export default function VideoPlayer({ src, alt, poster, baseUrlVideo }) {
    const videoSrc = `${baseUrlVideo}${src}`
    return (
        <MediaPlayer
            src={videoSrc}
            load="eager"
            poster=""
            aspect-ratio={16 / 9}
            autoplay
            loop
            muted
        >
            <MediaOutlet />
            <MediaPoster alt={alt} />
        </MediaPlayer>
    )
}
