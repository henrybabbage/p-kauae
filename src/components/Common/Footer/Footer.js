import { Flex, HStack, Text } from '@chakra-ui/react'

export default function Footer() {
    return (
        <Flex w="100%" justifyContent="center" pt={['10px', '10px', '10px', '0px', '0px', '0px']}>
            <HStack spacing="6">
                <Text
                    fontFamily="body"
                    fontSize={['10px', '10px', '10px', '12px', '12px', '12px']}
                    fontWeight="normal"
                    lineHeight={['1.36']}
                    color="white"
                >
                    {'Copyright © 2023 Tū Tama Wāhine o Taranaki'}
                </Text>
                <Text
                    fontFamily="body"
                    fontSize={['10px', '10px', '10px', '12px', '12px', '12px']}
                    fontWeight="normal"
                    lineHeight={['1.36']}
                    color="white"
                >
                    {'All rights reserved'}
                </Text>
            </HStack>
        </Flex>
    )
}
