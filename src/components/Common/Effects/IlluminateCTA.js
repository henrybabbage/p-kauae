import { Box, Center, Heading } from '@chakra-ui/react'
import Spotlight from './Spotlight'

export default function IlluminateCTA() {
    return (
        <Box h="150vh" bgColor="black" bgSize="40vw" bgImage="">
            <Spotlight height={180} intensity={6.5} />
            <Center pos="relative" h="100%" flexDirection="column" color="white" style={{ mixBlendMode: 'overlay' }}>
                <Heading fontWeight="800" fontSize="9vw">
                    Explore
                </Heading>
                <Heading fontWeight="800" fontSize="9vw">
                    Map
                </Heading>
            </Center>
        </Box>
    )
}
