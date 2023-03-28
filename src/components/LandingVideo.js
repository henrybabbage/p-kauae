import {
    AspectRatio,
    Box,
    Flex,
    Heading,
    IconButton,
    Tooltip
} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { useRef, useState } from 'react'
import { PlayIcon } from './PlayIcon'

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

    return (
        <Box
            position="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {controls && (
                <Flex
                    position="absolute"
                    zIndex="10"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Tooltip
                        label="Click to play video"
                        placement="top"
                        variant="video"
                    >
                        <IconButton
                            aria-label="Play video"
                            isRound
                            bg="transparent"
                            icon={<PlayIcon boxSize={10} color="white" />}
                            onClick={() => {
                                handlePlay
                                console.log('clicked play')
                            }}
                        />
                    </Tooltip>
                </Flex>
            )}
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
