import { Box, Flex, Grid, Text } from '@chakra-ui/react'

export default function VideoOverlay({ show }) {
    return (
        <Box
            position="absolute"
            opacity={show ? 100 : 0}
            transition="1.5s opacity ease-in-out"
        >
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
                        Opening of the Pūkauae exhibition at Puke Ariki Museum, Ngāmotu, Taranaki 2019.
The exhibition featured photography of wāhine mau moko at places of significance in Taranaki, captured by artist Tania Niwa.
This project attempts to make visible the images of these women, their connection to place and their stories of healing and liberation through the art of Pūkauae.
                    </Text>
                </Flex>
            </Grid>
        </Box>
    )
}
