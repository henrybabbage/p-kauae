import Header from '@/components/Header'
import Layout from '@/components/Layout'
import MapBox from '@/components/Map'
import React from 'react'
import { Box } from '@chakra-ui/react'

export default function Map() {
    return (
        <main>
            <Layout>
                <Header />
                <Box p="6" id="map">
                    <Box w="100%" h="100%">
                        <MapBox />
                    </Box>
                </Box>
            </Layout>
        </main>
    )
}
