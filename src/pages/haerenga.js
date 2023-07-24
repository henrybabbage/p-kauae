import MapPage from '@/components/MapPage'
import PreviewProvider from '@/components/PreviewProvider'
import { lazy } from 'react'
import { client } from '../../sanity/lib/sanity.client'
import { wahineQuery } from '../../sanity/lib/sanity.queries'

const PreviewMapPage = lazy(() => import('../components/PreviewMapPage'))

export default function Haerenga({ wahines, preview }) {
    return preview ? (
        <PreviewProvider token={preview.token}>
            <PreviewMapPage data={wahines} wahineQuery={wahineQuery} />
        </PreviewProvider>
    ) : (
        <MapPage data={wahines} />
    )
}

export async function getStaticProps(context) {
    const { token } = context.previewData ?? {}
    const preview = context.preview ? { token } : null

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
