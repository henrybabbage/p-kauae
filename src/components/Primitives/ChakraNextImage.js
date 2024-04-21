/* eslint-disable no-console */
import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import { BlurhashCanvas } from 'react-blurhash'

export default function ChakraNextImage(props) {
    const { src, alt, width, height, sizes, blurhash, ...rest } = props ?? {}
    const handleError = (error) => {
        console.error(error)
    }
    return (
        <Box position="relative" height="100%" width="100%">
            {blurhash && (
                <BlurhashCanvas
                    hash={blurhash}
                    punch={1}
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden'
                    }}
                />
            )}
            <Box position="relative" overflow="hidden" {...rest}>
                {src && (
                    <Image
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
                        onError={(e) => handleError(e)}
                    />
                )}
            </Box>
        </Box>
    )
}
