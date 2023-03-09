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
import { ChakraNextImage } from './ChakraNextImage'
import VideoPlayer from './VideoPlayer'

const WahineModal = ({ onOpen, onClose, isOpen, wahines, images, covers }) => {
    const captureDate = wahines[0].attributes.wa_tiki_whakaahua
    const formattedDate = format(parseISO(captureDate), 'do MMMM, yyyy')

    const [index, setIndex] = useState(0)

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
                                <Box h={'100%'}>
                                    <VideoPlayer
                                        src={
                                            wahines[0].attributes.kiriata
                                                .data[0].attributes.url
                                        }
                                        alt={
                                            wahines[0].attributes.kiriata
                                                .data[0].attributes
                                                .alternativeText
                                        }
                                        poster={null}
                                    />
                                    <Flex alignItems={'baseline'} pt={6}>
                                        <Heading
                                            fontSize={'36px'}
                                            color={'pink.200'}
                                            fontWeight="regular"
                                            fontFamily={'heading'}
                                        >
                                            {wahines[index].attributes.ingoa}
                                        </Heading>
                                        <Heading
                                            fontSize={'16px'}
                                            color={'pink.200'}
                                            fontWeight="regular"
                                            fontFamily={'heading'}
                                            ml={2}
                                        >
                                            {
                                                wahines[index].attributes
                                                    .whakapapa
                                            }
                                        </Heading>
                                    </Flex>
                                </Box>
                            </GridItem>
                            <GridItem colStart={1} colEnd={7} pt={6}>
                                <Flex direction={'column'}>
                                    <ChakraNextImage
                                        {...images[index]}
                                        src={images[index]?.src}
                                        alt={images[index]?.alternativeText}
                                        width={images[index]?.width}
                                        height={images[index]?.height}
                                        blurhash={images[index]?.blurhash}
                                        sizes={
                                            '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
                                        }
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
                            <GridItem colStart={7} colEnd={13} pt={6}>
                                <Text
                                    fontSize={'18px'}
                                    lineHeight={'1.36'}
                                    color={'white'}
                                >
                                    {wahines[index].attributes.korero_pukauae}
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
                                            {
                                                wahines[index].attributes.wahi
                                                    .data.attributes.ingoa
                                            }
                                        </Text>
                                    </HStack>
                                </Box>
                                <Box pt={6}>
                                    <Text
                                        fontSize={'18px'}
                                        lineHeight={'1.36'}
                                        color={'white'}
                                    >
                                        {wahines[index].attributes.korero_wahi}
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
                                        {
                                            wahines[index].attributes
                                                .tohunga_ta_moko
                                        }
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
