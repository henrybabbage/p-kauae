'use client'

import MapBox from '@/components/Map'
import SmoothScroll from '@/components/SmoothScroll'
import WahineModal from '@/components/WahineModal'

import { Box, Button, Flex, useDisclosure } from '@chakra-ui/react'

export default function Map({ data }) {
    const { wahines, portraits, posters, baseUrlVideo } = data
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <main>
            <SmoothScroll>
                <Flex justifyContent={'center'}>
                    <Button
                        variant={'callToAction'}
                        color={'black'}
                        position={'fixed'}
                        bottom={6}
                        onClick={onOpen}
                    >
                        Modal
                    </Button>
                </Flex>
                <WahineModal
                    isOpen={isOpen}
                    onOpen={onOpen}
                    onClose={onClose}
                    wahines={wahines}
                    images={portraits}
                    covers={posters}
                    baseUrlVideo={baseUrlVideo}
                />
                <Box pt="14" pb="12" id="map" w="100vw" h="100vh" bg="grey.600">
                    <Flex justifyContent="center" alignContent="center">
                        <Box w="84vw" h="84vh">
                            <MapBox />
                        </Box>
                    </Flex>
                </Box>
            </SmoothScroll>
        </main>
    )
}
