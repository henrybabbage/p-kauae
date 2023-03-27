import { Box, Grid, Text } from '@chakra-ui/react'

export default function VideoLoading() {
    return (
        <Box>
            <Grid
                bg="transparent"
                w="100%"
                h="100%"
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
