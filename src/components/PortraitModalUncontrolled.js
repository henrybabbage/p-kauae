import { Box, Flex, Text } from '@chakra-ui/react'
import { useCallback } from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import ChakraNextImage from './ChakraNextImage'
import CloseButton from './CloseButton'

export default function PortraitModal(props, didClickMinimize) {
    const { caption, src, alt, width, height, sizes, blurhash, ...rest } = props

    const DynamicZoomContent = useCallback(
        (props) => {
            return <ZoomContent {...props} caption={caption} />
        },
        [caption]
    )

    return (
        <Flex
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            bg="grey.600"
            w="100%"
        >
            <Box position="relative">
                <Zoom
                    zoomMargin={45}
                    ZoomContent={(zoomProps) => (
                        <DynamicZoomContent
                            {...zoomProps}
                            {...props}
                            buttonUnzoom={
                                <Box
                                    aria-label="Minimize image"
                                    data-rmiz-btn-unzoom=""
                                    type="button"
                                    onClick={() => {
                                        zoomProps.onUnzoom()
                                        didClickMinimize
                                    }}
                                >
                                    <CloseButton />
                                </Box>
                            }
                        />
                    )}
                >
                    <ChakraNextImage
                        src={src}
                        alt={alt}
                        width={4200}
                        height={2800}
                        blurhash={blurhash}
                        sizes="100vw"
                    />
                </Zoom>
            </Box>
        </Flex>
    )
}

const ZoomContent = ({ img, caption, buttonUnzoom, onUnzoom }) => {
    return (
        <>
            {buttonUnzoom}
            <Flex as="figure" h="100vh" flexDir="column" justifyContent="end">
                {img}
                <Box as="figcaption" zIndex="10" pt="8" pb="4" px="8">
                    <Flex justifyContent="center">
                        <Text
                            fontSize={'18px'}
                            lineHeight={'1.36'}
                            color={'white'}
                        >
                            {caption}
                        </Text>
                    </Flex>
                </Box>
            </Flex>
        </>
    )
}
