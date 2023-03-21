import { Box, Button } from '@chakra-ui/react'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useRef, useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'

export default function Map({ data }) {
    const mapRef = useRef(ReactMapGL)
    const [selectedSite, setSelectedSite] = useState(null)
    const [viewport, setViewport] = useState({
        latitude: -39.296128,
        longitude: 174.063848,
        zoom: 10
    })

    return (
        <Box h="84vh" w="84vw">
            <ReactMapGL
                width="100%"
                height="100%"
                mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
                initialViewState={{
                    latitude: -39.296128,
                    longitude: 174.063848,
                    zoom: 10
                }}
                onViewportChange={(nextViewport) => setViewport(nextViewport)}
                ref={(instance) => (mapRef.current = instance)}
                minZoom={5}
                maxZoom={15}
                pitch={45}
                mapStyle="mapbox://styles/henrybabbage/clfgw3onz000601rsu3nbrtzx"
            >
                {data.map((site) => (
                    <Marker
                        key={site.id}
                        latitude={site.wahi.ahuahanga[1]}
                        longitude={site.wahi.ahuahanga[0]}
                    >
                        <Button
                            variant={'mapLabel'}
                            onClick={(e) => {
                                e.preventDefault()
                                setSelectedSite(site)
                            }}
                        >
                            {site.wahi.ingoa}
                        </Button>
                    </Marker>
                ))}
            </ReactMapGL>
        </Box>
    )
}
