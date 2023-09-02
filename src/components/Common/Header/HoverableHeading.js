import { Box, Heading } from '@chakra-ui/react'

export default function HoverableHeading({ hoverContent, defaultContent, ...props }) {
    return (
        <Heading
            {...props}
            as="h2"
            fontSize={['16px', '16px', '16px', '20px', '20px', '20px']}
            lineHeight="1.36"
            fontWeight="bold"
            fontFamily="subheading"
            width="140px"
        >
            <Box _hover={{ _before: { content: `'${hoverContent}'` } }} _before={{ content: `'${defaultContent}'` }} />
        </Heading>
    )
}
