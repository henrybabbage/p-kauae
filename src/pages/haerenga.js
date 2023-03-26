import Map from '@/components/Map'

import { Box, Flex } from '@chakra-ui/react'
import { getPlaiceholder } from 'plaiceholder'

export default function Haerenga(props) {
    return (
        <Box as="main" maxH="100vh" overflow="hidden">
            <Box id="map" w="100vw" h="100vh" bg="grey.900">
                <Flex h="100vh" alignItems="center" justifyContent="center">
                    <Map data={props} />
                </Flex>
            </Box>
        </Box>
    )
}

import fsPromises from 'fs/promises'
import path from 'path'
export async function getStaticProps() {
    const filePath = path.join(process.cwd(), '/public/backend_data_final.json')
    const jsonData = await fsPromises.readFile(filePath)
    const objectData = JSON.parse(jsonData)

    const wahines = objectData.wahine
    const baseUrl = objectData.whakaahua_s3_bucket
    const baseUrlVideo = objectData.kiriata_cloudfront

    const wahinesImages = objectData.wahine.map(
        (wahinesUrls) => `${baseUrl}${wahinesUrls?.whakaahua?.original}`
    )

    const portraits = await Promise.all(
        wahinesImages.map(async (src) => {
            const { blurhash, img } = await getPlaiceholder(src)
            return {
                ...img,
                blurhash,
                alternativeText: 'Wahine portrait photograph'
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
            wahines,
            portraits,
            posters,
            baseUrlVideo: baseUrlVideo
        }
    }
}
