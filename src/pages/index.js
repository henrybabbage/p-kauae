import HomePage from '@/components/HomePage'
import dynamic from 'next/dynamic'
import { getClient } from '../../sanity/lib/sanity.client'
import { koreroQuery } from '../../sanity/lib/sanity.queries'

const PreviewProvider = dynamic(() => import('../components/PreviewProvider'))
const PreviewHomePage = dynamic(() => import('../components/PreviewHomePage'))

export default function Home({ preview, previewToken, korero }) {
    return preview ? (
        <PreviewProvider token={previewToken}>
            <PreviewHomePage data={korero} koreroQuery={koreroQuery} />
        </PreviewProvider>
    ) : (
        <HomePage data={korero} />
    )
}

export async function getStaticProps(context) {
    const preview = context.draftMode || false
    const previewToken = preview ? process.env.SANITY_API_READ_TOKEN : ``
    if (preview && !previewToken) {
        throw new Error(`Preview mode is active, but SANITY_API_READ_TOKEN is not set in environment variables`)
    }
    const client = getClient(previewToken)

    const korero = await client.fetch(koreroQuery)

    return {
        props: {
            preview,
            previewToken,
            korero: korero
        },
        revalidate: 60
    }
}
