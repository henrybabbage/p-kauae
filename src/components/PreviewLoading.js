import { Box, Text } from '@chakra-ui/react'

export default function PreviewLoading() {
    return (
        <Box backgroundColor="grey.900" w="100vw" h="100vh" overflow="hidden" display="flex" flexDir="column" justifyContent="center" alignItems="center">
            <Text
                color="white"
                fontFamily="subheading"
                fontSize={['24px', '24px', '24px', '32px', '32px', '32px']}
                lineHeight="1.36"
                textAlign="center"
                textTransform="uppercase"
            >
                Loading preview
            </Text>
        </Box>
    )
}
