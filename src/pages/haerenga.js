import MapPage from '@/components/MapPage'
import { PreviewSuspense } from 'next-sanity/preview'
import { lazy } from 'react'
import { client } from '../../sanity/lib/sanity.client'
import { wahineQuery } from '../../sanity/lib/sanity.queries'

const PreviewMapPage = lazy(() => import('../components/PreviewMapPage'))

export default function Haerenga({ wahines, preview }) {
    return preview ? (
        <PreviewSuspense fallback="Loading...">
            <PreviewMapPage wahineQuery={wahineQuery} />
        </PreviewSuspense>
    ) : (
        <MapPage wahines={wahines} />
    )
}

// import fsPromises from 'fs/promises'
// import path from 'path'
// export async function getStaticProps() {
//     const filePath = path.join(process.cwd(), '/public/backend_data_final.json')
//     const jsonData = await fsPromises.readFile(filePath)
//     const objectData = JSON.parse(jsonData)

//     const wahines = objectData.wahine
//     const haerengaKorero = objectData.tu_tama_korero.haerenga_korero
//     const baseUrl = objectData.whakaahua_s3_bucket
//     const baseUrlVideo = objectData.kiriata_cloudfront

//     const wahinesImages = objectData.wahine.map(
//         (wahinesUrls) => `${baseUrl}${wahinesUrls?.whakaahua?.original}`
//     )

//     const portraits = await Promise.all(
//         wahinesImages.map(async (src) => {
//             const { blurhash, img } = await getPlaiceholder(src)
//             return {
//                 ...img,
//                 blurhash,
//                 alternativeText: 'Wahine portrait photograph'
//             }
//         })
//     ).then((values) => values)

//     const posterUrls = wahines.map(
//         (wahinesVideos) => `${baseUrl}${wahinesVideos?.kiriata?.poster}`
//     )

//     const posters = await Promise.all(
//         posterUrls.map(async (src) => {
//             const { blurhash, img } = await getPlaiceholder(src)
//             return {
//                 ...img,
//                 blurhash,
//                 alternativeText: 'Whenua photograph'
//             }
//         })
//     ).then((values) => values)

//     if (!wahines) {
//         return {
//             props: null,
//             notFound: true
//         }
//     }
//     return {
//         props: {
//             wahines,
//             haerengaKorero,
//             portraits,
//             posters,
//             baseUrlVideo: baseUrlVideo
//         }
//     }
// }

export async function getStaticProps({ preview = false }) {
    if (preview) {
        return { props: { preview } }
    }

    const wahines = await client.fetch(wahineQuery)

    return {
        props: {
            preview,
            wahines: wahines
        },
        revalidate: 60
    }
}
