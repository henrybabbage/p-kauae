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

const WahineModal = ({ onOpen, onClose, isOpen, wahines, images }) => {
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
                    <ModalHeader p={0}>
                        <Heading
                            fontSize={'36px'}
                            color={'white'}
                            fontWeight="regular"
                        >
                            {wahines[0].attributes.ingoa}
                        </Heading>
                        <Heading
                            fontSize={'36px'}
                            color={'white'}
                            fontWeight="regular"
                        >
                            {wahines[0].attributes.whakapapa}
                        </Heading>
                    </ModalHeader>
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
                            'scrollbar-width': 'none'
                        }}
                    >
                        <Grid
                            templateColumns="repeat(12, 1fr)"
                            maxW="100vw"
                            columnGap="40px"
                        >
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
                                <Text
                                    fontSize={'18px'}
                                    lineHeight={'1.36'}
                                    color={'white'}
                                >
                                    {wahines[0].attributes.korero_wahi}
                                </Text>
                            </GridItem>
                            <GridItem colStart={7} colEnd={13} pt={6}>
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
                            </GridItem>
                            <GridItem colStart={7} colEnd={13} pt={6}>
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
