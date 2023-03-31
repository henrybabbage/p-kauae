import { Box, Button, Flex, Grid, Text } from '@chakra-ui/react'

export default function MapOverlay({ haerengaKorero, showOverlay }) {
    return (
        <Box
            position="absolute"
            opacity={showOverlay ? 100 : 0}
            transition="1s opacity ease-in-out"
        >
            <Grid bg="black" w="100vw" h="100vh" placeSelf="center" z="50">
                <Flex direction="column" p="6">
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
                    <Button variant="menu">
                        <Text
                            as="h2"
                            fontFamily="subheading"
                            fontSize="36px"
                            lineHeight="1.36"
                            textTransform="uppercase"
                            textColor="white"
                        >
                            Click to enter
                        </Text>
                    </Button>
                </Flex>
            </Grid>
        </Box>
    )
}
