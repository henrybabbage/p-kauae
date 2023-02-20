import Header from '@/components/Header'
import Layout from '@/components/Layout'
import MapBox from '@/components/Map'
import { Box, Flex } from '@chakra-ui/react'

export default function Map() {
    return (
        <main>
            <Layout>
                <Header />
                <Box pt="14" pb="12" id="map" w="100vw" h="100vh">
                    <Flex justifyContent="center" alignItems="center">
                        <Box w="90vw" h="90vh">
                            <MapBox />
                        </Box>
                    </Flex>
                </Box>
            </Layout>
        </main>
    )
}
