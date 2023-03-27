import { Box, Grid, Text } from '@chakra-ui/react'

export default function VideoLoading() {
    return (
        <Box>
            <Grid
                bg="transparent"
                maxW="100vw"
                h="100vh"
                justifyContent="center"
                alignContent="center"
                gridAutoColumns="row"
            >
                <Text
                    pt="6"
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
