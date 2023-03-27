import { Box, useDisclosure } from '@chakra-ui/react'
import GeoJSON from 'geojson'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useEffect, useRef, useState } from 'react'
import ReactMapGL, { Layer, Source } from 'react-map-gl'
import WahineModal from './WahineModal'

export default function Map({ data }) {
    const mapRef = useRef(null)
    const [selectedWahine, setSelectedWahine] = useState(null)
    const [selectedWahineIndex, setSelectedWahineIndex] = useState(0)
    const [viewport, setViewport] = useState({
        latitude: -39.296128,
        longitude: 174.063848,
        bearing: 90,
        pitch: 70,
        zoom: 12
    })
    const [mapData, setMapData] = useState(null)

    const { wahines, portraits, posters, baseUrlVideo } = data

    useEffect(() => {
        const wahi = wahines.map((wahine) => {
            return {
                id: wahine.id,
                title: wahine.ingoa,
                lat: wahine.wahi.ahuahanga[1],
                lng: wahine.wahi.ahuahanga[0],
                centroid: wahine.wahi.ahuahanga
            }
        })
        const newMapData = GeoJSON.parse(wahi, { Point: ['lat', 'lng'] })
        setMapData(newMapData)
    }, [wahines])

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
            'text-variable-anchor': ['top', 'bottom', 'left', 'right']
        },
        paint: {
            'icon-color': '#ffffff',
            'text-color': '#ffffff'
        }
    }

    const { isOpen, onOpen, onClose } = useDisclosure()

    const onClick = (e) => {
        if (e.features.length && e.features[0].properties) {
            const { id, centroid } = e.features[0].properties
            const clickedWahine = wahines.find((wahine) => wahine.id === id)
            clickedWahine &&
                setSelectedWahine(() => {
                    setTimeout(() => {
                        onOpen()
                    }, 3200)
                    return clickedWahine
                })
            mapRef.current.flyTo({
                center: JSON.parse(centroid),
                pitch: 70,
                duration: 3000
            })
        } else {
            mapRef.current.flyTo({
                center: [174.063848, -39.296128],
                pitch: 70,
                duration: 3000
            })
        }
    }

    return (
        <Box h="100vh" w="100vw">
            <WahineModal
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
                wahines={wahines}
                images={portraits}
                covers={posters}
                baseUrlVideo={baseUrlVideo}
                selectedWahine={selectedWahine}
            />
            <ReactMapGL
                {...viewport}
                ref={mapRef}
                width="100%"
                height="100%"
                pitch={70}
                mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
                onMove={(event) => setViewport(event.viewport)}
                mapStyle="mapbox://styles/henrybabbage/clfr4mju3000301mopx95pkck"
                interactiveLayerIds={['wahine']}
                onClick={onClick}
            >
                {mapData && (
                    <Source
                        id="taranaki-data"
                        type="geojson"
                        data={mapData}
                        tolerance={0}
                    />
                )}
                <Layer source="taranaki-data" {...layerStyle} />
            </ReactMapGL>
        </Box>
    )
}
