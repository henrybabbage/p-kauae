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

const WahineModal = ({
    onOpen,
    onClose,
    isOpen,
    wahines,
    images,
    covers,
    baseUrlVideo,
    selectedWahineIndex,
    handleNextClick,
    handlePrevClick
}) => {
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
                <ModalContent maxW="100vw" p={6} bg="grey.900" h="fit-content">
                    <Flex justifyContent="space-between" alignContent="start">
                        <Heading
                            as="h1"
                            size="md"
                            color="white"
                            fontWeight="regular"
                            fontFamily="subheading"
                        >
                            Tū Tama Wāhine o Taranaki
                        </Heading>
                        <Button variant="callToAction" onClick={onClose}>
                            Back to map
                        </Button>
                    </Flex>
                    <ModalHeader p={0}></ModalHeader>
                    <ModalBody
                        maxW="100vw"
                        p={0}
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
                            maxW="100vw"
                            columnGap="40px"
                            rowGap="20px"
                        >
                            <GridItem colStart={1} colEnd={13} pt={6}>
                                <Box className="player">
                                    <ModalVideo
                                        playerRef={playerRef}
                                        src={
                                            wahines[selectedWahineIndex]
                                                ?.kiriata?.['1080p']
                                        }
                                        baseUrlVideo={baseUrlVideo}
                                        location={
                                            wahines[selectedWahineIndex].kiriata
                                                .ingoa
                                        }
                                        poster={null}
                                        autoplay={true}
                                        muted={true}
                                        loop={true}
                                    />
                                </Box>
                                <Flex alignItems="baseline" pt={6}>
                                    <Heading
                                        fontSize="36px"
                                        color="pink.200"
                                        fontWeight="regular"
                                        fontFamily="heading"
                                    >
                                        {wahines[selectedWahineIndex].ingoa}
                                    </Heading>
                                    <Heading
                                        fontSize="16px"
                                        color="pink.200"
                                        fontWeight="regular"
                                        fontFamily="heading"
                                        ml={2}
                                    >
                                        {wahines[selectedWahineIndex].whakapapa}
                                    </Heading>
                                </Flex>
                            </GridItem>
                            <GridItem
                                colStart={1}
                                colEnd={7}
                                pt={6}
                                pb={6}
                                h="100%"
                                minH="60vh"
                                w="48vw"
                                ref={modalRef}
                            >
                                <Flex direction="column">
                                    <ZoomImage
                                        src={images[selectedWahineIndex]?.src}
                                        alt={
                                            images[selectedWahineIndex]
                                                ?.alternativeText
                                        }
                                        width={4200}
                                        height={2800}
                                        blurhash={
                                            images[selectedWahineIndex]
                                                ?.blurhash
                                        }
                                        caption={
                                            wahines[selectedWahineIndex]?.ingoa
                                        }
                                    />
                                </Flex>
                            </GridItem>
                            <GridItem
                                colStart={7}
                                colEnd={13}
                                pt={6}
                                pb={6}
                                h="auto"
                                minH="60vh"
                            >
                                <Text
                                    fontSize="18px"
                                    lineHeight="1.36"
                                    color="white"
                                >
                                    {
                                        wahines[selectedWahineIndex]
                                            .korero_pukauae
                                    }
                                </Text>
                                <Box pt={6}>
                                    <Text
                                        fontSize="18px"
                                        lineHeight="1.36"
                                        color="white"
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
                                            fontSize="18px"
                                            lineHeight="1.36"
                                            color="pink.200"
                                        >
                                            Photograph location:{' '}
                                        </Text>
                                        <Text
                                            fontSize="18px"
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
                                            fontSize="18px"
                                            lineHeight="1.36"
                                            color="pink.200"
                                        >
                                            Tohunga ta moko:{' '}
                                        </Text>
                                        <Text
                                            fontSize="18px"
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
                                            fontSize="18px"
                                            lineHeight="1.36"
                                            color="pink.200"
                                        >
                                            Capture date:{' '}
                                        </Text>
                                        <Text
                                            fontSize="18px"
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
                                        fontSize="16px"
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

export default WahineModal
