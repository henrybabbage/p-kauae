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
            name: 'mihi',
            title: 'Mihi',
            type: 'content',
            description: 'Acknowledgements'
        },
        {
            name: 'tangata_mihia',
            title: 'Tangata mihia',
            type: 'array',
            of: [{ type: 'string' }],
            validation: (Rule) => Rule.max(16),
            description: 'Thanks to'
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
            name: 'whakataukii',
            title: 'Whakataukii',
            type: 'content',
            description: 'Blockquote in large text'
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
            name: 'opening_video',
            title: 'Video',
            type: 'string',
            readOnly: true
        },
        {
            name: 'opening_video_korero',
            title: 'Video korero',
            type: 'content',
            description: 'Text displayed while video loads'
        },
        {
            name: 'opening_video_title',
            title: 'Video title',
            type: 'string',
            description: 'Title displayed when hovering over video'
        },
        {
            name: 'opening_video_poster',
            title: 'Video poster',
            type: 'whakaahua',
            description: 'Image displayed when video is paused'
        },
        {
            name: 'haerenga_korero',
            title: 'Haerenga korero',
            type: 'string',
            description: 'Text displayed while haerenga page loads'
        }
    ]
}
