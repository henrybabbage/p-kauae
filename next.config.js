/** @type {import('next').NextConfig} */
const { withPlaiceholder } = require('@plaiceholder/next')

const nextConfig = {
    i18n: {
        locales: ['en'],
        defaultLocale: 'en'
    },
    reactStrictMode: true,
    compiler: {
        styledComponents: true
    },
    env: {
        NEXT_PUBLIC_STRAPI_URL: process.env.NEXT_PUBLIC_STRAPI_URL,
        NEXT_PUBLIC_IMAGES_DOMAIN: process.env.NEXT_PUBLIC_IMAGES_DOMAIN
    },
    images: {
        domains: ['localhost', 'pukauae.s3.ap-southeast-2.amazonaws.com'],
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.amazonaws.com'
            },
            {
                protocol: 'https',
                hostname: '**.strapi.io'
            }
        ]
    }
}

module.exports = withPlaiceholder({ ...nextConfig })
