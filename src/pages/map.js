import Header from '@/components/Header'
import Layout from '@/components/Layout'
import MapBox from '@/components/Map'
import WahineModal from '@/components/WahineModal'
import { Box, Button, Flex, useDisclosure } from '@chakra-ui/react'
import { getPlaiceholder } from 'plaiceholder'

export default function Map({ wahines, images }) {
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
                        Modal
                    </Button>
                </Flex>
                <WahineModal
                    isOpen={isOpen}
                    onOpen={onOpen}
                    onClose={onClose}
                    wahines={wahines}
                    images={images}
                />
                <Box pt="14" pb="12" id="map" w="100vw" h="100vh">
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
    const [wahinesResponse, wahinesImagesResponse] = await Promise.all([
        fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/wahines?populate[0]=kiriata&populate[1]=wahi`
        ),
        fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/wahines?populate[0]=whakaahua`
        )
    ])

    const wahines = await wahinesResponse.json()
    const wahinesImages = await wahinesImagesResponse.json()

    const urls = wahinesImages?.data.map(
        (wahinesImages) =>
            wahinesImages?.attributes?.whakaahua?.data?.attributes?.url
    )

    const images = await Promise.all(
        urls.map(async (src) => {
            const { blurhash, img } = await getPlaiceholder(src)
            return {
                ...img,
                blurhash,
                alernativeText: 'Wahine portrait'
            }
        })
    ).then((values) => values)

    if (!wahines) {
        return {
            props: null,
            notFound: true
        }
    }
    return {
        props: {
            wahines: wahines.data,
            images
        }
    }
}
