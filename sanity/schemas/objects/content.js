export default {
    name: 'content',
    title: 'Content',
    type: 'array',
    of: [
        {
            type: 'block',
            styles: [{ title: 'Normal', value: 'normal' }],
            marks: {
                decorators: [{ title: 'Emphasis', value: 'em' }],
                annotations: []
            },
            lists: []
        }
    ]
}
