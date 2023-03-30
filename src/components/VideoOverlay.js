import { Box, Flex, Grid, Text } from '@chakra-ui/react'

export default function VideoOverlay({ show, videoKorero }) {
    return (
        <Box
            position="absolute"
            opacity={show ? 100 : 0}
            transition="1s opacity ease-in-out"
        >
            <Grid bg="pink.400" w="100%" h="75vh" placeSelf="center" z="10">
                <Flex alignItems="flex-end" p="6" w="80%">
                    <Text
                        as="h3"
                        fontFamily="subheading"
                        fontSize="22px"
                        color="white"
                        lineHeight="1.3"
                        textAlign="left"
                    >
                        {videoKorero}
                    </Text>
                </Flex>
            </Grid>
        </Box>
    )
}
