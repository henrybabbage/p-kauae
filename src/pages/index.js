import HomePage from '@/components/HomePage'
import PreviewProvider from '@/components/PreviewProvider'
import { lazy } from 'react'
import { client } from '../../sanity/lib/sanity.client'
import { koreroQuery } from '../../sanity/lib/sanity.queries'

const PreviewHomePage = lazy(() => import('../components/PreviewHomePage'))

export default function Home({ preview, korero }) {
    return preview ? (
        <PreviewProvider token={preview.token}>
            <PreviewHomePage data={korero} koreroQuery={koreroQuery} />
        </PreviewProvider>
    ) : (
        <HomePage data={korero} />
    )
}

export async function getStaticProps(context) {
    const { token } = context.previewData ?? {}
    const preview = context.preview ? { token } : null

    if (preview) {
        return { props: { preview } }
    }

    const korero = await client.fetch(koreroQuery)

    return {
        props: {
            preview,
            korero: korero
        },
        revalidate: 60
    }
}
