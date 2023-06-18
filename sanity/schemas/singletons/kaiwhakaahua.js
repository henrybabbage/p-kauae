export default {
    name: 'kaiwhakaahua',
    title: 'Kaiwhakaahua',
    type: 'document',
    fields: [
        {
            name: 'ingoa',
            title: 'Ingoa',
            type: 'string'
        },
        {
            name: 'whakapapa',
            title: 'Whakapapa',
            type: 'string'
        },
        {
            name: 'korero',
            title: 'Korero',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'whakaahua',
            title: 'Whakaahua',
            type: 'whakaahua'
        }
    ]
}
