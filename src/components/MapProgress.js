import { Circle, Flex, Spinner } from '@chakra-ui/react'
import { LogoIcon } from './LogoIcon'

export default function MapProgress({ loading }) {
    return (
        <Flex justifyContent="center" alignItems="center">
            {loading && (
                <Spinner
                    thickness="6px"
                    speed="6s"
                    emptyColor="white"
                    color="pink.200"
                    size="xxl"
                    position="absolute"
                />
            )}
            <Circle
                size="70px"
                bg="white"
                position="relative"
                border="2px solid"
                borderColor="white"
            >
                <LogoIcon boxSize={14} color="pink.200" />
            </Circle>
        </Flex>
    )
}
