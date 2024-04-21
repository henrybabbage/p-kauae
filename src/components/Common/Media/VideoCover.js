import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import poster from 'public/images/poster.jpg'

export default function VideoCover({ showCover }) {
    return (
        <Box
            position="absolute"
            opacity={showCover ? 100 : 0}
            transition="opacity ease-in-out"
            transitionDuration="0.3s"
        >
            <Box z="10" w="100vw" h="75vh" position="relative" overflow="hidden">
                <Image
                    src={poster}
                    alt="video preview image"
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center'
                    }}
                />
            </Box>
        </Box>
    )
}
