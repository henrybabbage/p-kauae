import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import { MotionBox } from './MotionBox'

export default function TransitionBanner() {
    return (
        <VStack w="100vw" h="100vh" maxH="100vh" backgroundColor="black" pointerEvents="none" overflow="hidden">
            <Flex h="100vh" w="100vw" textAlign="center" direction="column" justifyContent="center" alignItems="center" p="6">
                <MotionBox
                    animate={{ scale: 1.1 }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: 'mirror'
                    }}
                    pb="12"
                >
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
                </MotionBox>
                <Box w="300px">
                    <Text
                        as="h1"
                        fontFamily="subheading"
                        fontSize={['14px', '14px', '14px', '18px', '18px', '18px']}
                        color="white"
                        lineHeight="1.3"
                        textAlign="center"
                        textColor="white"
                        textTransform="uppercase"
                        opacity={0}
                    >
                        Loading
                    </Text>
                </Box>
            </Flex>
        </VStack>
    )
}
