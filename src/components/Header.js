import { Box, Flex, Heading, useDisclosure } from '@chakra-ui/react'
import { MotionBox } from './MotionBox'

import { useState } from 'react'
import MenuIcon from './MenuIcon'
import MobileMenu from './MobileMenu'
import NavLink from './NavLink'

export default function Header() {
    const [haerengaIsHovered, setHaerengaIsHovered] = useState(null)
    const [whakapapaIsHovered, setWhakapapaIsHovered] = useState(null)
    const menu = useDisclosure()

    return (
        <>
            <MobileMenu isOpen={menu.isOpen} onClose={menu.onClose} />
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
                        <NavLink href="/" isSiteTitle={true}>
                            <Heading
                                as="h2"
                                fontSize={[
                                    '10px',
                                    '10px',
                                    '10px',
                                    '20px',
                                    '20px',
                                    '20px'
                                ]}
                                lineHeight="1.36"
                                fontWeight="bold"
                                fontFamily="subheading"
                            >
                                Tū Tama Wāhine o Taranaki
                            </Heading>
                        </NavLink>
                    </Flex>

                    <Flex
                        justifyContent="center"
                        display={[
                            'none',
                            'none',
                            'none',
                            'flex',
                            'flex',
                            'flex'
                        ]}
                        onMouseEnter={() => setWhakapapaIsHovered(true)}
                        onMouseLeave={() => setWhakapapaIsHovered(false)}
                    >
                        <NavLink
                            href="/"
                            reoText="Whakapapa"
                            englishText="About"
                            isHovered={whakapapaIsHovered}
                        />
                    </Flex>
                    <Flex
                        justifyContent="end"
                        display={[
                            'none',
                            'none',
                            'none',
                            'flex',
                            'flex',
                            'flex'
                        ]}
                        onMouseEnter={() => setHaerengaIsHovered(true)}
                        onMouseLeave={() => setHaerengaIsHovered(false)}
                    >
                        <NavLink
                            href="/haerenga"
                            reoText="Haerenga"
                            englishText="Journey"
                            isHovered={haerengaIsHovered}
                        />
                    </Flex>
                    <Flex
                        display={[
                            'flex',
                            'flex',
                            'flex',
                            'none',
                            'none',
                            'none'
                        ]}
                        alignItems="baseline"
                        justifyContent="end"
                    >
                        <MenuIcon openDrawer={menu.onOpen} />
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
