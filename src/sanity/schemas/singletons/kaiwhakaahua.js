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
            name: 'paetukutuku',
            title: 'Paetukutuku',
            type: 'string',
            validation: (Rule) =>
                Rule.uri({
                    scheme: ['http', 'https'],
                    allowRelative: false
                })
        },
        {
            name: 'korero',
            title: 'Korero',
            type: 'content'
        },
        {
            name: 'whakaahua',
            title: 'Whakaahua',
            type: 'whakaahua'
        }
    ]
}
