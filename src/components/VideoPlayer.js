import { AspectRatio, Box } from '@chakra-ui/react'

export default function VideoPlayer({ src, alt, poster }) {
    return (
        <AspectRatio maxW="100vw" ratio={16 / 9}>
            <Box
                cursor={'crosshair'}
                as="video"
                controls
                autoPlay
                src={src}
                poster={poster}
                alt={alt}
                objectFit="contain"
                sx={{
                    aspectRatio: '16/9'
                }}
            />
        </AspectRatio>
    )
}