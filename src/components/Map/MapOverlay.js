import { Center, Flex, Text } from '@chakra-ui/react'
import Balancer from 'react-wrap-balancer'

export default function MapOverlay({ haerengaKorero, mapIsVisible }) {
    return (
        <Center
            bg="grey.900"
            w="100vw"
            h="100vh"
            maxH="100vh"
            z="100"
            position="fixed"
            opacity={mapIsVisible ? 0 : 100}
            transition="opacity ease-in-out"
            transitionDuration="0.3s"
            pointerEvents="none"
            overflow="hidden"
        >
            <Flex flexDir="column">
                <Balancer>
                    <Text
                        as="h1"
                        fontFamily="subheading"
                        fontSize={['14px', '14px', '14px', '36px', '36px', '36px']}
                        color="white"
                        lineHeight="1.3"
                        textAlign="center"
                        textColor="white"
                        // textTransform="uppercase"
                        opacity={mapIsVisible ? 0 : 100}
                        transition="opacity ease-in-out"
                        transitionDuration="0.3s"
                    >
                        {'This map highlights the relationship between each woman and the land they are connected to.'}
                    </Text>
                </Balancer>
            </Flex>
        </Center>
    )
}
