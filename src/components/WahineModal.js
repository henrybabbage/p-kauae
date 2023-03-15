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
import { useState } from 'react'
import PortraitModal from './PortraitModal'
import VideoPlayer from './VideoPlayer'

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

    function handleNextClick() {
        setIndex((index) => (index + 1) % wahines.length)
    }

    function handlePreviousClick() {
        setIndex((index) => (index - 1) % wahines.length)
    }

    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                size={'full'}
                scrollBehavior={'inside'}
                motionPreset="slideInBottom"
            >
                <ModalOverlay />
                <ModalContent maxW="100vw" p={6} bg="grey.600">
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
                            <GridItem colStart={1} colEnd={13} pt={6} h="80vh">
                                <Box
                                    h="75vh"
                                    overflow="hidden"
                                    objectPosition="center"
                                >
                                    <VideoPlayer
                                        src={wahines[index].kiriata.original}
                                        alt={
                                            wahines[index].kiriata
                                                .alternativeText
                                        }
                                        poster={null}
                                        baseUrlVideo={baseUrlVideo}
                                        location={wahines[index].wahi.ingoa}
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
                                    <PortraitModal
                                        src={images[index]?.src}
                                        alt={images[index]?.alternativeText}
                                        width={4200}
                                        height={2800}
                                        blurhash={images[index]?.blurhash}
                                        caption={wahines[index]?.ingoa}
                                        didClickMinimize={(shouldZoom) => {
                                            setIsZoomed(shouldZoom)
                                        }}
                                    />
                                    <Flex justifyContent={'end'}>
                                        <Box pt={'2'}>
                                            <Button variant={'callToAction'}>
                                                {'Enlarge'} {'+'}
                                            </Button>
                                        </Box>
                                    </Flex>
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
                                    {'←'} {'Previous wahine'}
                                </Button>
                            </Box>
                            <Box>
                                <Button
                                    variant={'callToAction'}
                                    onClick={handleNextClick}
                                >
                                    {'Next wahine'} {'→'}
                                </Button>
                            </Box>
                        </Flex>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default WahineModal
