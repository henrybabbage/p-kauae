export default {
    name: 'korero',
    title: 'Korero',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            readOnly: true
        },
        {
            name: 'tuhinga_matua',
            title: 'Tuhinga matua',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'tuhinga_tauaakii_whakamaunga_atu',
            title: 'Tuhinga tauaakii whakamaunga atu',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'ropu',
            title: 'Ropu',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'tuhinga_whakamutunga',
            title: 'Tuhinga whakamutunga',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'tuhinga_whakaraapopoto',
            title: 'Tuhinga whakaraapopoto',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'tuhinga_timatanga',
            title: 'Tuhinga timatanga',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'whakataukii',
            title: 'Whakataukii',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'mihi',
            title: 'Mihi',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'opening_video',
            title: 'Opening video',
            type: 'string'
        },
        {
            name: 'opening_video_korero',
            title: 'Opening video korero',
            type: 'array',
            of: [{ type: 'block' }]
        },
        {
            name: 'opening_video_title',
            title: 'Opening video title',
            type: 'string'
        },
        {
            name: 'haerenga_korero',
            title: 'Haerenga korero',
            type: 'string'
        }
    ]
}
option1
