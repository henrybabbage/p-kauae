import { useLiveQuery } from '@sanity/preview-kit'
import MapPage from './MapPage'
import PreviewLoading from './PreviewLoading'

export default function PreviewMapPage({ data: initialData, wahineQuery }) {
    const [data, loading] = useLiveQuery(initialData, wahineQuery)

    if (loading) {
        return <PreviewLoading />
    }
    return <MapPage data={data} preview={true} />
}
