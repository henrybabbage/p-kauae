import { Flex, HStack, Text } from '@chakra-ui/react'

export default function Footer() {
    return (
        <Flex
            w="100vw"
            p={['2', '2', '2', '6', '6', '6']}
            justifyContent="start"
        >
            <HStack spacing="6">
                <Text
                    fontFamily="body"
                    fontSize={['9px', '9px', '9px', '12px', '12px', '12px']}
                    lineHeight={['1.36']}
                    color="white"
                >
                    {'Copyright © 2023 Tū Tama Wāhine o Taranaki'}
                </Text>
                <Text
                    fontFamily="body"
                    fontSize={['9px', '9px', '9px', '12px', '12px', '12px']}
                    lineHeight={['1.36']}
                    color="white"
                >
                    {'All rights reserved'}
                </Text>
            </HStack>
        </Flex>
    )
}
