import { Box, Flex, Heading, useDisclosure } from '@chakra-ui/react'

import { MotionBox } from '@/components/Primitives/MotionBox'
import { Mobile } from '@/utils/breakpoints'
import { useEffect, useState } from 'react'
import { Client } from 'react-hydration-provider'
import MenuIcon from '../Icons/MenuIcon'
import MobileMenu from '../Mobile/MobileMenu'
import HoverableHeading from './HoverableHeading'
import NavLink from './NavLink'

export default function Header({ blurEffect, opacity }) {
    const menu = useDisclosure()

    const [isHovered, setIsHovered] = useState(false)
    const [headerOpacity, setHeaderOpacity] = useState(1)

    const handleHover = () => {
        setIsHovered(true)
    }

    const handleUnhover = () => {
        setIsHovered(false)
    }

    useEffect(() => {
        setHeaderOpacity(opacity)
    }, [opacity])

    return (
        <Box as="nav" onMouseEnter={handleHover} onMouseLeave={handleUnhover}>
            <MobileMenu isOpen={menu.isOpen} onClose={menu.onClose} />
            <MotionBox
                initial={{ opacity: headerOpacity }}
                animate={{ opacity: isHovered ? 1 : headerOpacity }}
                transition={{
                    type: 'easeInOut',
                    duration: 0.2
                }}
                position="absolute"
                w="100vw"
                top="6"
                px="6"
                zIndex={20}
            >
                <Client>
                    <Mobile>
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
                                        fontSize={['18px', '18px', '18px', '20px', '20px', '20px']}
                                        lineHeight="1.36"
                                        fontFamily={['body', 'body', 'body', 'subheading', 'subheading', 'subheading']}
                                        fontWeight="normal"
                                        textColor="white"
                                    >
                                        Pūkauae
                                    </Heading>
                                </MotionBox>
                            </NavLink>
                        </Flex>
                    </Mobile>
                </Client>
                <Flex w="auto" justifyContent="start" display={['none', 'none', 'flex', 'flex', 'flex', 'flex']}>
                    <NavLink href="/" w="auto">
                        <MotionBox
                            zIndex={100}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                ease: 'easeIn',
                                duration: 0.5
                            }}
                        >
                            <HoverableHeading hoverContent="Pūkauae" defaultContent="Whakapapa" textAlign="left" />
                        </MotionBox>
                    </NavLink>
                </Flex>
                <Flex w="auto" justifyContent="end" display={['none', 'none', 'none', 'flex', 'flex', 'flex']}>
                    <NavLink href="/haerenga" w="auto">
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
            </MotionBox>
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
        </Box>
    )
}
