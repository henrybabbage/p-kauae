import { AspectRatio, Box, Heading } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

const VideoPlayer = dynamic(() => import('./VideoPlayer'), {
    ssr: false
})

export default function ModalVideo({ playerRef, src, location, poster, alt }) {
    return (
        <Box position="relative" w="100%" maxWidth="100%">
            <AspectRatio
                maxH={['auto', 'auto', 'auto', '100%', '100%', '100%']}
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
            <Heading
                userSelect="all"
                cursor="auto"
                pointerEvents="auto"
                fontSize={['16px', '16px', '16px', '36px', '36px', '36px']}
                color="white"
                fontWeight="regular"
                fontFamily="heading"
                position="absolute"
                bottom={'18px'}
                left={[null, null, null, '18px', '18px', '18px']}
                right={['18px', '18px', '18px', null, null, null]}
                w="fit-content"
                textAlign={['right', 'right', 'right', 'left', 'left', 'left']}
                touch-action="manipulation"
            >
                {location}
            </Heading>
        </Box>
    )
}
