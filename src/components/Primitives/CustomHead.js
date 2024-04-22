import Head from 'next/head'

export default function CustomHead({
    title,
    content,
    pageSlug,
    pageType = 'website',
    ogImage = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/og-image.png`
}) {
    const ogTitle = title.replace('Pukauae', '')
    const pageURL = `${process.env.NEXT_PUBLIC_WEBSITE_URL}${pageSlug}`

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={content} />
            <link rel="canonical" href={pageURL} />
            <meta property="og:type" content={pageType} />
            <meta property="og:title" content={ogTitle} />
            <meta property="og:description" content={content} />
            <meta property="og:url" content={pageURL} />
            <meta property="og:image" content={ogImage} />
        </Head>
    )
}
