import { Box, Link as ChakraLink, Text } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function LinkPrompt() {
    return (
        <ChakraLink variant="menu" as={NextLink} href="/haerenga" scroll={false}>
            <Box position="relative" cursor="pointer" role="group">
                <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    h={['80px', '80px', '80px', '400px', '400px', '400px']}
                    w={['80px', '80px', '80px', '400px', '400px', '400px']}
                    transform="translate(-50%, -50%)"
                    borderRadius="50%"
                    filter="blur(50px)"
                    zIndex="-1"
                    backgroundColor="rgba(249, 171, 171, 0.3)"
                    opacity="0.75"
                />
                <Text
                    color="white"
                    fontFamily="subheading"
                    fontSize={['8px', '8px', '8px', '14px', '14px', '14px']}
                    textTransform="uppercase"
                    textAlign="center"
                    _groupHover={{ textColor: 'pink.200', textDecoration: 'pink.200 underline solid 2px', textUnderlineOffset: '5px' }}
                >
                    Explore
                </Text>
                <Text
                    color="white"
                    fontFamily="subheading"
                    fontSize={['8px', '8px', '8px', '14px', '14px', '14px']}
                    textTransform="uppercase"
                    textAlign="center"
                    _groupHover={{ textColor: 'pink.200', textDecoration: 'pink.200 underline solid 2px', textUnderlineOffset: '5px' }}
                >
                    Map
                </Text>
            </Box>
        </ChakraLink>
    )
}
