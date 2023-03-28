import { Flex, Heading, VStack } from '@chakra-ui/react'
import Image from 'next/image'

export default function TransitionBanner() {
    return (
        <VStack
            w="100vw"
            h="100vh"
            maxH="100vh"
            backgroundColor="grey.900"
            zIndex={10}
            pointerEvents="none"
            overflow="hidden"
        >
            <Flex
                h="100vh"
                w="80vw"
                textAlign="center"
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
        </VStack>
    )
}
