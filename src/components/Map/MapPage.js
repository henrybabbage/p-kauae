import Map from '@/components/Map/Map'
import { Box, Flex } from '@chakra-ui/react'
import PreviewButton from '../Common/Buttons/PreviewButton'
import Header from '../Common/Header/Header'

export default function MapPage({ data: wahines, preview = false }) {
    return (
        <Box as="main" maxH="100vh" maxW="100vw" bg="grey.900">
            {preview && <PreviewButton />}
            <Box id="map" h="100vh" w="100vw">
                <Flex alignItems="center" justifyContent="center">
                    <Map data={wahines} />
                </Flex>
            </Box>
        </Box>
    )
}
