import { AspectRatio, Box, Flex, Heading } from '@chakra-ui/react'
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
            <Flex
                maxH={['auto', 'auto', 'auto', '75vh', '75vh', '75vh']}
                maxW={['100vw', '100vw', '100vw', '100vw', '100vw', '100vw']}
                display="flex"
                justifyContent="end"
                userSelect="all"
                cursor="auto"
                pointerEvents="auto"
                touch-action="manipulation"
            >
                {showTitle && (
                    <Heading
                        fontSize={['16px', '16px', '16px', '24px', '24px', '24px']}
                        color="white"
                        fontWeight="regular"
                        fontFamily="subheading"
                        position="absolute"
                        bottom={['4', '4', '4', '6', '6', '6']}
                        left={['4', '4', '4', '6', '6', '6']}
                        w="fit-content"
                        textAlign={['left', 'left', 'left', 'left', 'left', 'left']}
                        zIndex="500"
                    >
                        {videoTitle}
                    </Heading>
                )}
            </Flex>
        </Box>
    )
}
