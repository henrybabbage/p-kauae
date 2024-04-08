import MapPage from '@/components/Map/MapPage'
import GeoJSON from 'geojson'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { getClient } from '../../sanity/lib/sanity.client'
import { haerengaQuery, wahineQuery } from '../../sanity/lib/sanity.queries'

const PreviewProvider = dynamic(() => import('../components/Preview/PreviewProvider'))
const PreviewMapPage = dynamic(() => import('../components/Map/PreviewMapPage'))

export default function Haerenga({ wahine, haerenga, preview = false, previewToken }) {
    return preview ? (
        <PreviewProvider token={previewToken}>
            <PreviewMapPage wahine={wahine} wahineQuery={wahineQuery} />
        </PreviewProvider>
    ) : (
        <>
            <Head>
                <link rel="canonical" href="https://www.pukauae.com/haerenga" />
            </Head>
            <MapPage wahine={wahine} haerenga={haerenga} />
        </>
    )
}

export async function getStaticProps(context) {
    const preview = context.draftMode || false
    const previewToken = preview ? process.env.SANITY_API_READ_TOKEN : null
    if (preview && !previewToken) {
        throw new Error(`Preview mode is active, but SANITY_READ_TOKEN is not set in environment variables`)
    }
    const client = getClient(previewToken)

    const wahine = await client.fetch(wahineQuery).then((res) => {
        const wahi = res.map((w) => {
            return {
                ...w,
                title: w.ingoa,
                lat: w.wahi.ahuahanga.lat,
                lng: w.wahi.ahuahanga.lng
            }
        })
        return GeoJSON.parse(wahi, { Point: ['lat', 'lng'] })
    })

    const haerenga = await client.fetch(haerengaQuery)

    return {
        props: {
            preview,
            previewToken,
            wahine,
            haerenga
        },
        revalidate: 60
    }
}
