import { Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Heading } from '@chakra-ui/react'
import Balancer from 'react-wrap-balancer'

export default function MapErrorDrawer({ isOpen, onClose }) {
    return (
        <Drawer isOpen={isOpen} onClose={onClose} size="full" placement="top">
            <DrawerOverlay />
            <DrawerContent m={0} p={0} overflow="hidden" bg="rgba(0,0,0,0.8)" maxW="100vw" maxH="100vh">
                <DrawerHeader>
                    <Flex justifyContent="space-between" alignContent="start" p={['2', '2', '2', '2', '2', '2']}>
                        <Heading
                            as="h1"
                            fontSize={['16px', '16px', '16px', '20px', '20px', '20px']}
                            textColor="red.400"
                            fontWeight="regular"
                            fontFamily="subheading"
                        >
                            {'Error'}
                        </Heading>
                    </Flex>
                </DrawerHeader>
                <DrawerBody
                    p={0}
                    m={0}
                    maxW="100%"
                    maxH="100%"
                    position="absolute"
                    overflow="hidden"
                    sx={{
                        '-webkit-scrollbar': {
                            display: 'none'
                        },
                        '::-ms-overflow-style': {
                            display: 'none'
                        },
                        scrollbarWidth: 'none'
                    }}
                >
                    <Flex flexDirection="column" justifyContent="center" alignItems="center" h="100vh" w="100vw">
                        <Balancer ratio={0.5}>
                            <Heading
                                as="h1"
                                fontFamily="subheading"
                                fontWeight="regular"
                                fontSize={['16px', '16px', '16px', '36px', '36px', '36px']}
                                textColor="white"
                                lineHeight="1.3"
                                textAlign="center"
                            >
                                {
                                    'The map encountered an error while loading. Please wait for a moment while this page reloads.'
                                }
                            </Heading>
                        </Balancer>
                    </Flex>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}
