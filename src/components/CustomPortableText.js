import { Box } from '@chakra-ui/react'
import { PortableText } from '@portabletext/react'

export function CustomPortableText({ sx, as, value }) {
    const components = {
        block: {
            normal: ({ children }) => {
                return (
                    <Box as={as} sx={sx}>
                        {children}
                    </Box>
                )
            }
        }
    }

    return <PortableText components={components} value={value} />
}
