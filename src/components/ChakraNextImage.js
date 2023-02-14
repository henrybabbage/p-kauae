import { Box } from '@chakra-ui/react'
import NextImage from 'next/image'
import useNextBlurhash from 'use-next-blurhash'

export const ChakraNextImage = (props) => {
    const { src, alt, width, height, sizes, blurhash, ...rest } = props
    const [blurDataURL] = useNextBlurhash(blurhash)
    return (
        <Box position="relative" {...rest}>
            <NextImage
                src={src}
                alt={alt}
                width={width}
                height={height}
                sizes={sizes}
                style={{ objectFit: 'cover' }}
                placeholder="blur"
                blurDataURL={blurDataURL}
            />
        </Box>
    )
}
