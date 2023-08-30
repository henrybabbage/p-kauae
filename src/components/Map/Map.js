import { Box, Center, Flex, HStack, Heading, Text, useDisclosure } from '@chakra-ui/react'
import { rhumbBearing } from '@turf/turf'
import GeoJSON from 'geojson'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useCallback, useEffect, useRef, useState } from 'react'
import ReactMapGL, { Layer, Source } from 'react-map-gl'

import DigitalClock from './DigitalClock'
import MonthDisplay from './MonthDisplay'

import { TabletAndAbove } from '@/utils/breakpoints'
import { Client } from 'react-hydration-provider'
import MapModal from './MapModal'
import MapOverlay from './MapOverlay'
import MapProgress from './MapProgress'
import MoonPhaseDisplay from './MoonPhaseDisplay'
import Image from 'next/image'

let interval = undefined

export default function Map({ data }) {
    // Taranaki, New Zealand [Longitude, Latitiude]
    // Negative values denote Southern Hemisphere
    // rhumbBearing function wants order: [Lng, Lat]
    const taranakiLatLng = [174.063848, -39.296128]

    // reference from https://turfjs.org/docs/#rhumbBearing
    function handleMapBearing(newLatlng) {
        return rhumbBearing(taranakiLatLng, newLatlng) - 180
    }

    const [mapData, setMapData] = useState(null)
    const [modalOpenPending, setModalOpenPending] = useState(false)
    const [mapIsVisible, setMapIsVisible] = useState(false)
    const [selectedWahineIndex, setSelectedWahineIndex] = useState(0)
    const [viewport, setViewport] = useState(() => {
        const wahines = data
        const randomIndex = Math.floor(Math.random() * wahines.length)
        setSelectedWahineIndex(randomIndex)
        return {
            latitude: wahines[randomIndex].wahi.ahuahanga.lat,
            longitude: wahines[randomIndex].wahi.ahuahanga.lng,
            activeId: wahines[randomIndex].id,
            // bearing should be provided in [Lng, Lat] order
            bearing: handleMapBearing([
                wahines[randomIndex].wahi.ahuahanga.lng,
                wahines[randomIndex].wahi.ahuahanga.lat
            ]),
            pitch: 100,
            zoom: 11
        }
    }, [])
    const [running, setRunning] = useState(false)
    const [progress, setProgress] = useState(0)

    const mapRef = useRef(null)
    const timeOutRef = useRef(null)

    const wahines = data

    useEffect(() => {
        const wahi = wahines.map((wahine) => {
            return {
                id: wahine.id,
                title: wahine.ingoa,
                lat: wahine.wahi.ahuahanga.lat,
                lng: wahine.wahi.ahuahanga.lng,
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
            'icon-size': 0.35,
            'icon-allow-overlap': true,
            'text-allow-overlap': true,
            'text-ignore-placement': false,
            'text-optional': true,
            'text-field': ['get', 'title'],
            'text-font': ['Arial Unicode MS Bold'],
            'text-offset': [0, 1.25],
            'text-variable-anchor': [
                'top',
                'bottom',
                'left',
                'right',
                'center',
                'top-left',
                'top-right',
                'bottom-left',
                'bottom-right'
            ],
            'text-radial-offset': 1.25
        },
        paint: {
            'icon-color': '#ffffff',
            'text-color': [
                'case',
                ['boolean', ['feature-state', 'hover'], false],
                '#f9abab',
                ['case', ['==', ['get', 'id'], activeWahineId], '#f9abab', '#ffffff']
            ]
        }
    }

    const mapModal = useDisclosure()
    const instructionsModal = useDisclosure({ defaultIsOpen: true })

    function handleModalDelay() {
        setModalOpenPending(true)
        setRunning(true)
        setProgress(0)
        timeOutRef.current && clearTimeout(timeOutRef.current)
        timeOutRef.current = setTimeout(() => {
            setModalOpenPending(false)
            mapModal.onOpen()
        }, 3200)
    }

    // progress indicator
    useEffect(() => {
        if (running) {
            interval = setInterval(() => {
                setProgress((prev) => prev + 1)
            }, 10)
        } else {
            clearInterval(interval)
        }
    }, [running])

    useEffect(() => {
        if (progress === 100) {
            setRunning(false)
            clearInterval(interval)
        }
    }, [progress])

    const handlePrevClick = () => {
        setProgress(0)
        setRunning(!running)
        const prevIndex = selectedWahineIndex === wahines.length - 1 ? 0 : selectedWahineIndex + 1
        setSelectedWahineIndex(prevIndex)
        handleModalDelay()
        mapRef.current.flyTo({
            // flyTo wants order: [Lng, Lat]
            center: [wahines[prevIndex].wahi.ahuahanga.lng, wahines[prevIndex].wahi.ahuahanga.lat],
            pitch: 70,
            duration: 3000,
            bearing: handleMapBearing([wahines[prevIndex].wahi.ahuahanga.lng, wahines[prevIndex].wahi.ahuahanga.lat])
        })
    }

    const handleNextClick = () => {
        setProgress(0)
        setRunning(!running)
        const nextIndex = selectedWahineIndex === 0 ? wahines.length - 1 : selectedWahineIndex - 1
        setSelectedWahineIndex(nextIndex)
        handleModalDelay()
        mapRef.current.flyTo({
            center: [wahines[nextIndex].wahi.ahuahanga.lng, wahines[nextIndex].wahi.ahuahanga.lat],
            pitch: 70,
            duration: 3000,
            bearing: handleMapBearing([wahines[nextIndex].wahi.ahuahanga.lng, wahines[nextIndex].wahi.ahuahanga.lat])
        })
    }

    const onClick = (e) => {
        if (e.features.length && e.features[0].properties) {
            const { id } = e.features[0].properties
            const clickedWahine = wahines.find((wahine) => wahine.id === id)
            //TODO find index, do not subtract from id
            if (clickedWahine) {
                setSelectedWahineIndex(clickedWahine.id - 1)
                handleModalDelay()
            }
            mapRef.current.flyTo({
                center: [
                    wahines[clickedWahine.id - 1].wahi.ahuahanga.lng,
                    wahines[clickedWahine.id - 1].wahi.ahuahanga.lat
                ],
                pitch: 70,
                duration: 3000,
                bearing: handleMapBearing([
                    wahines[clickedWahine.id - 1].wahi.ahuahanga.lng,
                    wahines[clickedWahine.id - 1].wahi.ahuahanga.lat
                ])
            })
        }
    }

    let hoveredStateId = null

    const onMapLoad = useCallback(() => {
        mapRef &&
            mapRef.current.on('mousemove', 'wahine', (e) => {
                if (e.features.length > 0) {
                    if (hoveredStateId !== null) {
                        mapRef?.current?.setFeatureState(
                            { source: 'taranaki-data', id: hoveredStateId },
                            { hover: false }
                        )
                    }
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    hoveredStateId = e.features[0].id
                    mapRef?.current?.setFeatureState({ source: 'taranaki-data', id: hoveredStateId }, { hover: true })
                }
            })
        mapRef &&
            mapRef.current.on('mouseleave', 'wahine', () => {
                if (hoveredStateId !== null) {
                    mapRef?.current?.setFeatureState({ source: 'taranaki-data', id: hoveredStateId }, { hover: false })
                }
                hoveredStateId = null
            })
    }, [])

    return (
        <>
            {/* Instructions modal will be open by default when page mounts */}
            <MapOverlay
                isOpen={instructionsModal.isOpen}
                onOpen={instructionsModal.onOpen}
                onClose={instructionsModal.onClose}
            />
            {/* Fallback display before map mounts */}
            <Center h="100vh" w="100vw" position="absolute">
                <Image
                    src="/icons/pukauae.svg"
                    alt="Pukauae logo"
                    width="125"
                    height="125"
                    priority
                    sizes="100vw"
                    style={{
                        objectFit: 'contain',
                        objectPosition: 'center'
                    }}
                />
            </Center>
            <Box
                h="100vh"
                w="100vw"
                cursor="auto"
                position="relative"
                opacity={mapIsVisible ? 1 : 0}
                transition="opacity 0.5s ease-in"
                transitionDelay="1s"
            >
                {/* Drawer WIP */}
                {/* <Client>
                    <Box position="fixed" inset="0">
                        <MapDrawer
                            wahines={wahines}
                            selectedWahineIndex={selectedWahineIndex}
                            handleNextClick={handleNextClick}
                            handlePrevClick={handlePrevClick}
                        />
                    </Box>
                </Client> */}
                <MapModal
                    isOpen={mapModal.isOpen}
                    onOpen={mapModal.onOpen}
                    onClose={mapModal.onClose}
                    wahines={wahines}
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
                    cursor="pointer"
                    position="relative"
                    scrollZoom={false}
                    boxZoom={false}
                    doubleClickZoom={false}
                    dragRotate={false}
                    dragPan={false}
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
                    {/* Arrow buttons */}
                    {/* <Box position="absolute" left="1rem" top="50%" transform="translateY(-50%)">
                        <IconButton
                            aria-label="Previous Wahine"
                            icon={<ChevronLeftIcon color="black" />}
                            onClick={handlePrevClick}
                            isRound
                            mr={2}
                        />
                    </Box>
                    <Box position="absolute" right="1rem" top="50%" transform="translateY(-50%)">
                        <IconButton
                            aria-label="Next Wahine"
                            icon={<ChevronRightIcon color="black" />}
                            onClick={handleNextClick}
                            isRound
                            ml={2}
                        />
                    </Box> */}
                    {mapData && (
                        <Source id="taranaki-data" type="geojson" data={mapData} tolerance={0} generateId={true} />
                    )}
                    <Layer source="taranaki-data" {...layerStyle} />
                </ReactMapGL>
                <Client>
                    <TabletAndAbove>
                        <Flex justifyContent="space-between">
                            <HStack
                                spacing="24px"
                                position="fixed"
                                z="20"
                                bottom={['6', '6', '8', '8', '8', '8']}
                                left="8"
                            >
                                <Text
                                    fontFamily="subheading"
                                    fontSize="14px"
                                    lineHeight="1"
                                    textAlign="left"
                                    color="#FFD233"
                                    pb="2"
                                >
                                    {wahines[selectedWahineIndex]?.wahi?.ingoa}
                                </Text>
                                <Text
                                    fontFamily="subheading"
                                    fontSize="14px"
                                    lineHeight="1"
                                    textAlign="left"
                                    color="#FFD233"
                                    pb="2"
                                >
                                    {' • '}
                                </Text>
                                <Text
                                    fontFamily="subheading"
                                    fontSize="14px"
                                    lineHeight="1"
                                    textAlign="left"
                                    color="#FFD233"
                                    pb="2"
                                >
                                    {wahines[selectedWahineIndex]?.ingoa}
                                </Text>
                            </HStack>
                            <HStack
                                spacing="24px"
                                position="fixed"
                                z="20"
                                bottom={['6', '6', '8', '8', '8', '8']}
                                right="8"
                            >
                                <Box w="64px"></Box>
                                <Box id="local-time" position="absolute">
                                    <DigitalClock />
                                </Box>
                                <Text
                                    fontFamily="subheading"
                                    fontSize="14px"
                                    lineHeight="1"
                                    textAlign="left"
                                    color="#FFD233"
                                    pb="2"
                                >
                                    {' • '}
                                </Text>
                                <MonthDisplay />
                                <Text
                                    fontFamily="subheading"
                                    fontSize="14px"
                                    lineHeight="1"
                                    textAlign="left"
                                    color="#FFD233"
                                    pb="2"
                                >
                                    {' • '}
                                </Text>
                                <MoonPhaseDisplay />
                            </HStack>
                        </Flex>
                    </TabletAndAbove>
                </Client>
                <MapProgress pending={modalOpenPending} value={progress} />
            </Box>
        </>
    )
}
