/** @type {import('next').NextConfig} */

const nextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.geojson$/,
            use: ['json-loader']
        })
        return config
    },
    experimental: { urlImports: ['https://themer.sanity.build/'] },
    i18n: {
        locales: ['en'],
        defaultLocale: 'en'
    },
    reactStrictMode: true,
    logging: {
        fetches: {
            fullUrl: true
        }
    },
    compiler: {
        styledComponents: true
    },
    env: {
        MAPBOX_API_TOKEN: process.env.MAPBOX_API_TOKEN,
        VISUALCROSSING_API_KEY: process.env.VISUALCROSSING_API_KEY,
        NEXT_PUBLIC_IMAGES_DOMAIN: process.env.NEXT_PUBLIC_IMAGES_DOMAIN,
        NEXT_PUBLIC_YOUTUBE_ASSET_DOMAIN: process.env.NEXT_PUBLIC_YOUTUBE_ASSET_DOMAIN,
        NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
        NEXT_PUBLIC_SANITY_API_VERSION: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
        NEXT_PUBLIC_SANITY_PROJECT_TITLE: process.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE,
        NEXT_PUBLIC_SANITY_API_WRITE_TOKEN: process.env.NEXT_PUBLIC_SANITY_API_WRITE_TOKEN,
        NEXT_PUBLIC_SANITY_API_READ_TOKEN: process.env.NEXT_PUBLIC_SANITY_API_READ_TOKEN,
        NEXT_PUBLIC_WEBSITE_URL: process.env.NEXT_PUBLIC_WEBSITE_URL
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io'
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com'
            }
        ]
    },
    async headers() {
        return [
            {
                // matching all API routes
                source: '/api/(.*)',
                headers: [
                    { key: 'Access-Control-Allow-Credentials', value: 'true' },
                    { key: 'Access-Control-Allow-Origin', value: '*' },
                    {
                        key: 'Access-Control-Allow-Methods',
                        value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT'
                    },
                    {
                        key: 'Access-Control-Allow-Headers',
                        value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
                    }
                ]
            }
        ]
    }
}

module.exports = nextConfig
