/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/pages/studio/[[...index]].jsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion } from './sanity/env'
import { schema } from './sanity/schema'

const title = process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Pūkauae'

export default defineConfig({
    basePath: '/studio',
    projectId: 'l5wjxg7c',
    dataset: 'production',
    title,
    // Add and edit the content schema in the './sanity/schema' folder
    schema,
    plugins: [
        deskTool(),
        // Vision is a tool that lets you query your content with GROQ in the studio
        // https://www.sanity.io/docs/the-vision-plugin
        visionTool({ defaultApiVersion: apiVersion })
    ]
})
