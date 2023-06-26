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
