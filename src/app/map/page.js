import fsPromises from 'fs/promises'
import path from 'path'
import { getPlaiceholder } from 'plaiceholder'

import Map from './map'

async function getStaticData() {
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

    return {
        wahines: wahines,
        portraits: portraits,
        posters: posters,
        baseUrlVideo: baseUrlVideo
    }
}

export const metadata = {
    title: 'Tū Tama Wāhine o Taranaki',
    description: 'Website for the Pūkauae Photographic exhibition',
    keywords: ['photography', 'moko kauae', 'māori', 'taranaki', 'aotearoa'],
    authors: [
        { name: 'Henry Babbage' },
        { name: 'Luke Enoka' },
        { name: 'Rere-No-A-Rangi Pope' },
        { name: 'Blaine Western' }
    ],
    category: 'art',
    icons: {
        icon: 'data:,'
    },
    openGraph: {
        title: 'Tū Tama Wāhine o Taranaki',
        description: 'Website for the Pūkauae Photographic exhibition',
        url: 'https://www.pukauae.com',
        siteName: 'Pukauae',
        images: [
            {
                url: '',
                width: 800,
                height: 600
            },
            {
                url: '',
                width: 1800,
                height: 1600,
                alt: ''
            }
        ],
        locale: 'en-US',
        type: 'website'
    }
}

export default async function Page() {
    const data = await getStaticData()
    return <Map data={data} />
}
