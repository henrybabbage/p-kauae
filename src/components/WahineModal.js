import { isBrowser } from '@/utils/helpers'
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
import { useRef, useState } from 'react'
import ModalVideo from './ModalVideo'
import ZoomImage from './ZoomImage'

const WahineModal = ({
    onOpen,
    onClose,
    isOpen,
    wahines,
    images,
    covers,
    baseUrlVideo
}) => {
    const [index, setIndex] = useState(0)

    const captureDate = wahines[index].wa_tiki_whakaahua
    const formattedDate = format(parseISO(captureDate), 'do MMMM, yyyy')

    function scrollToTop() {
        if (!isBrowser()) return
        let element = document.getElementById('modal')
        element.scrollTo({ top: 0, behavior: 'smooth' })
    }

    function handleNextClick() {
        setIndex((index) => (index + 1) % wahines.length)
        setTimeout(() => {
            scrollToTop()
        }, 300)
    }

    function handlePreviousClick() {
        setIndex((index) => {
            if (index === 0) {
                return wahines.length - 1
            } else {
                return (index - 1) % wahines.length
            }
        })
        setTimeout(() => {
            scrollToTop()
        }, 300)
    }

    const playerRef = useRef(null)

    return (
        <Box id="modal">
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                size={'full'}
                scrollBehavior={'inside'}
                motionPreset="slideInBottom"
            >
                <ModalOverlay />
                <ModalContent maxW="100vw" p={6} bg="grey.900">
                    <Flex
                        justifyContent={'space-between'}
                        alignContent={'start'}
                    >
                        <Heading
                            textStyle="primary"
                            as="h1"
                            size="md"
                            color="white"
                            fontWeight="regular"
                        >
                            Tū Tama Wāhine o Taranaki
                        </Heading>
                        <Button variant={'callToAction'} onClick={onClose}>
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
                            rowGap="40px"
                        >
                            <GridItem colStart={1} colEnd={13} pt={6}>
                                <Box className="player">
                                    <ModalVideo
                                        playerRef={playerRef}
                                        src={wahines[index]?.kiriata?.['1080p']}
                                        baseUrlVideo={baseUrlVideo}
                                        location={wahines[index].wahi.ingoa}
                                        poster={null}
                                    />
                                </Box>
                                <Flex alignItems={'baseline'} pt={6}>
                                    <Heading
                                        fontSize={'36px'}
                                        color={'pink.200'}
                                        fontWeight="regular"
                                        fontFamily={'heading'}
                                    >
                                        {wahines[index].ingoa}
                                    </Heading>
                                    <Heading
                                        fontSize={'16px'}
                                        color={'pink.200'}
                                        fontWeight="regular"
                                        fontFamily={'heading'}
                                        ml={2}
                                    >
                                        {wahines[index].whakapapa}
                                    </Heading>
                                </Flex>
                            </GridItem>
                            <GridItem
                                colStart={1}
                                colEnd={7}
                                pt={6}
                                minH="84vh"
                            >
                                <Flex direction={'column'}>
                                    <ZoomImage
                                        src={images[index]?.src}
                                        alt={images[index]?.alternativeText}
                                        width={4200}
                                        height={2800}
                                        blurhash={images[index]?.blurhash}
                                        caption={wahines[index]?.ingoa}
                                    />
                                </Flex>
                            </GridItem>
                            <GridItem
                                colStart={7}
                                colEnd={13}
                                pt={6}
                                minH="84vh"
                            >
                                <Text
                                    fontSize={'18px'}
                                    lineHeight={'1.36'}
                                    color={'white'}
                                >
                                    {wahines[index].korero_pukauae}
                                </Text>
                                <Box pt={6}>
                                    <HStack>
                                        <Text
                                            fontSize={'18px'}
                                            lineHeight={'1.36'}
                                            color={'pink.200'}
                                        >
                                            Photograph location:{' '}
                                        </Text>
                                        <Text
                                            fontSize={'18px'}
                                            lineHeight={'1.36'}
                                            color={'white'}
                                        >
                                            {wahines[index].wahi.ingoa}
                                        </Text>
                                    </HStack>
                                </Box>
                                <Box pt={6}>
                                    <Text
                                        fontSize={'18px'}
                                        lineHeight={'1.36'}
                                        color={'white'}
                                    >
                                        {wahines[index].korero_wahi}
                                    </Text>
                                </Box>
                                <Box pt={6}>
                                    <Text
                                        fontSize={'18px'}
                                        lineHeight={'1.36'}
                                        color={'pink.200'}
                                    >
                                        Tohunga ta moko
                                    </Text>
                                    <Text
                                        fontSize={'18px'}
                                        lineHeight={'1.36'}
                                        color={'white'}
                                    >
                                        {wahines[index].tohunga_ta_moko}
                                    </Text>
                                </Box>
                                <Box pt={6}>
                                    <Text
                                        fontSize={'18px'}
                                        lineHeight={'1.36'}
                                        color={'pink.200'}
                                    >
                                        Capture date
                                    </Text>
                                    <Text
                                        fontSize={'18px'}
                                        lineHeight={'1.36'}
                                        color={'white'}
                                    >
                                        {formattedDate}
                                    </Text>
                                </Box>
                            </GridItem>
                        </Grid>
                    </ModalBody>
                    <ModalFooter p={0} mt={'auto'}>
                        <Flex
                            justifyContent={'space-between'}
                            maxW="100vw"
                            w="100vw"
                        >
                            <Box>
                                <Button
                                    variant={'callToAction'}
                                    onClick={handlePreviousClick}
                                >
                                    {'←'}{' '}
                                    {
                                        wahines[
                                            (index - 1 + wahines.length) %
                                                wahines.length
                                        ].ingoa
                                    }
                                </Button>
                            </Box>
                            <Box>
                                <Button
                                    variant={'callToAction'}
                                    onClick={handleNextClick}
                                >
                                    {
                                        wahines[(index + 1) % wahines.length]
                                            .ingoa
                                    }{' '}
                                    {'→'}
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
