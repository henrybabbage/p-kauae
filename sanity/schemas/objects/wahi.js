import { PinIcon } from '@sanity/icons'

export default {
    name: 'wahi',
    title: 'Wahi',
    type: 'document',
    icon: PinIcon,
    fields: [
        {
            name: 'ingoa',
            title: 'Ingoa',
            type: 'string'
        },
        {
            name: 'ahuahanga',
            title: 'Ahuahanga',
            type: 'geopoint',
            readOnly: true
        }
    ]
}
