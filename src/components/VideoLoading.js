import { Box, Grid, Text } from '@chakra-ui/react'

export default function VideoLoading() {
    return (
        <Box position="absolute">
            <Grid bg="transparent" w="100%" h="100%" placeSelf="center" z="10">
                <Text
                    fontFamily="body"
                    fontSize="16px"
                    color="white"
                    textTransform="uppercase"
                    textAlign="center"
                >
                    Loading video
                </Text>
            </Grid>
        </Box>
    )
}
