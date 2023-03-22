import { Box } from '@chakra-ui/react'
import GeoJSON from 'geojson'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useRef, useState } from 'react'
import ReactMapGL, { Layer, Source } from 'react-map-gl'

export default function Map({ data }) {
    const mapRef = useRef(ReactMapGL)
    const [selectedSite, setSelectedSite] = useState(null)
    const [viewport, setViewport] = useState({
        latitude: -39.296128,
        longitude: 174.063848,
        zoom: 10
    })

    const wahi = data.map((wahine) => {
        return {
            id: wahine.id,
            ingoa: wahine.wahi.ingoa,
            lat: wahine.wahi.ahuahanga[1],
            lng: wahine.wahi.ahuahanga[0]
        }
    })

    const layerStyle = {
        id: 'wahine',
        type: 'circle',
        source: 'taranaki-data',
        // layout: {
        //     'icon-image': 'diamond',
        //     'icon-size': 4,
        //     'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
        //     'text-anchor': 'top',
        //     'text-size': 10
        // },
        paint: {
            // 'icon-color': '#ffffff',
            'circle-radius': 4,
            'circle-color': '#ffffff'
        }
    }

    const mapData = GeoJSON.parse(wahi, { Point: ['lat', 'lng'] })

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
                interactiveLayerIds={['wahine']}
                onClick={(e) => {
                    e.features.length &&
                        setSelectedSite(e.features[0].properties.id)
                }}
            >
                <Source id="taranaki-data" type="geojson" data={mapData} />
                <Layer source="taranaki-data" {...layerStyle} />
            </ReactMapGL>
        </Box>
    )
}
