import { decodeAssetUrl } from '../../utils/decodeAssetUrl'

export default {
    name: 'config',
    title: 'Config',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            readOnly: true
        },
        {
            name: 'site',
            title: 'Site',
            type: 'url',
            description: 'Canonical url for search engine results.'
        },
        {
            name: 'siteTitle',
            title: 'Site Title',
            type: 'string',
            validation: (Rule) =>
                Rule.max(50).warning(
                    'Longer titles may be truncated by search engines'
                ),
            description: 'Website title for search engine results.'
        },
        {
            name: 'siteDescription',
            title: 'Site Description',
            type: 'text',
            rows: 3,
            validation: (Rule) =>
                Rule.max(150).warning(
                    'Longer descriptions may be truncated by search engines'
                ),
            description: 'Website description for search engine results.'
        },
        {
            name: 'ogImage',
            title: 'Open Graph Image',
            type: 'image',
            description:
                'Displayed on social cards and search engine results. Recommended size: 1200x630 (PNG or JPG).',
            options: {
                hotspot: true
            }
        },
        {
            title: 'Error Page (404)',
            name: 'error',
            type: 'text',
            description:
                'This text will display on a 404 page for any URL at your domain that does not exist yet',
            rows: 3,
            hidden: true
        },
        {
            title: 'Browser Icon (Favicon)',
            name: 'favicon',
            type: 'image',
            description: 'Upload a 16 x 16 SVG icon to use as the browser icon',
            options: {
                accept: 'image/svg+xml'
            },
            validation: (Rule) => {
                return Rule.custom((field) => {
                    if (!field) return true

                    const { dimensions } = decodeAssetUrl(field.asset._ref)

                    if (dimensions.width !== 16 || dimensions.height !== 16) {
                        return 'Favicon must be a 16x16 SVG'
                    } else {
                        return true
                    }
                })
            },
            hidden: true
        },
        {
            title: 'Legacy Browser Icon (.ico)',
            name: 'faviconLegacy',
            type: 'file',
            description: 'Upload a 32 x 32 .ico file for older browsers.',
            validation: (Rule) => {
                return Rule.custom((field) => {
                    if (!field) return true

                    const { format } = decodeAssetUrl(field.asset._ref)

                    if (format !== 'ico') {
                        return 'Legacy Favicon must be a 32x32 ICO file'
                    } else {
                        return true
                    }
                })
            },
            hidden: true
        },
        {
            title: 'Touch Icon',
            name: 'touchIcon',
            type: 'image',
            description: 'Recommended size: 192x192 (PNG).',
            hidden: true
        }
    ]
}
