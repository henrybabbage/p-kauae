import { useLiveQuery } from '@sanity/preview-kit'
import PreviewLoading from '../Preview/PreviewLoading'
import MapPage from './MapPage'

export default function PreviewMapPage({ data: initialData, wahineQuery }) {
    const [data, loading] = useLiveQuery(initialData, wahineQuery)

    if (loading) {
        return <PreviewLoading />
    }
    return <MapPage data={data} preview={true} />
}
