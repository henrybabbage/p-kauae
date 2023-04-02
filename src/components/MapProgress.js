import { Circle, Flex, Spinner } from '@chakra-ui/react'
import { LogoIcon } from './LogoIcon'

export default function MapProgress({ value, showTimer }) {
    return (
        <Flex justifyContent="center" alignItems="center">
            {showTimer && (
                <Spinner
                    thickness="6px"
                    speed="3s"
                    emptyColor="white"
                    color="pink.200"
                    size="xxl"
                    position="absolute"
                />
            )}
            <Circle size="70px" bg="white" position="relative" />
            <Circle
                size="70px"
                bg="white"
                position="absolute"
                border="2px solid"
                borderColor="white"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
            >
                <LogoIcon boxSize={14} color="pink.200" />
            </Circle>
        </Flex>
    )
}
