import { useLiveQuery } from '@sanity/preview-kit'
import PreviewLoading from '../Preview/PreviewLoading'
import MapPage from './MapPage'

export default function PreviewMapPage({ wahine, wahineQuery }) {
    const [data, loading] = useLiveQuery(wahine, wahineQuery)

    if (loading) {
        return <PreviewLoading />
    }
    return <MapPage wahine={data} preview={true} />
}
