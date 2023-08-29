import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'

export default function TransitionBanner() {
    return (
        <Flex
            bg="grey.900"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            w="100vw"
            h="100vh"
            maxH="100vh"
            z="100"
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
        </Flex>
    )
}
