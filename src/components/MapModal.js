import {
    Box,
    Button,
    Flex,
    Grid,
    GridItem,
    HStack,
    Heading,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text
} from '@chakra-ui/react'
import { format, parseISO } from 'date-fns'
import { useRef } from 'react'
import ModalVideo from './ModalVideo'
import { MotionBox } from './MotionBox'
import ZoomImage from './ZoomImage'

export default function MapModal({
    onOpen,
    onClose,
    isOpen,
    wahines,
    baseUrlVideo,
    selectedWahineIndex,
    handleNextClick,
    handlePrevClick
}) {
    console.log('wahines-modal', wahines)
    const captureDate = wahines[selectedWahineIndex].wa_tiki_whakaahua
    const formattedDate = format(parseISO(captureDate), 'do MMMM, yyyy')

    const getPreviousWahine = (selectedWahineIndex) => {
        if (selectedWahineIndex === wahines.length - 1) {
            return wahines[0]?.ingoa || 'Previous'
        } else {
            return wahines[selectedWahineIndex + 1]?.ingoa || 'Previous'
        }
    }

    const getNextWahine = (selectedWahineIndex) => {
        if (selectedWahineIndex === 0) {
            return wahines[wahines.length - 1]?.ingoa || 'Next'
        } else {
            return wahines[selectedWahineIndex - 1]?.ingoa || 'Next'
        }
    }

    const modalRef = useRef(null)
    const playerRef = useRef(null)

    return (
        <Box id="modal">
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                size="full"
                scrollBehavior="inside"
                motionPreset="slideInBottom"
            >
                <ModalOverlay />
                <ModalContent
                    w="auto"
                    maxW="100vw"
                    p={[4, 4, 4, 6, 6, 6]}
                    bg="grey.900"
                    h="fit-content"
                    overflow="hidden"
                >
                    <Flex justifyContent="space-between" alignContent="start">
                        <Heading
                            as="h1"
                            fontSize={[
                                '10px',
                                '10px',
                                '10px',
                                '20px',
                                '20px',
                                '20px'
                            ]}
                            color="white"
                            fontWeight="regular"
                            fontFamily="subheading"
                        >
                            Tū Tama Wāhine o Taranaki
                        </Heading>
                        <Button variant="menu" onClick={onClose}>
                            <Text
                                fontSize={[
                                    '10px',
                                    '10px',
                                    '10px',
                                    '20px',
                                    '20px',
                                    '20px'
                                ]}
                            >
                                Back to map
                            </Text>
                        </Button>
                    </Flex>
                    <ModalHeader p={0}></ModalHeader>
                    <ModalBody
                        width="auto"
                        maxW="100vw"
                        pt={0}
                        px={0}
                        pb={[4, 4, 4, 0, 0, 0]}
                        overflow="scroll"
                        sx={{
                            '-webkit-scrollbar': {
                                display: 'none'
                            },
                            '::-ms-overflow-style': {
                                display: 'none'
                            },
                            scrollbarWidth: 'none'
                        }}
                    >
                        <Grid
                            templateColumns="repeat(12, 1fr)"
                            maxW={[
                                '100vw',
                                '100vw',
                                '100vw',
                                '100vw',
                                '100vw',
                                '100vw'
                            ]}
                            columnGap={[
                                '20px',
                                '20px',
                                '20px',
                                '40px',
                                '40px',
                                '40px'
                            ]}
                            rowGap="20px"
                        >
                            <GridItem
                                colStart={[1, 1, 1, 1, 1, 1]}
                                colEnd={[13, 13, 13, 13, 13, 13]}
                                pt={[2, 2, 2, 6, 6, 6]}
                            >
                                <Box className="player">
                                    <ModalVideo
                                        playerRef={playerRef}
                                        src={
                                            wahines[selectedWahineIndex]
                                                ?.kiriata?.url_1080p
                                        }
                                        baseUrlVideo={baseUrlVideo}
                                        location={
                                            wahines[selectedWahineIndex].kiriata
                                                .ingoa
                                        }
                                        poster={
                                            wahines[selectedWahineIndex].kiriata
                                                .poster?.asset?.url
                                        }
                                        autoplay={true}
                                        muted={true}
                                        loop={true}
                                    />
                                </Box>
                                <Flex
                                    direction={[
                                        'column',
                                        'column',
                                        'column',
                                        'row',
                                        'row',
                                        'row'
                                    ]}
                                    alignItems="baseline"
                                    pt={6}
                                >
                                    <Heading
                                        fontSize={[
                                            '20px',
                                            '20px',
                                            '20px',
                                            '36px',
                                            '36px',
                                            '36px'
                                        ]}
                                        color="pink.200"
                                        fontWeight="regular"
                                        fontFamily="heading"
                                    >
                                        {wahines[selectedWahineIndex].ingoa}
                                    </Heading>
                                    <Heading
                                        fontSize={[
                                            '8px',
                                            '8px',
                                            '8px',
                                            '16px',
                                            '16px',
                                            '16px'
                                        ]}
                                        color="pink.200"
                                        fontWeight="regular"
                                        fontFamily="heading"
                                        ml={[0, 0, 0, 2, 2, 2]}
                                    >
                                        {wahines[selectedWahineIndex].whakapapa}
                                    </Heading>
                                </Flex>
                            </GridItem>
                            <GridItem
                                colStart={[1, 1, 1, 1, 1, 1]}
                                colEnd={[13, 13, 13, 7, 7, 7]}
                                pt={[2, 2, 2, 6, 6, 6]}
                                pb={[2, 2, 2, 6, 6, 6]}
                                // h="100%"
                                maxW="100%"
                                minH={[
                                    'fit-content',
                                    'fit-content',
                                    'fit-content',
                                    '60vh',
                                    '60vh',
                                    '60vh'
                                ]}
                                w={[
                                    '100%',
                                    '100%',
                                    '100%',
                                    '48vw',
                                    '48vw',
                                    '48vw'
                                ]}
                                ref={modalRef}
                            >
                                <Flex direction="column">
                                    <ZoomImage
                                        src={
                                            wahines[selectedWahineIndex]
                                                ?.whakaahua?.asset?.url
                                        }
                                        alt={
                                            wahines[selectedWahineIndex]
                                                ?.whakaahua?.alternative_text
                                        }
                                        width={4200}
                                        height={2800}
                                        blurhash={
                                            wahines[selectedWahineIndex]
                                                ?.whakaahua?.asset?.metadata
                                                ?.blurhash
                                        }
                                        caption={
                                            wahines[selectedWahineIndex]?.ingoa
                                        }
                                    />
                                </Flex>
                            </GridItem>
                            <GridItem
                                colStart={[1, 1, 1, 7, 7, 7]}
                                colEnd={[13, 13, 13, 13, 13, 13]}
                                pt={[2, 2, 2, 6, 6, 6]}
                                pb={[2, 2, 2, 6, 6, 6]}
                                minH={[
                                    'fit-content',
                                    'fit-content',
                                    'fit-content',
                                    '60vh',
                                    '60vh',
                                    '60vh'
                                ]}
                                w="100%"
                                maxW="100%"
                                whiteSpace="normal"
                            >
                                <Text
                                    fontSize={[
                                        '12px',
                                        '12px',
                                        '12px',
                                        '16px',
                                        '16px',
                                        '18px'
                                    ]}
                                    lineHeight="1.36"
                                    color="white"
                                    wordWrap="break-word"
                                    whiteSpace="normal"
                                    w="100%"
                                    maxW="100%"
                                >
                                    {
                                        wahines[selectedWahineIndex]
                                            .korero_pukauae
                                    }
                                </Text>
                                <Box pt={6}>
                                    <Text
                                        fontSize={[
                                            '12px',
                                            '12px',
                                            '12px',
                                            '16px',
                                            '16px',
                                            '18px'
                                        ]}
                                        lineHeight="1.36"
                                        color="white"
                                        wordWrap="break-word"
                                        whiteSpace="normal"
                                        w="100%"
                                        maxW="100%"
                                    >
                                        {
                                            wahines[selectedWahineIndex]
                                                .korero_wahi
                                        }
                                    </Text>
                                </Box>
                                <Box pt={6}>
                                    <HStack>
                                        <Text
                                            fontSize={[
                                                '12px',
                                                '12px',
                                                '12px',
                                                '16px',
                                                '16px',
                                                '18px'
                                            ]}
                                            lineHeight="1.36"
                                            color="pink.200"
                                        >
                                            Tohunga ta moko:{' '}
                                        </Text>
                                        <Text
                                            fontSize={[
                                                '12px',
                                                '12px',
                                                '12px',
                                                '16px',
                                                '16px',
                                                '18px'
                                            ]}
                                            lineHeight="1.36"
                                            color="white"
                                        >
                                            {
                                                wahines[selectedWahineIndex]
                                                    .tohunga_ta_moko
                                            }
                                        </Text>
                                    </HStack>
                                </Box>
                                <Box pt={6}>
                                    <HStack>
                                        <Text
                                            fontSize={[
                                                '12px',
                                                '12px',
                                                '12px',
                                                '16px',
                                                '16px',
                                                '18px'
                                            ]}
                                            lineHeight="1.36"
                                            color="pink.200"
                                        >
                                            Photograph location:{' '}
                                        </Text>
                                        <Text
                                            fontSize={[
                                                '12px',
                                                '12px',
                                                '12px',
                                                '16px',
                                                '16px',
                                                '18px'
                                            ]}
                                            lineHeight="1.36"
                                            color="white"
                                        >
                                            {
                                                wahines[selectedWahineIndex]
                                                    .wahi.ingoa
                                            }
                                        </Text>
                                    </HStack>
                                </Box>
                                <Box pt={6}>
                                    <HStack>
                                        <Text
                                            fontSize={[
                                                '12px',
                                                '12px',
                                                '12px',
                                                '16px',
                                                '16px',
                                                '18px'
                                            ]}
                                            lineHeight="1.36"
                                            color="pink.200"
                                        >
                                            Capture date:{' '}
                                        </Text>
                                        <Text
                                            fontSize={[
                                                '12px',
                                                '12px',
                                                '12px',
                                                '16px',
                                                '16px',
                                                '18px'
                                            ]}
                                            lineHeight="1.36"
                                            color="white"
                                        >
                                            {formattedDate}
                                        </Text>
                                    </HStack>
                                </Box>
                            </GridItem>
                        </Grid>
                    </ModalBody>
                    <ModalFooter p={0} mt="auto">
                        <Flex
                            justifyContent="space-between"
                            maxW="100vw"
                            w="100vw"
                        >
                            <Box>
                                <Button
                                    variant={'callToAction'}
                                    size={['xs', 'xs', 'xs', 'xl', 'xl', 'xl']}
                                    onClick={() => {
                                        onClose()
                                        handlePrevClick(selectedWahineIndex)
                                    }}
                                >
                                    {'←'}{' '}
                                    {getPreviousWahine(selectedWahineIndex)}
                                </Button>
                            </Box>
                            <Flex alignItems="center">
                                <MotionBox>
                                    <Text
                                        fontFamily="subheading"
                                        fontSize={[
                                            '8px',
                                            '8px',
                                            '8px',
                                            '16px',
                                            '16px',
                                            '16px'
                                        ]}
                                        lineHeight="1"
                                        textAlign="center"
                                        color="white"
                                        textTransform="uppercase"
                                    >
                                        Scroll down
                                    </Text>
                                </MotionBox>
                            </Flex>
                            <Box>
                                <Button
                                    variant={'callToAction'}
                                    size={['xs', 'xs', 'xs', 'xl', 'xl', 'xl']}
                                    onClick={() => {
                                        onClose()
                                        handleNextClick(selectedWahineIndex)
                                    }}
                                >
                                    {getNextWahine(selectedWahineIndex)} {'→'}
                                </Button>
                            </Box>
                        </Flex>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}
