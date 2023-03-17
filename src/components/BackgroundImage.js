import { Box } from '@chakra-ui/react'
import Image from 'next/image'

export default function BackgroundImage({ src, alt, width, height }) {
    return (
        <Box position="absolute" overflow="hidden" w="100vw" h="100vh">
            <Image
                src={src}
                alt={alt}
                fill
                sizes="100vw"
                style={{
                    objectFit: 'cover',
                    overflow: 'hidden'
                }}
            />
        </Box>
    )
}
