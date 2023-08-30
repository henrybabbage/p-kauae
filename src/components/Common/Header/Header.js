import { Box, Flex, Heading, useDisclosure } from '@chakra-ui/react'

import { MotionBox } from '@/components/Primitives/MotionBox'
import MenuIcon from '../Icons/MenuIcon'
import MobileMenu from '../Mobile/MobileMenu'
import HoverableHeading from './HoverableHeading'
import NavLink from './NavLink'

export default function Header({ blurEffect }) {
    const menu = useDisclosure()

    return (
        <>
            <MobileMenu isOpen={menu.isOpen} onClose={menu.onClose} />
            <Box as="nav" position="absolute" w="100vw" top="6" px="6" zIndex={20}>
                <Flex w="auto" justifyContent="start">
                    <NavLink href="/" isSiteTitle={true}>
                        <MotionBox
                            zIndex={100}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                ease: 'easeIn',
                                duration: 0.5
                            }}
                        >
                            <Heading
                                as="h2"
                                fontSize={['14px', '14px', '14px', '20px', '20px', '20px']}
                                lineHeight="1.36"
                                fontWeight="bold"
                                fontFamily="subheading"
                            >
                                Tū Tama Wāhine o Taranaki
                            </Heading>
                        </MotionBox>
                    </NavLink>
                </Flex>
                <Flex w="auto" justifyContent="center" display={['none', 'none', 'none', 'flex', 'flex', 'flex']}>
                    <NavLink href="/">
                        <MotionBox
                            zIndex={100}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                ease: 'easeIn',
                                duration: 0.5
                            }}
                        >
                            <HoverableHeading hoverContent="About" defaultContent="Whakapapa" textAlign="center" />
                        </MotionBox>
                    </NavLink>
                </Flex>
                <Flex w="auto" justifyContent="end" display={['none', 'none', 'none', 'flex', 'flex', 'flex']}>
                    <NavLink href="/haerenga">
                        <MotionBox
                            zIndex={100}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                ease: 'easeIn',
                                duration: 0.5
                            }}
                        >
                            <HoverableHeading hoverContent="Journey" defaultContent="Haerenga" textAlign="right" />
                        </MotionBox>
                    </NavLink>
                </Flex>
                <Flex
                    display={['flex', 'flex', 'flex', 'none', 'none', 'none']}
                    alignItems="baseline"
                    justifyContent="end"
                >
                    <MenuIcon openDrawer={menu.onOpen} />
                </Flex>
            </Box>
            <Box
                display={blurEffect ? 'static' : 'none'}
                pointerEvents="none"
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
