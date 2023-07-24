import { LiveQueryProvider } from '@sanity/preview-kit'
import { useMemo } from 'react'
import { getClient } from '../../sanity/lib/sanity.client'

export default function PreviewProvider({ children, previewToken }) {
    const client = useMemo(() => getClient(previewToken), [previewToken])
    return <LiveQueryProvider client={client}>{children}</LiveQueryProvider>
}
