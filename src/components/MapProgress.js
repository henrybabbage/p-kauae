import { Box, Circle, CircularProgress } from '@chakra-ui/react'
import { LogoIcon } from './LogoIcon'

export default function MapProgress({ value }) {
    return (
        <Box>
            <CircularProgress
                value={value}
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
                    <LogoIcon boxSize={12} color="pink.200" />
                </Circle>
            </CircularProgress>
        </Box>
    )
}
