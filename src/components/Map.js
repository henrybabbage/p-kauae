'use client'

import { useRef, useState } from 'react'
import ReactMapGL, { Marker, Popup, ViewState } from 'react-map-gl'
import { Box } from '@chakra-ui/react'
import 'mapbox-gl/dist/mapbox-gl.css'

export default function Map() {
    const mapRef = useRef(ReactMapGL)
    const [viewport, setViewport] = useState({
        latitude: -39.296128,
        longitude: 174.063848,
        zoom: 10
    })

    return (
        <Box h="100%" w="100%">
            <ReactMapGL
                width="100%"
                height="100%"
                mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
                initialViewState={{
                    latitude: -39.296128,
                    longitude: 174.063848,
                    zoom: 10
                }}
                ref={(instance) => (mapRef.current = instance)}
                minZoom={5}
                maxZoom={15}
                mapStyle="mapbox://styles/leighhalliday/ckhjaksxg0x2v19s1ovps41ef"
            ></ReactMapGL>
        </Box>
    )
}
