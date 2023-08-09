import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'

export default function TransitionBanner() {
    return (
        <Flex
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            w="100vw"
            h="100vh"
            maxH="100vh"
            backgroundColor="black"
            pointerEvents="none"
            overflow="hidden"
        >
            <Box pb="12">
                <Image
                    src="/icons/pukauae.svg"
                    alt="Pukauae logo"
                    width="125"
                    height="125"
                    priority
                    sizes="100vw"
                    style={{
                        objectFit: 'contain',
                        objectPosition: 'center'
                    }}
                />
            </Box>
            <Box w="300px" opacity={0}>
                <Text
                    as="h1"
                    fontFamily="subheading"
                    fontSize={['14px', '14px', '14px', '18px', '18px', '18px']}
                    lineHeight="1.3"
                    textAlign="center"
                    textColor="white"
                    textTransform="uppercase"
                >
                    Loading
                </Text>
            </Box>
        </Flex>
    )
}
