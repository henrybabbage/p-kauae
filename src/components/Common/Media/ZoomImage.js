import { Box, Flex, Text, Tooltip } from '@chakra-ui/react'
import { useCallback } from 'react'
import Zoom from 'react-medium-image-zoom'

import ChakraNextImage from '@/components/Primitives/ChakraNextImage'
import CloseButton from '../Buttons/CloseButton'

export default function ZoomImage(props) {
    const { caption, src, alt, width, height, sizes, blurhash, ...rest } = props
    const DynamicZoomContent = useCallback(
        (props) => {
            return <ZoomContent {...props} caption={caption} />
        },
        [caption]
    )

    return (
        <Flex flexDir="column" alignItems="center" justifyContent="center" bg="grey.900" w="100%" h="100%">
            <Box position="relative" w="100%" h="100%">
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
                                    }}
                                >
                                    <CloseButton />
                                </Box>
                            }
                        />
                    )}
                >
                    <Tooltip gutter="-34" label={'Click portrait to enlarge ↗'} placement="bottom" variant="zoom">
                        <Box w="100%" h="100%">
                            <ChakraNextImage
                                src={src}
                                alt={alt}
                                width={4200}
                                height={2800}
                                blurhash={blurhash}
                                sizes="100vw"
                            />
                        </Box>
                    </Tooltip>
                </Zoom>
            </Box>
        </Flex>
    )
}

const ZoomContent = ({ img, caption, buttonUnzoom }) => {
    return (
        <>
            {buttonUnzoom}
            <Flex as="figure" h="100vh" flexDir="column" justifyContent="end">
                <Box as="figcaption" zIndex="10" pt="2" position="absolute" top={0}>
                    <Flex justifyContent="center" w="100vw">
                        <Text fontSize="18px" lineHeight="1.36" color="pink.200" textAlign="center">
                            {caption}
                        </Text>
                    </Flex>
                </Box>
                {img}
                <Box as="figcaption" zIndex="10" pt="8" pb="4">
                    <Flex justifyContent="center" w="100vw">
                        <Text
                            fontSize="10px"
                            lineHeight="1.36"
                            color="white"
                            textAlign="center"
                            textTransform="uppercase"
                        >
                            Photographic artwork by Tania Niwa
                        </Text>
                    </Flex>
                </Box>
            </Flex>
        </>
    )
}
