export default {
    name: 'wahine',
    title: 'Wahine',
    type: 'document',
    fields: [
        {
            name: 'ingoa',
            title: 'Ingoa',
            type: 'string'
        },
        {
            name: 'korero_pukauae',
            title: 'Korero pukauae',
            type: 'array',
            of: [{ type: 'block' }]
        }
    ]
}
