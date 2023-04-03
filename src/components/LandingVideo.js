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
import { PauseIcon } from './PauseIcon'
import { PlayIcon } from './PlayIcon'

const VideoPlayer = dynamic(() => import('@/components/VideoPlayer'), {
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
    const videoSrc = `${baseUrlVideo}${src}`

    const [isPlaying, setIsPlaying] = useState(false)
    const [isHovering, setIsHovering] = useState(false)
    const [showTitle, setShowTitle] = useState(false)
    const [showCover, setShowCover] = useState(true)
    const [showInfo, setShowInfo] = useState(null)

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

    const handlePlay = () => {
        setTimeout(() => {
            setShowCover(false)
        }, 500)
        setIsPlaying(!isPlaying)
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
                    zIndex="50"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Tooltip
                        label={
                            !isPlaying
                                ? 'Click to play video'
                                : 'Click to pause video'
                        }
                        placement="top"
                        variant="video"
                    >
                        <IconButton
                            aria-label="Play video"
                            isRound
                            bg="transparent"
                            position="absolute"
                            icon={
                                !isPlaying ? (
                                    <PlayIcon boxSize={10} color="white" />
                                ) : (
                                    isHovering && (
                                        <PauseIcon boxSize={10} color="white" />
                                    )
                                )
                            }
                            onClick={handlePlay}
                        />
                    </Tooltip>
                </Flex>
            )}
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
                    showInfo={showInfo}
                    showCover={showCover}
                    videoKorero={videoKorero}
                />
            </AspectRatio>
            {showTitle && (
                <Heading
                    fontSize={['16px', '16px', '16px', '36px', '36px', '36px']}
                    color="white"
                    fontWeight="regular"
                    fontFamily="heading"
                    position="absolute"
                    z="10"
                    bottom={[4, 4, 4, 6, 6, 6]}
                    right={[4, 4, 4, 6, 6, 6]}
                >
                    {videoTitle}
                </Heading>
            )}
        </Box>
    )
}
