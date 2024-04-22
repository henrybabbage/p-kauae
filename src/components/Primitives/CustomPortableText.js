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
        },
        marks: {
            highlight: ({ children }) => {
                return (
                    <Box as={'span'} sx={sx} bg="pink.200">
                        {children}
                    </Box>
                )
            },
            em: ({ children }) => (
                <Box as={'span'} sx={sx} bg="pink.200/0.1" position="absolute">
                    {children}
                </Box>
            )
        }
    }

    return <PortableText components={components} value={value} />
}
