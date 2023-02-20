import Header from '@/components/Header'
import Layout from '@/components/Layout'
import MapBox from '@/components/Map'
import WahineModal from '@/components/WahineModal'
import { Box, Button, Flex, useDisclosure } from '@chakra-ui/react'

export default function Map({ wahines, kamera, ta }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <main>
            <Layout>
                <Header />
                <Flex justifyContent={'center'}>
                    <Button
                        variant={'callToAction'}
                        color={'black'}
                        position={'fixed'}
                        bottom={6}
                        onClick={onOpen}
                    >
                        Open
                    </Button>
                </Flex>
                <Box pt="14" pb="12" id="map" w="100vw" h="100vh">
                    <WahineModal
                        isOpen={isOpen}
                        onOpen={onOpen}
                        onClose={onClose}
                        wahines={wahines}
                        kamera={kamera}
                        ta={ta}
                    />
                    <Flex justifyContent="center" alignContent="center">
                        <Box w="84vw" h="84vh">
                            <MapBox />
                        </Box>
                    </Flex>
                </Box>
            </Layout>
        </main>
    )
}

export async function getStaticProps() {
    const [wahinesResponse, kameraResponse, taResponse] = await Promise.all([
        fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/wahines?populate=*`),
        fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/kamera`),
        fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/ta`)
    ])

    const wahines = await wahinesResponse.json()
    const kamera = await kameraResponse.json()
    const ta = await taResponse.json()

    if (!wahines) {
        return {
            props: null,
            notFound: true
        }
    }
    return {
        props: {
            wahines: wahines.data,
            kamera: kamera.data,
            ta: ta.data
        }
    }
}
