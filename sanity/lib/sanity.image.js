import createImageUrlBuilder from '@sanity/image-url'

import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({
    projectId: projectId || 'l5wjxg7c',
    dataset: dataset || 'production'
})

export const urlForImage = (source) => {
    return imageBuilder?.image(source).auto('format').fit('max')
}
