import Header from '@/components/Header'
import Layout from '@/components/Layout'
import MapBox from '@/components/Map'
import WahineModal from '@/components/WahineModal'
import { Box, Button, Flex, useDisclosure } from '@chakra-ui/react'

export default function Map() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <main>
            <Layout>
                <Header />
                <Flex justifyContent={'center'}>
                    <Button
                        variant={'callToAction'}
                        color={'black'}
                        position={'fixed'}
                        bottom={6}
                        p={0}
                        onClick={onOpen}
                    >
                        Open
                    </Button>
                </Flex>
                <Box pt="14" pb="12" id="map" w="100vw" h="100vh">
                    <WahineModal
                        isOpen={isOpen}
                        onOpen={onOpen}
                        onClose={onClose}
                    />
                    <Flex justifyContent="center" alignContent="center">
                        <Box w="84vw" h="84vh">
                            <MapBox />
                        </Box>
                    </Flex>
                </Box>
            </Layout>
        </main>
    )
}
