import { Box, Flex, Grid, Text } from '@chakra-ui/react'

export default function VideoOverlay() {
    return (
        <Box position="absolute">
            <Grid bg="pink.400" w="100%" h="75vh" placeSelf="center" z="10">
                <Flex alignItems="flex-end" p="6" w="70%">
                    <Text
                        as="h3"
                        fontFamily="subheading"
                        fontSize="24px"
                        color="white"
                        lineHeight="1.3"
                        textAlign="left"
                    >
                        Opening night video for the Pukauae exhibition at Puke
                        Ariki Museum. The exhibition featured 17 Wahine with
                        moko kauae. Photography commission by Tu Tama Wahine o
                        Taranaki.
                    </Text>
                </Flex>
            </Grid>
        </Box>
    )
}
