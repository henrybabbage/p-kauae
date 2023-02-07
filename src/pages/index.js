import Header from '@/components/Header'
import Layout from '@/components/Layout'
import content from '@/data/content.json'
import { Box, Grid, GridItem, Text } from '@chakra-ui/react'
import Head from 'next/head'

export const siteTitle = 'Tū Tama Wāhine o Taranaki'

export default function Home({ korero }) {
    return (
        <>
            <Head>
                <title>{siteTitle}</title>
                <meta
                    name="description"
                    content="Website for the Pūkauae Photographic exhibition"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="data:," />
                <meta
                    name="description"
                    content="Tū Tama Wāhine o Taranaki is a tangata whenua development and liberation organisation."
                />
                <meta
                    name="author"
                    content="Henry Babbage, Luke Enoka, Rere-No-A-Rangi, Blaine Western"
                />
                <meta name="keywords" content="art" />
            </Head>
            <main>
                <Layout>
                    <Header />
                    <Box p="6" id="about">
                        <Grid templateColumns="repeat(12, 1fr)">
                            <GridItem colStart={2} colEnd={12}>
                                <Text
                                    color="black"
                                    textStyle="secondary"
                                    fontSize={{
                                        base: '18px',
                                        sm: '20px',
                                        md: '22px'
                                    }}
                                >
                                    {content.about}
                                    {korero.attributes.tuhinga_matua}
                                </Text>
                            </GridItem>
                        </Grid>
                    </Box>
                </Layout>
            </main>
        </>
    )
}

export async function getStaticProps() {
    const koreroResponse = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/tu-tama-korero`
    )
    const result = await koreroResponse.json()
    return {
        props: {
            korero: result.data
        }
    }
}
