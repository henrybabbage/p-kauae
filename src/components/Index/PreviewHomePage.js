import { useLiveQuery } from '@sanity/preview-kit'
import PreviewLoading from '../Preview/PreviewLoading'
import HomePage from './HomePage'

export default function PreviewHomePage({ data: initialData, koreroQuery }) {
    const [data, loading] = useLiveQuery(initialData, koreroQuery)

    if (loading) {
        return <PreviewLoading />
    }

    return <HomePage data={data} preview={true} />
}
