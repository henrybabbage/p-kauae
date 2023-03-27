import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Box, IconButton, useDisclosure } from '@chakra-ui/react'
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
        zoom: 12,
        scrollZoom: false,
        boxZoom: true,
        doubleClickZoom: false,
        dragRotate: true,
        dragPan: true
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

    const handlePrevClick = () => {
        const prevIndex =
            (selectedWahineIndex - 1 + wahines.length) % wahines.length
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
            duration: 3000
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
            duration: 3000
        })
    }

    const handleTransitionEnd = () => {
        mapRef.current.getBearing && mapRef.current.setBearing(90)
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
                selectedWahine={wahines[selectedWahineIndex]}
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
                interactiveLayerIds={['wahine']}
                onTransitionEnd={handleTransitionEnd}
            >
                <Box
                    position="absolute"
                    left="1rem"
                    top="50%"
                    transform="translateY(-50%)"
                >
                    <IconButton
                        aria-label="Previous Wahine"
                        icon={<ChevronLeftIcon />}
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
                        icon={<ChevronRightIcon />}
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
