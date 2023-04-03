import { Box, Center, Grid, Text } from '@chakra-ui/react'

export default function VideoOverlay({ showInfo, videoKorero }) {
    return (
        <Box
            position="absolute"
            opacity={showInfo ? 100 : 0}
            transition="opacity ease-in-out"
            transitionDuration="1s"
            transitionDelay="8s"
        >
            <Grid bg="pink.400" w="100%" h="75vh" placeSelf="center" z="10">
                <Center p="6" w="100%">
                    <Text
                        as="h3"
                        w={['100%', '100%', '100%', '80%', '80%', '80%']}
                        fontFamily="subheading"
                        fontSize={[
                            '12px',
                            '12px',
                            '12px',
                            '22px',
                            '22px',
                            '22px'
                        ]}
                        color="black"
                        lineHeight="1.3"
                        textAlign="center"
                        opacity={showInfo ? 100 : 0}
                        transition="opacity ease-in-out"
                        transitionDuration="0.3s"
                        transitionDelay="8.5s"
                    >
                        {videoKorero}
                    </Text>
                </Center>
            </Grid>
        </Box>
    )
}
