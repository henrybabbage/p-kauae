import Map from '@/components/Map/Map'
import { Box, Flex } from '@chakra-ui/react'
import PreviewButton from '../Common/Buttons/PreviewButton'

export default function MapPage({ wahine, haerenga, preview = false }) {
    return (
        <Box as="main" maxH="100vh" maxW="100vw" bg="black">
            {preview && <PreviewButton />}
            <Flex alignItems="center" justifyContent="center" h="100%" w="100%">
                <Map wahine={wahine} haerenga={haerenga} />
            </Flex>
        </Box>
    )
}
