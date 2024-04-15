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
                <title>Pukauae: Whakapapa</title>
                <meta name="description" content="Website for the Pūkauae photographic exhibition" />
                <meta name="author" content="Henry Babbage, Luke Enoka, Rere-No-A-Rangi Pope, Blaine Western" />
                <meta name="keywords" content="pukauae, tu tama wahine o taranaki, tu tama wahine, art" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
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
