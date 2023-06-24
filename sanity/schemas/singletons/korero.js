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
            type: 'content'
        },
        {
            name: 'tuhinga_tauaakii_whakamaunga_atu',
            title: 'Tuhinga tauaakii whakamaunga atu',
            type: 'content'
        },
        {
            name: 'ropu',
            title: 'Ropu',
            type: 'content'
        },
        {
            name: 'tuhinga_whakamutunga',
            title: 'Tuhinga whakamutunga',
            type: 'content'
        },
        {
            name: 'tuhinga_whakaraapopoto',
            title: 'Tuhinga whakaraapopoto',
            type: 'content'
        },
        {
            name: 'tuhinga_timatanga',
            title: 'Tuhinga timatanga in Te Reo Māori',
            description: 'Text displayed when landing page loads',
            type: 'content'
        },
        {
            name: 'tuhinga_timatanga_english',
            title: 'Tuhinga timatanga in English',
            description: 'Text displayed when landing page loads',
            type: 'content'
        },
        {
            name: 'whakataukii',
            title: 'Whakataukii',
            type: 'content'
        },
        {
            name: 'mihi',
            title: 'Mihi',
            type: 'content'
        },
        {
            name: 'tangata_mihia',
            title: 'Tangata mihia',
            type: 'array',
            of: [{ type: 'string' }]
        },
        {
            name: 'opening_video',
            title: 'Opening video',
            type: 'string'
        },
        {
            name: 'opening_video_korero',
            title: 'Opening video korero',
            type: 'content'
        },
        {
            name: 'opening_video_title',
            title: 'Opening video title',
            type: 'string'
        },
        {
            name: 'opening_video_poster',
            title: 'Opening video poster',
            type: 'whakaahua'
        },
        {
            name: 'haerenga_korero',
            title: 'Haerenga korero',
            type: 'string',
            description: 'Text displayed while haerenga page loads'
        }
    ]
}
