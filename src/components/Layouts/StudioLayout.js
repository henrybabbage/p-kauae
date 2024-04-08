import { Box } from '@chakra-ui/react'

export default function StudioLayout({ children }) {
    return (
        <Box as="main" id="app">
            {children}
        </Box>
    )
}
