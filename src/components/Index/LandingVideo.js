import { AspectRatio, Box, Flex, Heading } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { useRef, useState } from 'react'

const VideoPlayer = dynamic(() => import('@/components/Common/Media/VideoPlayer'), {
    ssr: false
})

export default function LandingVideo({
    src,
    baseUrlVideo,
    videoKorero,
    videoTitle,
    poster,
    autoplay,
    controls,
    muted,
    loop
}) {
    const videoSrc = src?.secure_url || ''

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
        <Flex justifyContent="center" alignItems="center" w="100%">
            <Box
                position="relative"
                w="100%"
                h="100%"
                maxW={['100%', '100%', '100%', '84vw', '84vw', '84vw']}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <AspectRatio
                    maxH={['auto', 'auto', 'auto', '75vh', '75vh', '75vh']}
                    maxW={['100%', '100%', '100%', '100%', '100%', '100%']}
                    ratio={16 / 9}
                    cursor="auto"
                    position="relative"
                >
                    <VideoPlayer
                        src={videoSrc}
                        autoplay={autoplay}
                        muted={muted}
                        loop={loop}
                        info={true}
                        cover={true}
                        videoKorero={videoKorero ?? ''}
                        poster={poster}
                        controls={controls}
                    />
                </AspectRatio>
                <Flex
                    maxH={['auto', 'auto', 'auto', '75vh', '75vh', '75vh']}
                    maxW={['100vw', '100vw', '100vw', '100%', '100%', '100%']}
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
        </Flex>
    )
}
