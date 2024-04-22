import { Heading } from '@chakra-ui/react'

export default function LoadingMessage({ mapIsVisible }) {
    return (
        <Heading
            as="h1"
            fontFamily="subheading"
            fontSize={['14px', '14px', '14px', '20px', '20px', '20px']}
            color="white"
            lineHeight="1.3"
            textAlign="center"
            textColor="white"
            textTransform="uppercase"
            opacity={!mapIsVisible ? 1 : 0}
            transition="opacity 0.5s ease-in"
            transitionDelay="1s"
        >
            {'Loading map'}
        </Heading>
    )
}
