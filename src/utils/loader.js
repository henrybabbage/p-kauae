export default function sanityLoader({ src, width, quality }) {
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
    const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
    const url = new URL(`https://cdn.sanity.io/images/${projectId}/${dataset}${src}`)
    url.searchParams.set('auto', 'format')
    url.searchParams.set('fit', 'max')
    url.searchParams.set('w', width?.toString())
    if (quality) {
        url.searchParams.set('q', quality?.toString())
    }
    return url.href
}
