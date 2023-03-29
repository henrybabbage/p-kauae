import { Box, Flex, Heading, Link } from '@chakra-ui/react'
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
        <>
            <MotionBox
                initial={{ y: -180 }}
                animate={{ y: 0 }}
                transition={{
                    ease: 'easeInOut',
                    duration: 1,
                    delay: 1.8
                }}
            >
                <Box as="nav" position="absolute" w="100vw" p="6" zIndex={20}>
                    <Flex justifyContent="start">
                        <Link
                            variant="menu"
                            as={NextLink}
                            href="/"
                            scroll={false}
                            position="fixed"
                        >
                            <Heading
                                as="h1"
                                size="md"
                                fontWeight="bold"
                                fontFamily="subheading"
                                color="white"
                            >
                                Tū Tama Wāhine o Taranaki
                            </Heading>
                        </Link>
                    </Flex>

                    <Flex justifyContent="center">
                        <Link
                            variant="menu"
                            as={NextLink}
                            href="/"
                            scroll={false}
                            position="fixed"
                        >
                            <Heading
                                as="h2"
                                size="md"
                                fontWeight="bold"
                                fontFamily="subheading"
                                textColor={activeLink('/')}
                            >
                                Whakapapa
                            </Heading>
                        </Link>
                    </Flex>
                    <Flex justifyContent="end">
                        <Link
                            variant="menu"
                            as={NextLink}
                            href="/haerenga"
                            scroll={false}
                            position="fixed"
                        >
                            <Heading
                                as="h2"
                                size="md"
                                fontWeight="bold"
                                fontFamily="subheading"
                                textColor={activeLink('/haerenga')}
                            >
                                Haerenga
                            </Heading>
                        </Link>
                    </Flex>
                </Box>
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
        </>
    )
}
