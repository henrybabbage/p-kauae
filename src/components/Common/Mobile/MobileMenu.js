import {
    Box,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
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
                id="drawer"
                placement="right"
                size="full"
                onClose={onClose}
                isOpen={isOpen}
                bg="grey.900"
                p={0}
                m={0}
            >
                <DrawerOverlay />
                <DrawerContent p={0} m={0} id="inner">
                    <DrawerCloseButton isRound color="white" />
                    <DrawerBody bg="grey.900" p={0} m={0} overflow="hidden" id="body">
                        <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
                            <Box pb="2">
                                <Link variant="menu" as={NextLink} href="/" scroll={false}>
                                    <Heading
                                        as="h1"
                                        fontFamily="subheading"
                                        fontSize={['24px', '36px', '36px', '36px', '36px', '36px']}
                                        color="white"
                                        lineHeight="1.3"
                                        textAlign="center"
                                        textColor={activeLink('/')}
                                    >
                                        Whakapapa
                                    </Heading>
                                </Link>
                            </Box>
                            <Box pt="2">
                                <Link variant="menu" as={NextLink} href="/haerenga" scroll={false}>
                                    <Heading
                                        as="h1"
                                        fontFamily="subheading"
                                        fontSize={['24px', '36px', '36px', '36px', '36px', '36px']}
                                        color="white"
                                        lineHeight="1.3"
                                        textAlign="center"
                                        textColor={activeLink('/haerenga')}
                                    >
                                        Haerenga
                                    </Heading>
                                </Link>
                            </Box>
                        </Box>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}
