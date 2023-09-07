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
            z="1000"
            pointerEvents="none"
            overflow="hidden"
        >
            <Box
                position="relative"
                h={['70px', '70px', '70px', '120px', '120px', '120px']}
                w={['70px', '70px', '70px', '120px', '120px', '120px']}
            >
                <Image
                    src="/icons/pukauae.svg"
                    alt="Pukauae logo"
                    fill
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
