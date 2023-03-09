import Header from '@/components/Header'
import Layout from '@/components/Layout'
import MapBox from '@/components/Map'
import WahineModal from '@/components/WahineModal'
import { Box, Button, Flex, useDisclosure } from '@chakra-ui/react'
import { getPlaiceholder } from 'plaiceholder'

export default function Map({ wahines, portraits, posters, baseUrlVideo }) {
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
                    images={portraits}
                    covers={posters}
                    baseUrlVideo={baseUrlVideo}
                />
                <Box pt="14" pb="12" id="map" w="100vw" h="100vh" bg="grey.600">
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
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/wahines?populate[0]=kiriata&populate[1]=wahi&populate[2]=kiriata_whakaahua`
        ),
        fetch(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/wahines?populate[0]=whakaahua`
        )
    ])

    const wahines = objectData.wahine
    const baseUrl = objectData.whakaahua_s3_bucket
    const baseUrlVideo = objectData.kiriata_cloudfront

    const wahinesImages = objectData.wahine.map(
        (wahinesUrls) => `${baseUrl}${wahinesUrls?.whakaahua?.original}`
    )

    const portraits = await Promise.all(
        portraitUrls.map(async (src) => {
            const { blurhash, img } = await getPlaiceholder(src)
            return {
                ...img,
                blurhash,
                alernativeText: 'Wahine portrait'
            }
        })
    ).then((values) => values)

    const posterUrls = wahines.map(
        (wahinesVideos) => `${baseUrl}${wahinesVideos?.kiriata?.poster}`
    )

    const posters = await Promise.all(
        posterUrls &&
            posterUrls.map(async (src) => {
                return getPlaiceholder(src)
                    .then(({ blurhash, img }) => {
                        return { blurhash, img }
                    })
                    .catch(() => ({
                        blurhash: null,
                        img: 'error'
                    }))
            })
    ).then((values) => ({ success: true, data: values }))

    if (!wahines) {
        return {
            props: null,
            notFound: true
        }
    }
    return {
        props: {
            wahines: wahines.data,
            portraits,
            posters,
            baseUrlVideo: baseUrlVideo
        }
    }
}
