import Header from '@/components/Header'
import Map from '@/components/Map'
import { Box, Flex } from '@chakra-ui/react'
import PreviewButton from './PreviewButton'

export default function MapPage({ data: wahines, preview }) {
    return (
        <Box as="main" maxH="100vh" maxW="100vw" bg="grey.900">
            <Header />
            {preview && <PreviewButton />}
            <Box id="map" h="100vh" w="100vw">
                <Flex alignItems="center" justifyContent="center">
                    <Map data={wahines} />
                </Flex>
            </Box>
        </Box>
    )
}
