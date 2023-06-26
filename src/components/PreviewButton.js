import { Box } from '@chakra-ui/react'
import Link from 'next/link'

export default function PreviewButton() {
    return (
        <Box
            position="fixed"
            zIndex="100"
            bottom="24px"
            left="50%"
            transform="translate(-50%, -50%)"
            py="4px"
            px="16px"
            display="inline-block"
            border="1px #b5b3af solid"
            borderRadius="2px"
            backgroundColor="white"
            color="grey.900"
            fontFamily="subheading"
            cursor="pointer"
            userSelect="none"
            transition="backgroundColor 0.4s cubic-bezier(0, 0.25, 0.25, 1), border-color 0.4s cubic-bezier(0, 0.25, 0.25, 1)"
            _hover={{
                backgroundColor: 'pink.400'
            }}
            _active={{
                borderColor: 'white',
                backgroundColor: 'pink.200'
            }}
        >
            <Link href="/api/exit-preview" style={{ zIndex: '100' }}>
                Exit Preview
            </Link>
        </Box>
    )
}
