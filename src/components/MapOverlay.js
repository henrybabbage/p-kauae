import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import Image from 'next/image'

export default function MapOverlay({ haerengaKorero, mapIsVisible }) {
    return (
        <Grid
            bg="black"
            w="100vw"
            h="100vh"
            z="100"
            placeSelf="center"
            position="relative"
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
                    <Image
                        src="/images/water.jpeg"
                        alt="Taranaki landscape"
                        width="300"
                        height="300"
                        priority
                        style={{
                            objectFit: 'contain',
                            objectPosition: 'center'
                        }}
                    />
                </Box>
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
            </Flex>
        </Grid>
    )
}
