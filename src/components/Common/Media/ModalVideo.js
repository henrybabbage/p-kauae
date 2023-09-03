import { AspectRatio, Box, Flex, Heading } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

const VideoPlayer = dynamic(() => import('./VideoPlayer'), {
    ssr: false
})

export default function ModalVideo({ playerRef, src, location, poster, alt }) {
    return (
        <Box position="relative" w="100%" maxWidth="100%">
            <AspectRatio
                maxH={['auto', 'auto', 'auto', '74vh', '74vh', '74vh']}
                maxW={['100%', '100%', '100%', '100%', '100%', '100%']}
                ratio={16 / 9}
                userSelect="all"
                cursor="auto"
                pointerEvents="auto"
                touch-action="manipulation"
            >
                <VideoPlayer
                    playerRef={playerRef}
                    src={src}
                    poster={poster}
                    title={location || alt || ''}
                    autoplay={true}
                    controls={false}
                    muted={true}
                    loop={true}
                    isPlaying={true}
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
                <Heading
                    fontSize={['16px', '16px', '16px', '36px', '36px', '36px']}
                    color="white"
                    fontWeight="regular"
                    fontFamily="heading"
                    position="absolute"
                    bottom={['6', '6', '6', '6', '6', '6']}
                    right={['6', '6', '6', '6', '6', '6']}
                    w="fit-content"
                    textAlign={['right', 'right', 'right', 'right', 'right', 'right']}
                    zIndex="500"
                >
                    {location}
                </Heading>
            </Flex>
        </Box>
    )
}
