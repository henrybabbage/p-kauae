import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Box, IconButton, useDisclosure } from '@chakra-ui/react'
import { rhumbBearing } from '@turf/turf'
import GeoJSON from 'geojson'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useEffect, useRef, useState } from 'react'
import ReactMapGL, { Layer, Source } from 'react-map-gl'
import WahineModal from './WahineModal'

export default function Map({ data }) {
    const mapRef = useRef(null)
    const [selectedWahineIndex, setSelectedWahineIndex] = useState(0)
    const [viewport, setViewport] = useState({
        latitude: -39.296128,
        longitude: 174.063848,
        bearing: 90,
        pitch: 70,
        zoom: 12,
        scrollZoom: false,
        boxZoom: false,
        doubleClickZoom: false,
        dragRotate: false,
        dragPan: false
    })
    const [mapData, setMapData] = useState(null)

    const { wahines, portraits, posters, baseUrlVideo } = data

    const taranakiLatLng = [174.063848, -39.296128]

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
            'text-font': ['Sohne Kraftig', 'Arial Unicode MS Bold'],
            'text-offset': [0, 1.25],
            'text-variable-anchor': ['top', 'bottom', 'left', 'right']
        },
        paint: {
            'icon-color': '#ffffff',
            'text-color': '#ffffff'
        }
    }

    const { isOpen, onOpen, onClose } = useDisclosure()

    function handleMapBearing(newLatlng) {
        return rhumbBearing(taranakiLatLng, newLatlng)
    }

    const handlePrevClick = () => {
        const prevIndex =
            selectedWahineIndex === 0
                ? wahines.length - 1
                : (selectedWahineIndex - 1) % wahines.length
        prevIndex &&
            setSelectedWahineIndex(() => {
                setTimeout(() => {
                    onOpen()
                }, 3200)
                return prevIndex
            })
        mapRef.current.flyTo({
            center: wahines[prevIndex].wahi.ahuahanga,
            pitch: 70,
            duration: 3000,
            bearing: handleMapBearing(wahines[prevIndex].wahi.ahuahanga) - 180
        })
    }

    const handleNextClick = () => {
        const nextIndex = (selectedWahineIndex + 1) % wahines.length
        nextIndex &&
            setSelectedWahineIndex(() => {
                setTimeout(() => {
                    onOpen()
                }, 3200)
                return nextIndex
            })

        mapRef.current.flyTo({
            center: wahines[nextIndex].wahi.ahuahanga,
            pitch: 70,
            duration: 3000,
            bearing: handleMapBearing(wahines[nextIndex].wahi.ahuahanga) - 180
        })
    }

    return (
        <Box h="100vh" w="100vw" cursor="auto">
            <WahineModal
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
                wahines={wahines}
                images={portraits}
                covers={posters}
                baseUrlVideo={baseUrlVideo}
                selectedWahineIndex={selectedWahineIndex}
                handleNextClick={handleNextClick}
                handlePrevClick={handlePrevClick}
            />
            <ReactMapGL
                {...viewport}
                reuseMaps
                ref={mapRef}
                width="100%"
                height="100%"
                mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
                onMove={(event) => setViewport(event.viewport)}
                mapStyle="mapbox://styles/henrybabbage/clfr4mju3000301mopx95pkck"
                terrain={{ source: 'mapbox-dem', exaggeration: 1.5 }}
                interactiveLayerIds={['wahine']}
            >
                <Box
                    position="absolute"
                    left="1rem"
                    top="50%"
                    transform="translateY(-50%)"
                >
                    <IconButton
                        aria-label="Previous Wahine"
                        icon={<ChevronLeftIcon color="black" />}
                        onClick={handlePrevClick}
                        isDisabled={wahines.length <= 1}
                        isRound
                        mr={2}
                    />
                </Box>
                <Box
                    position="absolute"
                    right="1rem"
                    top="50%"
                    transform="translateY(-50%)"
                >
                    <IconButton
                        aria-label="Next Wahine"
                        icon={<ChevronRightIcon color="black" />}
                        onClick={handleNextClick}
                        isDisabled={wahines.length <= 1}
                        isRound
                        ml={2}
                    />
                </Box>
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
