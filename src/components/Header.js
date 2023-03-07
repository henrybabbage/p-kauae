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
                    <Link variant="menu" as={NextLink} href="/" scroll={false}>
                        <Heading
                            as="h1"
                            size="md"
                            color="white"
                            fontWeight="bold"
                            fontFamily="body"
                        >
                            Tū Tama Wāhine o Taranaki
                        </Heading>
                    </Link>
                </Flex>
                <Flex align="center" justify="end">
                    <HStack spacing="6">
                        <Link
                            variant="menu"
                            as={NextLink}
                            href="/"
                            scroll={false}
                        >
                            <Heading
                                as="h2"
                                size="md"
                                fontWeight="bold"
                                fontFamily="body"
                            >
                                About
                            </Heading>
                        </Link>
                        <Link
                            variant="menu"
                            as={NextLink}
                            href="/map"
                            scroll={false}
                        >
                            <Heading
                                as="h2"
                                size="md"
                                fontWeight="bold"
                                fontFamily="body"
                            >
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
