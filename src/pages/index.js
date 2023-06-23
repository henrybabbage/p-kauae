import HomePage from '@/components/HomePage'
import { PreviewSuspense } from 'next-sanity/preview'
import { lazy } from 'react'
import { client } from '../../sanity/lib/sanity.client'
import { kaiwhakaahuaQuery, koreroQuery } from '../../sanity/lib/sanity.queries'

const PreviewHomePage = lazy(() => import('../components/PreviewHomePage'))

export default function Home({ preview, kaiwhakaahua, korero }) {
    return preview ? (
        <PreviewSuspense fallback="Loading...">
            <PreviewHomePage
                koreroQuery={koreroQuery}
                kaiwhakaahuaQuery={kaiwhakaahuaQuery}
            />
        </PreviewSuspense>
    ) : (
        <HomePage kaiwhakaahua={kaiwhakaahua} korero={korero} />
    )
}

export async function getStaticProps({ preview = false }) {
    if (preview) {
        return { props: { preview } }
    }

    const korero = await client.fetch(koreroQuery)
    const kaiwhakaahua = await client.fetch(kaiwhakaahuaQuery)

    console.log({ preview, korero, kaiwhakaahua })

    return {
        props: {
            preview,
            korero: korero,
            kaiwhakaahua: kaiwhakaahua
        }
    }
}
