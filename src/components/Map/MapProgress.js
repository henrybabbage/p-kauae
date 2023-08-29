import { Box, Progress } from '@chakra-ui/react'

export default function MapProgress({ loading }) {
    return (
        <Box position="fixed" bottom="0">
            <Progress bg="transparent" w="100vw" size="sm" value={0} max={100} />
        </Box>
    )
}
