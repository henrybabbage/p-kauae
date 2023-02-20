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

const WahineModal = ({ onOpen, onClose, isOpen, wahines, kamera, ta }) => {
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
                    <Flex direction={'column'}>
                        {wahines.map((wahine, index) => {
                            return (
                                <Box key={index}>
                                    <ModalHeader p={0}>
                                        <Heading
                                            fontSize={'36px'}
                                            color={'white'}
                                            fontWeight="regular"
                                        >
                                            {wahine.attributes.ingoa}
                                        </Heading>
                                        <Heading
                                            fontSize={'36px'}
                                            color={'white'}
                                            fontWeight="regular"
                                        >
                                            {wahine.attributes.whakapapa}
                                        </Heading>
                                    </ModalHeader>
                                    <ModalBody p={0}>
                                        <Grid
                                            templateColumns="repeat(12, 1fr)"
                                            maxW="100vw"
                                        >
                                            <GridItem
                                                colStart={7}
                                                colEnd={13}
                                                pt={6}
                                            >
                                                <Text
                                                    fontSize={'18px'}
                                                    lineHeight={'1.36'}
                                                    color={'white'}
                                                >
                                                    {
                                                        wahine.attributes
                                                            .korero_pukauae
                                                    }
                                                </Text>
                                                <Text
                                                    fontSize={'18px'}
                                                    lineHeight={'1.36'}
                                                    color={'white'}
                                                >
                                                    {
                                                        wahine.attributes
                                                            .korero_wahi
                                                    }
                                                </Text>
                                            </GridItem>
                                            <GridItem
                                                colStart={7}
                                                colEnd={13}
                                                pt={6}
                                            >
                                                <Text
                                                    fontSize={'18px'}
                                                    lineHeight={'1.36'}
                                                    color={'white'}
                                                >
                                                    {
                                                        wahine.attributes
                                                            .tohunga_ta_moko
                                                    }
                                                </Text>
                                            </GridItem>
                                            <GridItem
                                                colStart={7}
                                                colEnd={13}
                                                pt={6}
                                            >
                                                <Text
                                                    fontSize={'18px'}
                                                    lineHeight={'1.36'}
                                                    color={'white'}
                                                >
                                                    {
                                                        wahine.attributes
                                                            .wa_tiki_whakaahua
                                                    }
                                                </Text>
                                            </GridItem>
                                        </Grid>
                                    </ModalBody>
                                </Box>
                            )
                        })}
                    </Flex>
                    <ModalFooter p={0}>
                        <Grid
                            templateColumns="repeat(12, 1fr)"
                            w="100vw"
                            maxW="100vw"
                        >
                            <GridItem colStart={7} colEnd={13} pt={6}>
                                <Text
                                    fontSize={'18px'}
                                    lineHeight={'1.36'}
                                    color={'white'}
                                >
                                    {kamera.attributes.ingoa}
                                </Text>
                            </GridItem>
                            <GridItem colStart={7} colEnd={13} pt={6}>
                                <Text
                                    fontSize={'18px'}
                                    lineHeight={'1.36'}
                                    color={'white'}
                                >
                                    {ta.attributes.ingoa}
                                </Text>
                            </GridItem>
                        </Grid>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default WahineModal
