import { getClient } from '../../sanity/lib/sanity.client'
import { LiveQueryProvider } from 'next-sanity/preview'
import { useMemo } from 'react'

export default function PreviewProvider({ children, previewToken }) {
    const client = useMemo(() => getClient(previewToken), [previewToken])
    return <LiveQueryProvider client={client}>{children}</LiveQueryProvider>
}
