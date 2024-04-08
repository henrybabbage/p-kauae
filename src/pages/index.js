import HomePage from '@/components/Index/HomePage'
import dynamic from 'next/dynamic'

import Head from 'next/head'
import { getClient } from '../../sanity/lib/sanity.client'
import { koreroQuery } from '../../sanity/lib/sanity.queries'

const PreviewProvider = dynamic(() => import('../components/Preview/PreviewProvider'))
const PreviewHomePage = dynamic(() => import('../components/Index/PreviewHomePage'))

export default function Home({ preview, previewToken, korero }) {
    return preview ? (
        <PreviewProvider token={previewToken}>
            <PreviewHomePage korero={korero} koreroQuery={koreroQuery} />
        </PreviewProvider>
    ) : (
        <>
            <Head>
                <link rel="canonical" href="https://www.pukauae.com/" />
            </Head>
            <HomePage korero={korero} />
        </>
    )
}

export async function getStaticProps(context) {
    const preview = context.draftMode || false
    const previewToken = preview ? process.env.SANITY_API_READ_TOKEN : null
    if (preview && !previewToken) {
        throw new Error(`Preview mode is active, but SANITY_API_READ_TOKEN is not set in environment variables`)
    }
    const client = getClient(previewToken)

    const korero = await client.fetch(koreroQuery)

    return {
        props: {
            preview,
            previewToken,
            korero
        },
        revalidate: 60
    }
}
