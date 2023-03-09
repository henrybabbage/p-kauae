import { Heading, VStack } from '@chakra-ui/react'

export default function Loading() {
    return (
        <VStack>
            <Heading
                textStyle="primary"
                as="h1"
                size="md"
                color="white"
                fontWeight="regular"
            >
                Tū Tama Wāhine o Taranaki
            </Heading>
            <Heading>
                Celebrating over 30 years of liberation work throughout
                Taranaki.
            </Heading>
        </VStack>
    )
}
