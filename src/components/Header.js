import { Box, Flex, HStack, Heading, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function Header() {
    return (
        <div>
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                position="fixed"
                w="100%"
                p="6"
                zIndex={20}
            >
                <Flex align="end" justify="flex-end">
                    <Heading
                        textStyle="primary"
                        as="h1"
                        size="md"
                        color="white"
                        fontWeight="bold"
                    >
                        Tū Tama Wāhine o Taranaki
                    </Heading>
                </Flex>
                <Flex align="center" justify="end">
                    <HStack spacing="6">
                        <Link variant="menu" as={NextLink} href="/">
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
            <Box
                backgroundColor="CC404041"
                backdropFilter="saturate(200%) blur(4px)"
                position="fixed"
                w="100%"
                h="20%"
                p="6"
                zIndex={10}
                sx={{
                    '-webkit-mask-image':
                        'linear-gradient(to top, transparent 10%, black)',
                    maskImage: 'linear-gradient(to top, transparent 10%, black)'
                }}
            ></Box>
        </div>
    )
}
