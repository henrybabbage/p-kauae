import { previewData } from 'next/headers'

export function getPreviewToken() {
    return previewData()?.token
}
