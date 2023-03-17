import { Box } from '@chakra-ui/react'
import NextImage from 'next/image'
import { BlurhashCanvas } from 'react-blurhash'

export default function ChakraNextImage(props, ...img) {
    const { src, alt, width, height, sizes, blurhash, ...rest } = props
    return (
        <Box position="relative">
            {blurhash && (
                <BlurhashCanvas
                    {...blurhash}
                    punch={1}
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '100%'
                    }}
                />
            )}
            <Box position="relative" overflow="hidden" {...rest}>
                <NextImage
                    {...img}
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    sizes={sizes}
                    style={{
                        objectFit: 'contain',
                        height: '100%',
                        width: '100%'
                    }}
                />
            </Box>
        </Box>
    )
}
