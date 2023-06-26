import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, studioUrl, useCdn } from '../env'

export const client = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn,
    studioUrl
})

export function getClient(preview) {
    const client = createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
        // apiVersion: '2022-11-11',
        // @TODO perspectives require vX for now
        apiVersion: 'X',
        useCdn: true,
        token: process.env.SANITY_API_READ_TOKEN,
        perspective: 'published',
        studioUrl: '/studio',
        logger: console
    })
    if (preview) {
        if (!preview.token) {
            throw new Error('You must provide a token to preview drafts')
        }
        return client.withConfig({
            token: preview.token,
            useCdn: false,
            ignoreBrowserTokenWarning: true,
            perspective: 'previewDrafts'
        })
    }
    return client
}
