export default {
    name: 'kiriata',
    title: 'Kiriata',
    type: 'object',
    fields: [
        {
            name: 'ingoa',
            title: 'Ingoa',
            type: 'string'
        },
        {
            name: 'url_1080p',
            title: '1080p',
            type: 'string',
            readOnly: true
        },
        {
            name: 'poster',
            title: 'Poster',
            type: 'whakaahua'
        }
    ]
}
