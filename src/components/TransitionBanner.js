import { Flex, Heading, VStack } from '@chakra-ui/react'
import Image from 'next/image'

export default function TransitionBanner() {
    return (
        <VStack
            w="100vw"
            h="100vh"
            maxH="100vh"
            backgroundColor="black"
            zIndex={50}
            pointerEvents="none"
            overflow="hidden"
        >
            <Flex
                h="100vh"
                w="100vw"
                textAlign="center"
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Image
                    src="/icons/pukauae.svg"
                    alt="Pukauae logo"
                    width="150"
                    height="150"
                    priority
                    sizes="100vw"
                    style={{
                        objectFit: 'contain',
                        objectPosition: 'center'
                    }}
                />
            </Flex>
            <Flex direction="column" justifyContent="end" alignItems="center">
                <Heading
                    as="h1"
                    size="md"
                    textColor="white"
                    fontWeight="regular"
                    fontFamily="subheading"
                    position="absolute"
                    textAlign="center"
                    pb="8"
                >
                    Tū Tama Wāhine o Taranaki
                </Heading>
            </Flex>
        </VStack>
    )
}
