import { Box, Flex, HStack, Heading, Link } from '@chakra-ui/react'
import { MotionBox } from './MotionBox'

import NextLink from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
    const router = useRouter()

    const activeLink = (value) => {
        let color
        if (value === router.pathname) {
            color = 'pink.200'
        } else {
            color = 'white'
        }
        return color
    }

    return (
        <Box>
            <MotionBox
                initial={{ opacity: 0, y: -180 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    ease: 'easeInOut',
                    duration: 1,
                    delay: 0.6
                }}
            >
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
                        <Link
                            variant="menu"
                            as={NextLink}
                            href="/"
                            scroll={false}
                        >
                            <Heading
                                as="h1"
                                size="md"
                                fontWeight="bold"
                                fontFamily="body"
                                color="white"
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
                                    textColor={activeLink('/')}
                                >
                                    Whakapapa
                                </Heading>
                            </Link>
                            <Link
                                variant="menu"
                                as={NextLink}
                                href="/haerenga"
                                scroll={false}
                            >
                                <Heading
                                    as="h2"
                                    size="md"
                                    fontWeight="bold"
                                    fontFamily="body"
                                    textColor={activeLink('/haerenga')}
                                >
                                    Haerenga
                                </Heading>
                            </Link>
                        </HStack>
                    </Flex>
                </Flex>
            </MotionBox>
            <Box
                backgroundColor="CC404041"
                backdropFilter="saturate(200%) blur(4px)"
                position="fixed"
                w="100%"
                h="20%"
                p="6"
                zIndex={10}
                sx={{
                    maskImage: 'linear-gradient(to top, transparent 10%, black)'
                }}
            ></Box>
        </Box>
    )
}
