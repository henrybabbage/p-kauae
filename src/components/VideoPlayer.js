import { AspectRatio, Box, Grid, Heading, Text } from '@chakra-ui/react'
import '@vime/core/themes/default.css'
import { LoadingScreen, Player, Poster, Ui, Video } from '@vime/react'
import Image from 'next/image'

export default function VideoPlayer({
    location,
    src,
    alt,
    poster,
    baseUrlVideo,
    autoPlay,
    muted,
    loop
}) {
    const videoSrc = `${baseUrlVideo}${src}`
    return (
        <Box position="relative">
            <AspectRatio
                maxH="75vh"
                maxW="100vw"
                ratio={16 / 9}
                cursor="crosshair"
                display="flex"
                justifyContent="center"
            >
                <Player
                    playsinline
                    aspectRatio
                    preload
                    muted={muted}
                    loop={loop}
                    autoplay={autoPlay}
                >
                    <Video>
                        <source src={videoSrc} type="video/mp4" />
                    </Video>
                    <Ui>
                        <LoadingScreen hideDots>
                            <Grid
                                bg="transparent"
                                maxW="100vw"
                                h="100vh"
                                justifyContent="center"
                                alignContent="center"
                                gridAutoColumns="row"
                            >
                                <Image
                                    src="/icons/pukauae.svg"
                                    alt="Pukauae logo"
                                    width="150"
                                    height="150"
                                    priority
                                    sizes="100vw"
                                    style={{
                                        objectFit: 'contain',
                                        objectPosition: 'center'
                                    }}
                                />
                                <Text
                                    pt="6"
                                    fontFamily="body"
                                    fontSize="16px"
                                    color="white"
                                    textTransform="uppercase"
                                    textAlign="center"
                                >
                                    Loading
                                </Text>
                            </Grid>
                        </LoadingScreen>
                        <Poster />
                    </Ui>
                </Player>
            </AspectRatio>
            <Heading
                fontSize="36px"
                color="white"
                fontWeight="regular"
                fontFamily="heading"
                position="absolute"
                bottom={6}
                right={6}
            >
                {location}
            </Heading>
        </Box>
    )
}
