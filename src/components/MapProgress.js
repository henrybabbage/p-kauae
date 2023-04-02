import { Circle, Flex, Spinner } from '@chakra-ui/react'
import { LogoIcon } from './LogoIcon'

export default function MapProgress({ loading }) {
    return (
        <Flex justifyContent="center" alignItems="center">
            {loading && (
                <Spinner
                    thickness="6px"
                    speed="3s"
                    emptyColor="white"
                    color="pink.200"
                    size="xxl"
                />
            )}
            {/* <CircularProgress
                value={value}
                size="80px"
                color="pink.200"
                position="relative"
                thickness="8px"
                trackColor="white"
                z="50"
            > */}
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
            {/* </CircularProgress> */}
        </Flex>
    )
}
