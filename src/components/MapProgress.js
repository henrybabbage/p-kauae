import { Box, CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

export default function MapProgress() {
    return (
        <Box>
            <CircularProgress value={30} size="80px">
                <CircularProgressLabel>Tu Tama Wahine</CircularProgressLabel>
            </CircularProgress>
        </Box>
    )
}
