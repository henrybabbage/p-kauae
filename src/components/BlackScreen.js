import { Box } from '@chakra-ui/react'

export default function BlackScreen({ show }) {
    return (
        <Box
            w="100%"
            h="100%"
            bg="black"
            opacity={show ? 100 : 0}
            transition="opacity 0.5s"
        ></Box>
    )
}
