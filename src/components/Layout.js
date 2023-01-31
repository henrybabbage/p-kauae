import { Box } from "@chakra-ui/react"

const Layout = ({ children }) => {
    return (
        <Box
            bg="white"
            w="100vw"
            h="100vh"
            display="flex"
            flexDirection="column"
        >
            {children}
        </Box>
    )
}

export default Layout
