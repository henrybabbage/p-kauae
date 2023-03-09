import { Heading, VStack } from '@chakra-ui/react'

export default function Banner() {
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
            <Heading>Nau mai ki Pūkauae</Heading>
        </VStack>
    )
}
