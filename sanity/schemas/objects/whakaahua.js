import { ImageIcon } from '@sanity/icons'

export default {
    name: 'whakaahua',
    title: 'Whakaahua',
    type: 'image',
    icon: ImageIcon,
    options: {
        hotspot: true
    },
    fields: [
        {
            name: 'alternative_text',
            title: 'Alternative text',
            type: 'string',
            description: 'Alternative text for screenreaders'
        }
    ],
    preview: {
        select: {
            imageUrl: 'asset.url',
            title: 'alternative_text'
        }
    }
}
