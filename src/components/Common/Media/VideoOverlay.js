import { CustomPortableText } from '@/components/Primitives/CustomPortableText'
import { Box, Center, Grid } from '@chakra-ui/react'

export default function VideoOverlay({ showInfo, videoKorero }) {
    return (
        <Box
            position="absolute"
            opacity={showInfo ? 100 : 0}
            transition="opacity ease-in-out"
            transitionDuration="1s"
            transitionDelay="8s"
        >
            <Grid bg="pink.200" w="100%" h="75vh" placeSelf="center" z="10">
                <Center p="6" w="100%">
                    <Box
                        opacity={showInfo ? 100 : 0}
                        transition="opacity ease-in-out"
                        transitionDuration="0.3s"
                        transitionDelay="8.5s"
                    >
                        <CustomPortableText
                            as={'p'}
                            sx={{
                                fontSize: ['12px', '12px', '12px', '22px', '22px', '22px'],
                                lineHeight: ['1.3'],
                                color: 'white',
                                textAlign: 'justify'
                            }}
                            value={videoKorero}
                        />
                    </Box>
                </Center>
            </Grid>
        </Box>
    )
}
