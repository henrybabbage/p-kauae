import { Box, Progress } from '@chakra-ui/react'

export default function MapProgress({ pending, value }) {
    return (
        <Box position="fixed" bottom="0">
            {pending && <Progress bg="transparent" w="100vw" size="sm" value={value} max={100} />}
        </Box>
    )
}
