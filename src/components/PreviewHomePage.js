import { useLiveQuery } from '@sanity/preview-kit'
import HomePage from './HomePage'
import PreviewLoading from './PreviewLoading'

export default function PreviewHomePage({ data: initialData, koreroQuery }) {
    const [data, loading] = useLiveQuery(initialData, koreroQuery)

    if (loading) {
        return <PreviewLoading />
    }

    return <HomePage data={data} preview={true} />
}
