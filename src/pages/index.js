import Head from "next/head"
import Header from "@/components/Header"
import Layout from "@/components/Layout"
import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react"
import content from "@/data/content.json"

export const siteTitle = "Tū Tama Wāhine o Taranaki"

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="Website for the Pūkauae Photographic exhibition" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:," />
        <meta name="description" content="Tū Tama Wāhine o Taranaki is a tangata whenua development and liberation organisation." />
        <meta name="author" content="Henry Babbage, Luke Enoka, Rere-No-A-Rangi, Blaine Western" />
        <meta name="keywords" content="art" />
      </Head>
      <main>
        <Layout>
            <Header/>
            <Box p="4">
            <Grid templateColumns="repeat(12, 1fr)">
                <GridItem colSpan={12}>
                    <Container maxWidth="80vw">
                        <Text color="black" fontSize={{ base: "14px", sm: "16px", md: "18px" }}>
                            {content.about}
                        </Text>
                    </Container>
                </GridItem>
            </Grid>
            </Box>
        </Layout>
      </main>
    </>
  )
}
