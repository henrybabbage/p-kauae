import fsPromises from 'fs/promises'
import path from 'path'
import { getPlaiceholder } from 'plaiceholder'

import Home from './home'

async function getStaticData() {
    const filePath = path.join(process.cwd(), '/public/backend_data_final.json')
    const jsonData = await fsPromises.readFile(filePath)
    const objectData = JSON.parse(jsonData)

    const korero = objectData.tu_tama_korero
    const kaiwhakaahua = objectData.kaiwhakaahua

    const baseUrl = objectData.whakaahua_s3_bucket
    const imagePath = objectData.kaiwhakaahua.whakaahua.original
    const imageUrl = `${baseUrl}${imagePath}`

    const { blurhash, img } = await getPlaiceholder(imageUrl)

    return {
        korero: korero,
        kaiwhakaahua: kaiwhakaahua,
        baseUrl: baseUrl,
        imagePath: imagePath,
        portrait: imageUrl,
        blurhash,
        img
    }
}

export const metadata = {
    title: 'Tū Tama Wāhine o Taranaki',
    description: 'Website for the Pūkauae Photographic exhibition',
    keywords: ['photography', 'moko kauae', 'māori', 'taranaki', 'aotearoa'],
    authors: [
        { name: 'Henry Babbage' },
        { name: 'Luke Enoka' },
        { name: 'Rere-No-A-Rangí Pope' },
        { name: 'Blaine Western' }
    ],
    category: 'art',
    icons: {
        icon: 'data:,'
    },
    openGraph: {
        title: 'Tū Tama Wāhine o Taranaki',
        description: 'Website for the Pūkauae Photographic exhibition',
        url: 'https://www.pukauae.com',
        siteName: 'Pukauae',
        images: [
            {
                url: '',
                width: 800,
                height: 600
            },
            {
                url: '',
                width: 1800,
                height: 1600,
                alt: ''
            }
        ],
        locale: 'en-US',
        type: 'website'
    }
}

export default async function Page() {
    // Fetch data directly in a Server Component
    const data = await getStaticData()
    // Forward fetched data to your Client Component
    return <Home data={data} />
}
