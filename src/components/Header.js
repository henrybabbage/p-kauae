import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'

export default function Header() {
  return (
    <div>
        <Flex as="nav" align="center" justify="space-between" wrap="wrap" p="4" bg="white">
            <Flex align="center">
                <Heading as="h1" size="md" color="black">
                    Tū Tama Wāhine o Taranaki
                </Heading>
            </Flex>
        </Flex>
    </div>
  )
}
