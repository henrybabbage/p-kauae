import { Box, Heading } from '@chakra-ui/react'

export default function HoverableHeading({
    hoverContent,
    defaultContent,
    ...props
}) {
    return (
        <Heading
            as="h2"
            fontSize={['10px', '10px', '10px', '20px', '20px', '20px']}
            lineHeight="1.36"
            fontWeight="bold"
            fontFamily="subheading"
        >
            <Box
                {...props}
                _hover={{ _before: { content: `'${hoverContent}'` } }}
                _before={{ content: `'${defaultContent}'` }}
                as="span"
            />
        </Heading>
    )
}
