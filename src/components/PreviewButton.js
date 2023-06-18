import { Box } from '@chakra-ui/react'
import Link from 'next/link'

export default function PreviewButton() {
    return (
        <Box
            position="fixed"
            zIndex="100"
            bottom="24px"
            left="50%"
            transform="translateX(50%)"
            py="4px"
            px="16px"
            display="inline-block"
            border="1px #b5b3af solid"
            borderRadius="2px"
            backgroundColor="#f8f7f3"
            color="#313437"
            cursor="pointer"
            userSelect="none"
            transition="backgroundColor 0.4s cubic-bezier(0, 0.25, 0.25, 1), border-color 0.4s cubic-bezier(0, 0.25, 0.25, 1)"
            _hover={{
                borderColor: '#313437'
            }}
            _active={{
                borderColor: rgba(0, 0, 0, 0),
                backgroundColor: '#f8f7f3'
            }}
        >
            <Link href="/api/exit-preview">Exit Preview</Link>
        </Box>
    )
}
