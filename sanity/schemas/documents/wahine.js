export default {
    name: 'wahine',
    title: 'Wahine',
    type: 'document',
    fields: [
        {
            name: 'id',
            title: 'ID',
            type: 'number'
        },
        {
            name: 'ingoa',
            title: 'Ingoa',
            type: 'string'
        },
        {
            name: 'whakaahua',
            title: 'Whakaahua',
            type: 'whakaahua'
        },
        {
            name: 'kiriata',
            title: 'Kiriata',
            type: 'kiriata'
        },
        {
            name: 'whakapapa',
            title: 'Whakapapa',
            type: 'string'
        },
        {
            name: 'korero_pukauae',
            title: 'Korero pukauae',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'korero_wahi',
            title: 'Korero wahi',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'tohunga_ta_moko',
            title: 'Tohunga ta moko',
            type: 'string'
        },
        {
            name: 'wa_tiki_whakaahua',
            title: 'Wa tiki whakaahua',
            type: 'date'
        },
        {
            name: 'wahi',
            title: 'Wahi',
            type: 'wahi'
        }
    ]
}
