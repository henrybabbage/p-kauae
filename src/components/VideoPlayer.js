import { AspectRatio, Box, Flex, Heading, Text } from '@chakra-ui/react'
import '@vime/core/themes/default.css'
import {
    ClickToPlay,
    LoadingScreen,
    Player,
    Poster,
    Ui,
    Video
} from '@vime/react'
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
                w="100vw"
                ratio={16 / 9}
                cursor="crosshair"
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
                            <Flex
                                bg="black"
                                w="100vw"
                                h="75vw"
                                flexDirection="column"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Image
                                    src="/icons/pukauae.svg"
                                    alt="Pukauae logo"
                                    width="150"
                                    height="150"
                                    priority
                                    sizes="100vw"
                                />
                                <Text
                                    pt="6"
                                    fontFamily="body"
                                    fontSize="16px"
                                    color="white"
                                    textTransform="uppercase"
                                >
                                    Loading
                                </Text>
                            </Flex>
                        </LoadingScreen>
                        <ClickToPlay />
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
