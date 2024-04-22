let productionUrl
try {
    productionUrl = new URL(process.env.NEXT_PUBLIC_SANITY_STUDIO_URL || 'http://localhost:3000')
} catch (err) {
    console.error('Invalid productionUrl', err)
}

export function resolveProductionUrl(prev, { document }) {
    if (!productionUrl || !document.slug?.current) {
        return prev
    }
    const searchParams = new URLSearchParams()
    searchParams.set('secret', process.env.SANITY_STUDIO_PREVIEW_SECRET || '')
    searchParams.set('slug', document.slug.current)
    return `${productionUrl.origin}/api/preview?${searchParams}`
}
