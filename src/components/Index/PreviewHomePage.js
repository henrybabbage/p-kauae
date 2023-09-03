import { useLiveQuery } from '@sanity/preview-kit'
import PreviewLoading from '../Preview/PreviewLoading'
import HomePage from './HomePage'

export default function PreviewHomePage({ korero, koreroQuery }) {
    const [data, loading] = useLiveQuery(korero, koreroQuery)

    if (loading) {
        return <PreviewLoading />
    }

    return <HomePage korero={data} preview={true} />
}
