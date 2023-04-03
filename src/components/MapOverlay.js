import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { MotionBox } from './MotionBox'

export default function MapOverlay({ haerengaKorero, mapIsVisible }) {
    return (
        <Grid
            bg="black"
            w="100vw"
            h="100vh"
            z="100"
            placeSelf="center"
            position="absolute"
            opacity={mapIsVisible ? 0 : 100}
            transition="opacity ease-out"
            transitionDuration="0.3s"
            transitionDelay="1.5s"
        >
            <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
                p="6"
                w="100vw"
                h="auto"
            >
                <Box
                    pb="12"
                    opacity={mapIsVisible ? 0 : 100}
                    transition="opacity ease-out"
                    transitionDuration="0.3s"
                >
                    <MotionBox
                        animate={{ scale: 1.1 }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatType: 'mirror'
                        }}
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
                </Box>
                <Box w="300px">
                    <Text
                        as="h1"
                        fontFamily="subheading"
                        fontSize="18px"
                        color="white"
                        lineHeight="1.3"
                        textAlign="center"
                        textColor="white"
                        textTransform="uppercase"
                        opacity={mapIsVisible ? 0 : 100}
                        transition="opacity ease-out"
                        transitionDuration="0.3s"
                    >
                        {haerengaKorero}
                    </Text>
                </Box>
            </Flex>
        </Grid>
    )
}
