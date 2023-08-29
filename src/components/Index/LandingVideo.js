import { AspectRatio, Box, Heading } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { useRef, useState } from 'react'

const VideoPlayer = dynamic(() => import('@/components/Common/Media/VideoPlayer'), {
    ssr: false
})

export default function LandingVideo({
    playerRef,
    src,
    baseUrlVideo,
    videoKorero,
    videoTitle,
    poster,
    alt,
    autoplay,
    controls,
    muted,
    loop
}) {
    const videoSrc = src.secure_url

    const [isPlaying, setIsPlaying] = useState(false)
    const [isHovering, setIsHovering] = useState(false)
    const [showTitle, setShowTitle] = useState(false)

    const timeoutRef = useRef(null)

    const handleMouseEnter = () => {
        setIsHovering(true)
        setShowTitle(true)
        clearTimeout(timeoutRef.current)
    }

    const handleMouseLeave = () => {
        setIsHovering(false)
        timeoutRef.current = setTimeout(() => {
            setShowTitle(false)
        }, 1000)
    }

    return (
        <Box position="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <AspectRatio
                maxH={['auto', 'auto', 'auto', '75vh', '75vh', '75vh']}
                maxW="100vw"
                ratio={16 / 9}
                cursor="auto"
                display="flex"
                justifyContent="center"
                position="relative"
            >
                <VideoPlayer
                    playerRef={playerRef}
                    src={videoSrc}
                    autoplay={autoplay}
                    muted={muted}
                    loop={loop}
                    info={true}
                    cover={true}
                    isPlaying={isPlaying}
                    videoKorero={videoKorero}
                    poster={poster}
                    controls={controls}
                />
            </AspectRatio>
            {showTitle && (
                <Heading
                    fontSize={['14px', '14px', '14px', '20px', '20px', '20px']}
                    color="white"
                    fontWeight="regular"
                    fontFamily="subheading"
                    position="absolute"
                    z="10"
                    top={[4, 4, 4, 6, 6, 6]}
                    left={[4, 4, 4, 6, 6, 6]}
                >
                    {videoTitle}
                </Heading>
            )}
        </Box>
    )
}
