import useStorage from '@/hooks/useStorage'
import { Box, Flex, Heading, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import { useEffect } from 'react'
import Balancer from 'react-wrap-balancer'

export default function SplashBanner({ bannerShown, setBannerShown }) {
    const { getItem, setItem } = useStorage()

    useEffect(() => {
        const banner = getItem('bannerShown')
        if (!banner) {
            setTimeout(() => {
                setItem('bannerShown', true)
                setBannerShown(true)
            }, 5000)
        } else {
            setBannerShown(true)
        }
    }, [getItem, setItem, bannerShown, setBannerShown])

    return (
        <>
            {
                <VStack w="100vw" h="100vh" maxH="100vh" backgroundColor="grey.900" zIndex={10} pointerEvents="none" overflow="hidden">
                    <Flex h="100vh" w="80vw" textAlign="center" justifyContent="center" alignItems="center" direction="column">
                        <Box position="relative" width="150px" height="150px">
                            <Image
                                src="/icons/pukauae.svg"
                                alt="Pukauae logo"
                                width="150"
                                height="150"
                                priority
                                sizes="100vw"
                                style={{
                                    objectFit: 'contain',
                                    objectPosition: 'center'
                                }}
                            />
                        </Box>
                        <Heading pt="12" textAlign="center" fontSize="56px" lineHeight="1" color="pink.200" fontFamily="heading">
                            <Balancer ratio={1.0}>Nau mai ki Pūkauae</Balancer>
                        </Heading>
                    </Flex>
                </VStack>
            }
        </>
    )
}
