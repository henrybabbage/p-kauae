import { AspectRatio, Box, Heading } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { useRef, useState } from 'react'

const VideoPlayer = dynamic(() => import('@/components/VideoPlayer'), {
    ssr: false
})

export default function LandingVideo({
    playerRef,
    src,
    baseUrlVideo,
    poster,
    alt,
    autoplay,
    controls,
    muted,
    loop
}) {
    const videoSrc = `${baseUrlVideo}${src}`

    const [showTitle, setShowTitle] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)

    const timeoutRef = useRef(null)

    const handleMouseEnter = () => {
        setShowTitle(true)
        clearTimeout(timeoutRef.current)
    }

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setShowTitle(false)
        }, 1000)
    }

    const handlePlay = () => {
        setIsPlaying(true)
    }

    const handleClick = () => {}

    return (
        <Box
            position="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <AspectRatio
                maxH="75vh"
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
                    controls={controls}
                    muted={muted}
                    loop={loop}
                    playing={isPlaying}
                />
            </AspectRatio>
            {showTitle && (
                <Heading
                    fontSize="36px"
                    color="white"
                    fontWeight="regular"
                    fontFamily="heading"
                    position="absolute"
                    bottom={6}
                    right={6}
                >
                    Puke Ariki Opening
                </Heading>
            )}
        </Box>
    )
}
