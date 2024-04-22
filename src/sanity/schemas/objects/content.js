import { EditIcon } from '@sanity/icons'

const HighlightDecorator = (props) => <span style={{ backgroundColor: '#f9abab' }}>{props.children}</span>

export default {
    name: 'content',
    title: 'Content',
    type: 'array',
    of: [
        {
            type: 'block',
            styles: [{ title: 'Normal', value: 'normal' }],
            marks: {
                decorators: [
                    { title: 'Emphasis', value: 'em' },
                    {
                        title: 'Highlight',
                        value: 'highlight',
                        icon: EditIcon,
                        component: HighlightDecorator
                    }
                ],
                annotations: []
            },
            lists: []
        }
    ]
}
