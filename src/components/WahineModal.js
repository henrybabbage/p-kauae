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

const WahineModal = ({ onOpen, onClose, isOpen, wahines, images }) => {
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} size={'full'}>
                <ModalOverlay />
                <ModalContent maxW="100vw" maxH="100vh" p={6}>
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
                    <Flex direction={'column'} maxW="100vw">
                        <Box>
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
                            <ModalBody p={0}>
                                <Grid
                                    templateColumns="repeat(12, 1fr)"
                                    maxW="100vw"
                                >
                                    <GridItem colStart={7} colEnd={13} pt={6}>
                                        <Text
                                            fontSize={'18px'}
                                            lineHeight={'1.36'}
                                            color={'white'}
                                        >
                                            {
                                                wahines[0].attributes
                                                    .korero_pukauae
                                            }
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
                                            {
                                                wahines[0].attributes
                                                    .tohunga_ta_moko
                                            }
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
                                            {
                                                wahines[0].attributes
                                                    .wa_tiki_whakaahua
                                            }
                                        </Text>
                                    </GridItem>
                                </Grid>
                            </ModalBody>
                        </Box>
                    </Flex>
                    <ModalFooter p={0} mt={'auto'}>
                        <Flex
                            justifyContent={'space-between'}
                            maxW="100vw"
                            w="100vw"
                        >
                            <Box>
                                <Text
                                    fontSize={'18px'}
                                    lineHeight={'1.36'}
                                    color={'white'}
                                >
                                    Previous wahine
                                </Text>
                            </Box>
                            <Box>
                                <Text
                                    fontSize={'18px'}
                                    lineHeight={'1.36'}
                                    color={'white'}
                                >
                                    Next wahine
                                </Text>
                            </Box>
                        </Flex>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default WahineModal
