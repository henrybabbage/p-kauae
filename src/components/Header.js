import { Box, Flex, HStack, Heading, Link } from "@chakra-ui/react"
import NextLink from "next/link"

export default function Header() {
    return (
        <div>
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                wrap="wrap"
                p="6"
                bg="white"
            >
                <Box>
                    <Heading
                        textStyle="primary"
                        as="h1"
                        size="md"
                        color="black"
                        fontWeight="bold"
                    >
                        Tū Tama Wāhine o Taranaki
                    </Heading>
                </Box>
                <Flex align="center" justify="end">
                    <HStack spacing="6">
                        <Link variant="menu" as={NextLink} href="#about">
                            <Heading as="h2" size="md" fontWeight="bold">
                                About
                            </Heading>
                        </Link>
                        <Link variant="menu" as={NextLink} href="/map">
                            <Heading as="h2" size="md" fontWeight="bold">
                                Map
                            </Heading>
                        </Link>
                    </HStack>
                </Flex>
            </Flex>
        </div>
    )
}
