import MapPage from '@/components/MapPage'
import { getClient } from '../../sanity/lib/sanity.client'
import { wahineQuery } from '../../sanity/lib/sanity.queries'

const PreviewProvider = dynamic(() => import('@/components/PreviewProvider'))
const PreviewMapPage = dynamic(() => import('@/components/PreviewMapPage'))

export default function Haerenga({ wahines, preview, previewToken }) {
    return preview ? (
        <PreviewProvider token={previewToken}>
            <PreviewMapPage data={wahines} wahineQuery={wahineQuery} />
        </PreviewProvider>
    ) : (
        <MapPage data={wahines} />
    )
}

export async function getStaticProps(context) {
    const preview = context.draftMode || false
    const previewToken = preview ? process.env.SANITY_API_READ_TOKEN : ``
    if (preview && !previewToken) {
        throw new Error(
            `Preview mode is active, but SANITY_READ_TOKEN is not set in environment variables`
        )
    }
    const client = getClient(previewToken)

    const wahines = await client.fetch(wahineQuery)

    return {
        props: {
            preview,
            previewToken,
            wahines: wahines
        },
        revalidate: 60
    }
}
