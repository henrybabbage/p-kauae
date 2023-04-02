import { Button, Flex, Grid, Text } from '@chakra-ui/react'
import { useState } from 'react'

export default function MapOverlay({ haerengaKorero }) {
    const [showOverlay, setShowOverlay] = useState(true)
    return (
        <Grid
            bg="black"
            w="100vw"
            h="100vh"
            z="100"
            placeSelf="center"
            position="relative"
            opacity={showOverlay ? 100 : 0}
            transition="opacity ease-in-out"
            transitionDuration="1s"
            transitionProperty="10s"
        >
            <Flex
                direction="column"
                justifyContent="center"
                p="6"
                w="100vw"
                h="auto"
            >
                <Text
                    as="h1"
                    fontFamily="subheading"
                    fontSize="22px"
                    color="white"
                    lineHeight="1.3"
                    textAlign="center"
                    textColor="white"
                >
                    {haerengaKorero}
                </Text>
                <Button
                    variant="prompt"
                    pt="8"
                    onClick={() => setShowOverlay(false)}
                >
                    <Text
                        as="h2"
                        fontFamily="subheading"
                        fontSize="16px"
                        lineHeight="1.36"
                        textTransform="uppercase"
                        textColor="white"
                    >
                        Click to enter
                    </Text>
                </Button>
            </Flex>
        </Grid>
    )
}
