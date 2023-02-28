import {
    Box,
    Button,
    Flex,
    Grid,
    GridItem,
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
import { ChakraNextImage } from './ChakraNextImage'
import VideoPlayer from './VideoPlayer'

const WahineModal = ({ onOpen, onClose, isOpen, wahines, images, covers }) => {
    const captureDate = wahines[0].attributes.wa_tiki_whakaahua
    const formattedDate = format(parseISO(captureDate), 'do MMMM, yyyy')
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
                <ModalContent maxW="100vw" p={6}>
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
                        >
                            <GridItem colStart={1} colEnd={13} pt={6}>
                                <VideoPlayer
                                    src={
                                        wahines[0].attributes.kiriata.data[0]
                                            .attributes.url
                                    }
                                    alt={
                                        wahines[0].attributes.kiriata.data[0]
                                            .attributes.alternativeText
                                    }
                                    poster={null}
                                />
                                <Flex alignItems={'baseline'} pt={6}>
                                    <Heading
                                        fontSize={'36px'}
                                        color={'white'}
                                        fontWeight="regular"
                                    >
                                        {wahines[0].attributes.ingoa}
                                    </Heading>
                                    <Heading
                                        fontSize={'16px'}
                                        color={'white'}
                                        fontWeight="regular"
                                        ml={2}
                                    >
                                        {wahines[0].attributes.whakapapa}
                                    </Heading>
                                </Flex>
                            </GridItem>
                            <GridItem colStart={1} colEnd={7} pt={6}>
                                <Box>
                                    <ChakraNextImage
                                        {...images[0]}
                                        src={images[0]?.src}
                                        alt={images[0]?.alternativeText}
                                        width={images[0]?.width}
                                        height={images[0]?.height}
                                        blurhash={images[0]?.blurhash}
                                        sizes={
                                            '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
                                        }
                                    />
                                </Box>
                            </GridItem>
                            <GridItem colStart={7} colEnd={13} pt={6}>
                                <Text
                                    fontSize={'18px'}
                                    lineHeight={'1.36'}
                                    color={'white'}
                                >
                                    {wahines[0].attributes.korero_pukauae}
                                </Text>
                                <Box pt={6}>
                                    <Text
                                        fontSize={'18px'}
                                        lineHeight={'1.36'}
                                        color={'white'}
                                    >
                                        Photograph location:{' '}
                                        {
                                            wahines[0].attributes.wahi.data
                                                .attributes.ingoa
                                        }
                                    </Text>
                                </Box>
                                <Box pt={6}>
                                    <Text
                                        fontSize={'18px'}
                                        lineHeight={'1.36'}
                                        color={'white'}
                                    >
                                        {wahines[0].attributes.korero_wahi}
                                    </Text>
                                </Box>
                                <Box pt={6}>
                                    <Text
                                        fontSize={'18px'}
                                        lineHeight={'1.36'}
                                        color={'white'}
                                    >
                                        Tohunga ta moko
                                    </Text>
                                    <Text
                                        fontSize={'18px'}
                                        lineHeight={'1.36'}
                                        color={'white'}
                                    >
                                        {wahines[0].attributes.tohunga_ta_moko}
                                    </Text>
                                </Box>
                                <Box pt={6}>
                                    <Text
                                        fontSize={'18px'}
                                        lineHeight={'1.36'}
                                        color={'white'}
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
                                <Button variant={'callToAction'}>
                                    {'←'} {'Previous wahine'}
                                </Button>
                            </Box>
                            <Box>
                                <Button variant={'callToAction'}>
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
