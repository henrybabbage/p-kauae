import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, readToken, studioUrl, useCdn } from '../env'

export const sanityClient = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn,
    studioUrl,
    readToken
})

export function getClient(previewToken) {
    const client = createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || projectId,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || dataset,
        apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || apiVersion,
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
