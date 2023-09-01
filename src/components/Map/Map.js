import { Box, Center, Flex, HStack, Text, useDisclosure } from '@chakra-ui/react'
import { rhumbBearing } from '@turf/turf'
import 'mapbox-gl/dist/mapbox-gl.css'
import { useCallback, useEffect, useRef, useState } from 'react'
import ReactMapGL, { Layer, Source } from 'react-map-gl'

import DigitalClock from './DigitalClock'
import MonthDisplay from './MonthDisplay'

import { TabletAndAbove } from '@/utils/breakpoints'
import Image from 'next/image'
import { Client } from 'react-hydration-provider'
import MapProgress from './MapProgress'
import MapModal from './MapModal'
import MoonPhaseDisplay from './MoonPhaseDisplay'

let interval = undefined

export default function Map({ wahine }) {
    // Taranaki, New Zealand [Longitude, Latitiude]
    // Negative values denote Southern Hemisphere
    // rhumbBearing function wants order: [Lng, Lat]
    const taranakiLatLng = [174.063848, -39.296128]

    // reference from https://turfjs.org/docs/#rhumbBearing
    function handleMapBearing(newLatlng) {
        return rhumbBearing(taranakiLatLng, newLatlng) - 180
    }

    const [mapIsVisible, setMapIsVisible] = useState(false)
    const [selectedWahineIndex, setSelectedWahineIndex] = useState(0)
    const [selectedWahine, setSelectedWahine] = useState(null)
    const [viewport, setViewport] = useState(() => {
        const randomIndex = Math.floor(Math.random() * wahine.features.length)
        setSelectedWahine(wahine.features[randomIndex].properties)
        const initialPoint = wahine.features[randomIndex].properties.wahi
        return {
            latitude: initialPoint.ahuahanga.lat,
            longitude: initialPoint.ahuahanga.lng,
            activeId: wahine.features[randomIndex].id,
            // bearing should be provided in [Lng, Lat] order
            bearing: handleMapBearing([initialPoint.ahuahanga.lng, initialPoint.ahuahanga.lat]),
            pitch: 100,
            zoom: 11
        }
    }, [])

    const [progress, setProgress] = useState(0)
    const [mapIsIdle, setMapIsIdle] = useState(false)
    const [mapIsMoving, setMapIsMoving] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const mapRef = useRef(null)
    const hoveredStateIdRef = useRef(null)
    const touchRef = useRef(null)
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
            'text-size': ['case', ['==', ['get', 'id'], activeWahineId], 18, 14],
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

    useEffect(() => {
        if (!mapIsMoving && mapIsIdle && modalOpen) {
            mapModal.onOpen()
        } else if (mapModal.isOpen && !modalOpen) {
            mapModal.onClose()
        }
    }, [mapIsMoving, mapIsIdle, modalOpen])

    useEffect(() => {
        selectedWahine &&
            setSelectedWahineIndex(wahine.features.findIndex((w) => w.properties.id === selectedWahine.id))
    }, [selectedWahine])

    const handlePrevClick = () => {
        mapModal.isOpen && mapModal.onClose()
        setMapIsMoving(true)
        setModalOpen(true)
        const prevIndex = selectedWahineIndex === wahine.features.length - 1 ? 0 : selectedWahineIndex + 1
        setSelectedWahine(wahine.features[prevIndex].properties)
        const previousCoords = [
            wahine.features[prevIndex].properties.wahi.ahuahanga.lng,
            wahine.features[prevIndex].properties.wahi.ahuahanga.lat
        ]
        mapRef.current.flyTo({
            center: previousCoords,
            pitch: 70,
            duration: 3000,
            bearing: handleMapBearing(previousCoords)
        })
    }

    const handleNextClick = () => {
        mapModal.isOpen && mapModal.onClose()
        setMapIsMoving(true)
        setModalOpen(true)
        const nextIndex = selectedWahineIndex === 0 ? wahine.features.length - 1 : selectedWahineIndex - 1
        setSelectedWahine(wahine.features[nextIndex].properties)
        const nextCoords = [
            wahine.features[nextIndex].properties.wahi.ahuahanga.lng,
            wahine.features[nextIndex].properties.wahi.ahuahanga.lat
        ]
        mapRef.current.flyTo({
            center: nextCoords,
            pitch: 70,
            duration: 3000,
            bearing: handleMapBearing(nextCoords)
        })
    }

    // This converts the stringified object to JS object notion. Note: we need to handle any objects passed down here. Something to consider around the handling and storing of data.
    const convertJSONProperties = (p) => {
        if (p) {
            return {
                ...p,
                kiriata: JSON.parse(p.kiriata),
                korero_pukauae: JSON.parse(p.korero_pukauae),
                korero_wahi: JSON.parse(p.korero_wahi),
                wahi: JSON.parse(p.wahi),
                whakaahua: JSON.parse(p.whakaahua)
            }
        }
    }

    const onClick = useCallback(
        (e) => {
            if (e.features.length && e.features[0].properties) {
                const wahineProperties = convertJSONProperties(e.features[0].properties)
                if (selectedWahine.id !== wahineProperties.id) {
                    setSelectedWahine(wahineProperties)
                    const clickedCoords = [wahineProperties.wahi.ahuahanga.lng, wahineProperties.wahi.ahuahanga.lat]
                    mapRef.current.flyTo({
                        center: clickedCoords,
                        pitch: 70,
                        duration: 3000,
                        bearing: handleMapBearing(clickedCoords)
                    })
                    setMapIsMoving(true)
                    setModalOpen(true)
                } else if (selectedWahine.id == wahineProperties.id) {
                    setMapIsMoving(false)
                    setModalOpen(true)
                }
            }
        },
        [selectedWahine]
    )

    const onMapLoad = useCallback(() => {
        mapRef &&
            mapRef.current.on('mousemove', 'wahine', (e) => {
                if (e.features.length > 0) {
                    if (hoveredStateIdRef.current !== null) {
                        mapRef?.current?.setFeatureState(
                            { source: 'taranaki-data', id: hoveredStateIdRef.current },
                            { hover: false }
                        )
                    }
                    hoveredStateIdRef.current = e.features[0].id
                    mapRef?.current?.setFeatureState(
                        { source: 'taranaki-data', id: hoveredStateIdRef.current },
                        { hover: true }
                    )
                }
            })
        mapRef &&
            mapRef.current.on('mouseleave', 'wahine', () => {
                if (hoveredStateIdRef.current !== null) {
                    mapRef?.current?.setFeatureState(
                        { source: 'taranaki-data', id: hoveredStateIdRef.current },
                        { hover: false }
                    )
                }
                hoveredStateIdRef.current = null
            })
    }, [])

    return (
        <>
            {/* Instructions modal will be open by default when page mounts */}
            {/* <MapOverlay
                isOpen={instructionsModal.isOpen}
                onOpen={instructionsModal.onOpen}
                onClose={instructionsModal.onClose}
            /> */}
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
                {selectedWahine && (
                    <MapModal
                        isOpen={mapModal.isOpen}
                        onOpen={mapModal.onOpen}
                        onClose={() => setModalOpen(false)}
                        wahine={wahine}
                        selectedWahine={selectedWahine}
                        selectedWahineIndex={selectedWahineIndex}
                        handleNextClick={handleNextClick}
                        handlePrevClick={handlePrevClick}
                    />
                )}
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
                    mapboxAccessToken={process.env.MAPBOX_API_TOKEN}
                    onMove={(event) => setViewport(event.viewport)}
                    onTouchStart={(e) => {
                        touchRef.current = e.point
                    }}
                    onTouchEnd={(e) => {
                        if (Math.abs(touchRef.current.x - e.point.x > 50)) {
                            touchRef.current.x > e.point.x ? handleNextClick() : handlePrevClick()
                        }
                    }}
                    onMouseDown={(e) => {
                        touchRef.current = e.point
                    }}
                    onMouseUp={(e) => {
                        if (Math.abs(touchRef.current.x - e.point.x > 50)) {
                            touchRef.current.x > e.point.x ? handleNextClick() : handlePrevClick()
                        }
                    }}
                    mapStyle="mapbox://styles/henrybabbage/clfr4mju3000301mopx95pkck?optimize=true"
                    terrain={{ source: 'mapbox-dem', exaggeration: 1.5 }}
                    interactiveLayerIds={['wahine']}
                    onClick={onClick}
                    onLoad={(e) => {
                        setMapIsVisible(true), onMapLoad(e)
                    }}
                    onIdle={() => {
                        setMapIsIdle(true)
                        setMapIsMoving(false)
                    }}
                    onMoveStart={() => {
                        setMapIsIdle(false)
                        setMapIsMoving(true)
                    }}
                >
                    <Source id="taranaki-data" type="geojson" data={wahine} tolerance={0} generateId={true} />
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
                                    {selectedWahine?.wahi?.ingoa}
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
                                    {selectedWahine?.ingoa}
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
                <MapProgress pending={mapIsMoving && !mapModal.isOpen} value={progress} />
            </Box>
        </>
    )
}
