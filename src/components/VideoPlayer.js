import { AspectRatio, Box } from '@chakra-ui/react'

export default function VideoPlayer({ src, alt, poster, baseUrlVideo }) {
    const videoSrc = `${baseUrlVideo}${src}`
    return (
        <AspectRatio maxW="100vw" ratio={16 / 9}>
            <Box
                cursor={'crosshair'}
                as="video"
                controls
                autoPlay
                loop
                src={src}
                poster={poster}
                alt={alt}
                objectFit="contain"
                sx={{
                    aspectRatio: '16/9'
                }}
            >
                <Box as="source" src={videoSrc} type="video/mp4" />
            </Box>
        </AspectRatio>
    )
}
