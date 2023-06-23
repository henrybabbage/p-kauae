import { usePreview } from '../../sanity/lib/sanity.preview'
import HomePage from './HomePage'

export default function PreviewHomePage({
    koreroQuery,
    kaiwhakaahuaQuery,
    preview = true
}) {
    const korero = usePreview(null, koreroQuery)
    const kaiwhakaahua = usePreview(null, kaiwhakaahuaQuery)
    return (
        <HomePage
            kaiwhakaahua={kaiwhakaahua}
            korero={korero}
            preview={preview}
        />
    )
}
