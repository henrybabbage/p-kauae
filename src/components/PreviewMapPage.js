import { usePreview } from '../../sanity/lib/sanity.preview'
import MapPage from './MapPage'

export default function PreviewMapPage({ wahineQuery, preview = true }) {
    const wahines = usePreview(null, wahineQuery)
    return <MapPage wahines={wahines} preview={preview} />
}
