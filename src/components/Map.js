import { Box } from '@chakra-ui/react'
import GeoJSON from 'geojson'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useCallback, useRef, useState } from 'react'
import ReactMapGL, { Layer, Source } from 'react-map-gl'
import diamond from '/public/icons/diamond.svg'

export default function Map({ data }) {
    const mapRef = useRef(null)
    const [selectedSite, setSelectedSite] = useState(null)
    const [viewport, setViewport] = useState({
        latitude: -39.296128,
        longitude: 174.063848,
        zoom: 10
    })

    const mapRefCallback = useCallback((ref) => {
        if (ref !== null) {
            mapRef.current = ref
            const map = ref

            const loadImage = () => {
                if (!map.hasImage('diamond')) {
                    let img = new Image(24, 24)
                    img.crossOrigin = 'Anonymous'
                    img.onload = () => {
                        map.addImage('diamond', img, { sdf: true })
                    }
                    img.src = diamond
                }
            }

            loadImage()
            map.on('styleimagemissing', (e) => {
                const id = e.id
                loadImage()
            })
        }
    }, [])

    const wahi = data.map((wahine) => {
        return {
            id: wahine.id,
            title: wahine.ingoa,
            lat: wahine.wahi.ahuahanga[1],
            lng: wahine.wahi.ahuahanga[0]
        }
    })

    const layerStyle = {
        id: 'wahine',
        type: 'symbol',
        source: 'taranaki-data',
        tolerance: 0,
        layout: {
            'icon-image': 'diamond',
            'icon-size': 0.35,
            'icon-allow-overlap': true,
            'text-optional': true,
            // get the title name from the source's "title" property
            'text-field': ['get', 'title'],
            'text-font': ['Arial Unicode MS Bold'],
            'text-offset': [0, 1.25],
            'text-anchor': 'top'
        },
        paint: {
            'icon-color': '#ffffff',
            'text-color': '#ffffff'
        }
    }

    const mapData = GeoJSON.parse(wahi, { Point: ['lat', 'lng'] })

    return (
        <Box h="84vh" w="84vw">
            <ReactMapGL
                width="100%"
                height="100%"
                ref={mapRefCallback}
                mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
                initialViewState={{
                    latitude: -39.296128,
                    longitude: 174.063848,
                    zoom: 10
                }}
                onViewportChange={(nextViewport) => setViewport(nextViewport)}
                minZoom={10}
                maxZoom={15}
                pitch={45}
                mapStyle="mapbox://styles/henrybabbage/clfgw3onz000601rsu3nbrtzx"
                interactiveLayerIds={['wahine']}
                onClick={(e) => {
                    e.features.length &&
                        setSelectedSite(e.features[0].properties.id)
                }}
            >
                <Source
                    id="taranaki-data"
                    type="geojson"
                    data={mapData}
                    tolerance={0}
                />
                <Layer source="taranaki-data" {...layerStyle} />
            </ReactMapGL>
        </Box>
    )
}
