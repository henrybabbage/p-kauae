export default {
    name: 'wahine',
    title: 'Wahine',
    type: 'document',
    fields: [
        {
            name: 'id',
            title: 'ID',
            type: 'number',
            readOnly: true
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
            type: 'content'
        },
        {
            name: 'korero_wahi',
            title: 'Korero wahi',
            type: 'content'
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
