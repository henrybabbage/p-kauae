import { MapIcon } from 'lucide-react'

export default {
    name: 'haerenga',
    title: 'Haerenga',
    type: 'document',
    icon: MapIcon,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            hidden: true
        },
        {
            name: 'slide_1',
            title: 'Slide_1',
            type: 'text',
            description: 'Guide text for the first step'
        },
        {
            name: 'slide_1_mobile',
            title: 'Slide 1 mobile',
            type: 'text',
            description: 'Guide text for the first step'
        },
        {
            name: 'slide_2',
            title: 'Slide 2',
            type: 'text',
            description: 'Guide text for the second step'
        },
        {
            name: 'slide_2_mobile',
            title: 'Slide 2 mobile',
            type: 'text',
            description: 'Guide text for the second step'
        },
        {
            name: 'slide_3',
            title: 'Slide 3',
            type: 'text',
            description: 'Guide text for the third step'
        },
        {
            name: 'slide_3_mobile',
            title: 'Slide 3 mobile',
            type: 'text',
            description: 'Guide text for the third step'
        }
    ]
}
