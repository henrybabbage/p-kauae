import { Flex, Heading, VStack } from '@chakra-ui/react'
import { useEffect } from 'react'

export default function TransitionBanner() {
    const banner = {
        animate: {
            transition: {
                delayChildren: 0.4,
                staggerChildren: 0.1
            }
        }
    }
    return (
        <VStack
            w="100vw"
            h="100vh"
            maxH="100vh"
            backgroundColor="grey.600"
            zIndex={10}
            pointerEvents="none"
            overflow="hidden"
        >
            <Heading
                as="h1"
                size="md"
                textColor="white"
                fontWeight="regular"
                position="fixed"
                p="6"
            >
                Tū Tama Wāhine o Taranaki
            </Heading>
            <Flex
                h="100vh"
                w="80vw"
                textAlign="center"
                justifyContent="center"
                alignItems="center"
            >
                <Heading
                    as="h2"
                    fontSize="84px"
                    lineHeight="1"
                    textColor="pink.200"
                >
                    Celebrating over 30 years of liberation work throughout
                    Taranaki.
                </Heading>
            </Flex>
        </VStack>
    )
}
