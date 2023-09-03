import MapPage from '@/components/Map/MapPage'
import GeoJSON from 'geojson'
import dynamic from 'next/dynamic'
import { getClient } from '../../sanity/lib/sanity.client'
import { wahineQuery } from '../../sanity/lib/sanity.queries'

const PreviewProvider = dynamic(() => import('../components/Preview/PreviewProvider'))
const PreviewMapPage = dynamic(() => import('../components/Map/PreviewMapPage'))

export default function Haerenga({ wahine, preview = false, previewToken }) {
    return preview ? (
        <PreviewProvider token={previewToken}>
            <PreviewMapPage wahine={wahine} wahineQuery={wahineQuery} />
        </PreviewProvider>
    ) : (
        <MapPage wahine={wahine} />
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

    return {
        props: {
            preview,
            previewToken,
            wahine
        },
        revalidate: 60
    }
}
