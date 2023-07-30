import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, studioUrl, useCdn } from '../env'

export const client = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn,
    studioUrl
})

export function getClient(previewToken) {
    const client = createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
        apiVersion: '2023-06-20',
        useCdn: false,
        studioUrl: '/studio',
        perspective: 'published'
    })
    if (previewToken) {
        if (!previewToken) {
            throw new Error('You must provide a token to preview drafts')
        }
        return client.withConfig({
            token: previewToken,
            useCdn: false,
            ignoreBrowserTokenWarning: true,
            perspective: 'previewDrafts'
        })
    }
    return client
}
