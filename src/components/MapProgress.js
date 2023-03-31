import { Box, Circle, CircularProgress, IconButton } from '@chakra-ui/react'
import { LogoIcon } from './LogoIcon'

export default function MapProgress() {
    return (
        <Box>
            <CircularProgress
                value={10}
                size="80px"
                color="pink.200"
                position="relative"
                thickness="8px"
                trackColor="white"
                z="50"
            >
                <Circle
                    size="62px"
                    bg="white"
                    position="absolute"
                    border="2px solid"
                    borderColor="white"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                >
                    <IconButton
                        aria-label="Tu Tama Wahine o Taranaki logo"
                        isRound
                        bg="transparent"
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                        icon={<LogoIcon boxSize={12} color="pink.200" />}
                    />
                </Circle>
            </CircularProgress>
        </Box>
    )
}
