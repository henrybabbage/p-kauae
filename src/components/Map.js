import { useCallback, useEffect, useRef, useState } from 'react'
import { useCountdown } from '@/hooks/useCountdown'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import {
    Box,
    Flex,
    HStack,
    IconButton,
    Text,
    useDisclosure
} from '@chakra-ui/react'
import { rhumbBearing } from '@turf/turf'
import GeoJSON from 'geojson'
import 'mapbox-gl/dist/mapbox-gl.css'
import ReactMapGL, { Layer, Source } from 'react-map-gl'
import DigitalClock from './DigitalClock'
import MapOverlay from './MapOverlay'
import MapProgress from './MapProgress'
import WahineModal from './WahineModal'

export default function Map({ data }) {
    const mapRef = useRef(null)
    const timeOutRef = useRef(null)
    const [selectedWahineIndex, setSelectedWahineIndex] = useState(0)
    const [mapIsVisible, setMapIsVisible] = useState(false)
    const [viewport, setViewport] = useState(() => {
        const { wahines } = data
        const wahineLatLngs = wahines.map((wahine) => ({
            lat: wahine.wahi.ahuahanga[1],
            lng: wahine.wahi.ahuahanga[0]
        }))
        const randomStartPoint =
            wahineLatLngs[Math.floor(Math.random() * wahineLatLngs.length)]
        return {
            latitude: randomStartPoint.lat,
            longitude: randomStartPoint.lng,
            bearing: 90,
            pitch: 70,
            zoom: 12,
            scrollZoom: false,
            boxZoom: false,
            doubleClickZoom: false,
            dragRotate: false,
            dragPan: false
        }
    })
    const [mapData, setMapData] = useState(null)
    const [timerStarted, setTimerStarted] = useState(null)
    const [progress] = useCountdown(0.05, timerStarted)

    const { wahines, haerengaKorero, portraits, posters, baseUrlVideo } = data

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

    let activeWahineId = selectedWahineIndex + 1

    const layerStyle = {
        id: 'wahine',
        type: 'symbol',
        source: 'taranaki-data',
        tolerance: 0,
        layout: {
            // 'icon-image': 'diamond',
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
            // 'text-color': '#ffffff',
            'text-color': [
                'case',
                ['boolean', ['feature-state', 'hover'], false],
                '#f9abab',
                [
                    'case',
                    ['==', ['get', 'id'], activeWahineId],
                    '#f9abab',
                    '#ffffff'
                ]
            ]
        }
    }

    const { isOpen, onOpen, onClose } = useDisclosure()

    function handleMapBearing(newLatlng) {
        return rhumbBearing(taranakiLatLng, newLatlng)
    }

    const handlePrevClick = () => {
        const prevIndex =
            selectedWahineIndex === wahines.length - 1
                ? 0
                : selectedWahineIndex + 1

        setSelectedWahineIndex(prevIndex)
        timeOutRef.current && clearTimeout(timeOutRef.current)
        timeOutRef.current = setTimeout(() => {
            onOpen()
        }, 3200)
        mapRef.current.flyTo({
            center: wahines[prevIndex].wahi.ahuahanga,
            pitch: 70,
            duration: 3000,
            bearing: handleMapBearing(wahines[prevIndex].wahi.ahuahanga) - 180
        })
    }

    const handleNextClick = () => {
        const nextIndex =
            selectedWahineIndex === 0
                ? wahines.length - 1
                : selectedWahineIndex - 1
        setSelectedWahineIndex(nextIndex)
        timeOutRef.current && clearTimeout(timeOutRef.current)
        timeOutRef.current = setTimeout(() => {
            onOpen()
        }, 3200)
        mapRef.current.flyTo({
            center: wahines[nextIndex].wahi.ahuahanga,
            pitch: 70,
            duration: 3000,
            bearing: handleMapBearing(wahines[nextIndex].wahi.ahuahanga) - 180
        })
    }

    const onClick = (e) => {
        if (e.features.length && e.features[0].properties) {
            const { id } = e.features[0].properties
            const clickedWahine = wahines.find((wahine) => wahine.id === id)
            //TODO - find index, do not subtract from id.
            if (clickedWahine) {
                setSelectedWahineIndex(clickedWahine.id - 1)
                timeOutRef.current && clearTimeout(timeOutRef.current)
                timeOutRef.current = setTimeout(() => {
                    onOpen()
                }, 3200)
            }
            mapRef.current.flyTo({
                center: wahines[clickedWahine.id - 1].wahi.ahuahanga,
                pitch: 70,
                duration: 3000,
                bearing:
                    handleMapBearing(
                        wahines[clickedWahine.id - 1].wahi.ahuahanga
                    ) - 180
            })
        }
    }

    let hoveredStateId = null

    const onMapLoad = useCallback(() => {
        mapRef &&
            mapRef.current.on('mousemove', 'wahine', (e) => {
                if (e.features.length > 0) {
                    if (hoveredStateId !== null) {
                        mapRef.current.setFeatureState(
                            { source: 'taranaki-data', id: hoveredStateId },
                            { hover: false }
                        )
                    }
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    hoveredStateId = e.features[0].id
                    mapRef.current.setFeatureState(
                        { source: 'taranaki-data', id: hoveredStateId },
                        { hover: true }
                    )
                }
            })
        mapRef &&
            mapRef.current.on('mouseleave', 'wahine', () => {
                if (hoveredStateId !== null) {
                    mapRef.current.setFeatureState(
                        { source: 'taranaki-data', id: hoveredStateId },
                        { hover: false }
                    )
                }
                hoveredStateId = null
            })
    }, [])

    return (
        <>
            <Flex
                position="absolute"
                width="100vw"
                height="100vh"
                justifyContent="center"
                alignItems="center"
            >
                <MapOverlay
                    haerengaKorero={haerengaKorero}
                    mapIsVisible={mapIsVisible}
                />
            </Flex>
            <Box
                h="100vh"
                w="100vw"
                cursor="auto"
                position="relative"
                opacity={mapIsVisible ? 1 : 0}
                transition="opacity 0.5s ease-in"
                transitionDelay="1s"
            >
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
                    position="relative"
                    localFontFamily={'SohneBreit_Buch'}
                    mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
                    onMove={(event) => setViewport(event.viewport)}
                    mapStyle="mapbox://styles/henrybabbage/clfr4mju3000301mopx95pkck?optimize=true"
                    terrain={{ source: 'mapbox-dem', exaggeration: 1.5 }}
                    interactiveLayerIds={['wahine']}
                    onClick={onClick}
                    onLoad={(e) => {
                        setMapIsVisible(true), onMapLoad(e)
                    }}
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
                            generateId={true}
                        />
                    )}
                    <Layer source="taranaki-data" {...layerStyle} />
                </ReactMapGL>
                <Box id="local-time" position="fixed" left="6" bottom="6">
                    <DigitalClock />
                </Box>
                <HStack
                    spacing="24px"
                    position="fixed"
                    z="20"
                    bottom="6"
                    left="32"
                >
                    <Text
                        fontFamily="subheading"
                        fontSize="14px"
                        lineHeight="1"
                        textAlign="left"
                        color="white"
                        pb="2"
                    >
                        {' • '}
                    </Text>
                    <Text
                        id="month"
                        fontFamily="subheading"
                        fontSize="14px"
                        lineHeight="1"
                        textAlign="left"
                        color="white"
                        pb="2"
                    >
                        {'Paenga-whāwhā'}
                    </Text>
                    <Text
                        fontFamily="subheading"
                        fontSize="14px"
                        lineHeight="1"
                        textAlign="left"
                        color="white"
                        pb="2"
                    >
                        {' • '}
                    </Text>
                    <Text
                        id="moon-phase"
                        fontFamily="subheading"
                        fontSize="14px"
                        lineHeight="1"
                        textAlign="left"
                        color="white"
                        pb="2"
                    >
                        {'Ohua'}
                    </Text>
                </HStack>
                <Box position="fixed" right="6" bottom="6">
                    <MapProgress value={progress} />
                </Box>
            </Box>
        </>
    )
}
