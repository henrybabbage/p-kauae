// Refer to the following documentation to get started here: https://visgl.github.io/react-map-gl/docs/get-started/get-started

import Header from '@/components/Header'
import Layout from '@/components/Layout'
import { Box } from '@chakra-ui/react'

export default function Map() {
    return (
        <main>
            <Layout>
                <Header />
                <Box p="6" id="map"></Box>
            </Layout>
        </main>
    )
}
