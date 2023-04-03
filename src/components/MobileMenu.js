import {
    Box,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerOverlay,
    Flex,
    Heading,
    Link
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'

export default function MobileMenu({ onOpen, isOpen, onClose }) {
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
            <Drawer
                placement="right"
                size="full"
                onClose={onClose}
                isOpen={isOpen}
                bg="grey.900"
                h="100vh"
                maxH="100vh"
                w="100vw"
                p={0}
                m={0}
            >
                <DrawerOverlay />
                <DrawerContent h="100vh" maxH="100vh" w="100vw" p={0} m={0}>
                    <DrawerBody
                        bg="grey.900"
                        p={0}
                        m={0}
                        h="100vh"
                        maxH="100vh"
                        w="100vw"
                    >
                        <Flex
                            h="100vh"
                            maxH="100vh"
                            w="100vw"
                            direction="column"
                            justifyContent="center"
                            overflow="hidden"
                        >
                            <Box pb="6">
                                <Link
                                    variant="menu"
                                    as={NextLink}
                                    href="/haerenga"
                                    scroll={false}
                                    position="fixed"
                                >
                                    <Heading
                                        as="h2"
                                        size="xl"
                                        fontWeight="bold"
                                        fontFamily="subheading"
                                        textColor={activeLink('/')}
                                    >
                                        Whakapapa
                                    </Heading>
                                </Link>
                            </Box>
                            <Box pt="6">
                                <Link
                                    variant="menu"
                                    as={NextLink}
                                    href="/haerenga"
                                    scroll={false}
                                    position="fixed"
                                >
                                    <Heading
                                        as="h2"
                                        size="xl"
                                        fontWeight="bold"
                                        fontFamily="subheading"
                                        textColor={activeLink('/haerenga')}
                                    >
                                        Haerenga
                                    </Heading>
                                </Link>
                            </Box>
                        </Flex>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}
