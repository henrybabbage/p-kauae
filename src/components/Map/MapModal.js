import { Mobile, TabletAndAbove } from '@/utils/breakpoints'
import {
    Box,
    Button,
    Flex,
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
import { Client } from 'react-hydration-provider'
import ModalVideo from '../Common/Media/ModalVideo'
import ZoomImage from '../Common/Media/ZoomImage'
import ChakraNextImage from '../Primitives/ChakraNextImage'
import { CustomPortableText } from '../Primitives/CustomPortableText'

export default function MapModal({
    onOpen,
    onClose,
    isOpen,
    wahine,
    selectedWahine,
    selectedWahineIndex,
    handleNextClick,
    handlePrevClick
}) {
    const captureDate = selectedWahine.wa_tiki_whakaahua
    const formattedDate = format(parseISO(captureDate), 'do MMMM, yyyy')

    const getPreviousWahine = () => {
        if (selectedWahineIndex === wahine.features.length - 1) {
            return wahine.features[0].properties?.ingoa || 'Previous'
        } else {
            return wahine.features[selectedWahineIndex + 1].properties?.ingoa || 'Previous'
        }
    }

    const getNextWahine = () => {
        if (selectedWahineIndex === 0) {
            return wahine.features[wahine.features.length - 1].properties?.ingoa || 'Next'
        } else {
            return wahine.features[selectedWahineIndex - 1].properties?.ingoa || 'Next'
        }
    }

    const playerRef = useRef(null)

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            onOpen={onOpen}
            size="full"
            scrollBehavior="inside"
            motionPreset="slideInBottom"
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
            <ModalOverlay />
            <ModalContent w="auto" maxW="100vw" p={[4, 4, 4, 6, 6, 6]} bg="grey.900" h="fit-content" overflow="hidden">
                <ModalHeader p={0}>
                    <Flex justifyContent="space-between" alignContent="start">
                        <Heading
                            as="h1"
                            fontSize={['10px', '10px', '10px', '20px', '20px', '20px']}
                            color="white"
                            fontWeight="regular"
                            fontFamily="subheading"
                        >
                            Tū Tama Wāhine o Taranaki
                        </Heading>
                        <Button variant="menu" onClick={onClose}>
                            <Text fontSize={['10px', '10px', '10px', '20px', '20px', '20px']}>{'Back to map ↖'}</Text>
                        </Button>
                    </Flex>
                </ModalHeader>
                <ModalBody
                    width="auto"
                    maxW="100vw"
                    pt={[4, 4, 4, 2, 2, 2]}
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
                    <Flex flexDirection={['column', 'column', 'column', 'row', 'row', 'row']} wrap="nowrap" gap="24px">
                        <Flex flexDir="column" gap="10px">
                            <Box w="100%" maxW="100vw" h="auto">
                                <ModalVideo
                                    playerRef={playerRef}
                                    src={selectedWahine.kiriata.droneFootage.secure_url}
                                    location={selectedWahine.kiriata.ingoa}
                                    poster={selectedWahine.kiriata.poster?.asset?.url}
                                    autoplay={true}
                                    muted={true}
                                    loop={true}
                                />
                            </Box>
                            <Flex
                                flexDirection={['column', 'column', 'column', 'row', 'row', 'row']}
                                w="100%"
                                maxW="100vw"
                                gap="20px"
                                pt={[0, 0, 0, 4, 4, 4]}
                            >
                                <Flex flexDirection="column" gap="10px" justifyContent="start" flex="1">
                                    <Heading
                                        fontSize={['28px', '28px', '28px', '36px', '36px', '36px']}
                                        color="pink.200"
                                        fontWeight="regular"
                                        fontFamily="heading"
                                    >
                                        {selectedWahine.ingoa}
                                    </Heading>
                                    <Heading
                                        fontSize={['12px', '12px', '12px', '16px', '16px', '16px']}
                                        color="pink.200"
                                        fontWeight="regular"
                                        fontFamily="heading"
                                    >
                                        {selectedWahine.whakapapa}
                                    </Heading>
                                    <Box
                                        display="block"
                                        max-width="100%"
                                        width="100%"
                                        height="auto"
                                        pt={[2, 2, 2, 4, 4, 4]}
                                    >
                                        <Client>
                                            <TabletAndAbove>
                                                <ZoomImage
                                                    src={selectedWahine?.whakaahua?.asset?.url}
                                                    alt={selectedWahine?.whakaahua?.alternative_text}
                                                    width={
                                                        selectedWahine?.whakaahua?.asset?.metadata?.dimensions?.width
                                                    }
                                                    height={
                                                        selectedWahine?.whakaahua?.asset?.metadata?.dimensions?.height
                                                    }
                                                    blurhash={selectedWahine?.whakaahua?.asset?.metadata?.blurHash}
                                                    caption={selectedWahine?.ingoa}
                                                />
                                            </TabletAndAbove>
                                            <Mobile>
                                                <ChakraNextImage
                                                    src={selectedWahine?.whakaahua?.asset?.url}
                                                    alt={selectedWahine?.whakaahua?.alternative_text}
                                                    width={
                                                        selectedWahine?.whakaahua?.asset?.metadata?.dimensions?.width
                                                    }
                                                    height={
                                                        selectedWahine?.whakaahua?.asset?.metadata?.dimensions?.height
                                                    }
                                                    blurhash={selectedWahine?.whakaahua?.asset?.metadata?.blurHash}
                                                />
                                            </Mobile>
                                        </Client>
                                    </Box>
                                </Flex>
                                <Box flex="1">
                                    <Flex flexDir="column" gap={['12px', '12px', '12px', '24px', '24px', '24px']}>
                                        <CustomPortableText
                                            as={'p'}
                                            sx={{
                                                fontSize: ['12px', '12px', '12px', '20px', '20px', '20px'],
                                                lineHeight: ['1.36'],
                                                color: 'white',
                                                wordWrap: 'break-word',
                                                whiteSpace: 'normal',
                                                width: '100%',
                                                maxWidth: '100%'
                                            }}
                                            value={selectedWahine.korero_pukauae}
                                        />
                                        <CustomPortableText
                                            as={'p'}
                                            sx={{
                                                fontSize: ['12px', '12px', '12px', '20px', '20px', '20px'],
                                                lineHeight: ['1.36'],
                                                color: 'white',
                                                wordWrap: 'break-word',
                                                whiteSpace: 'normal',
                                                width: '100%',
                                                maxWidth: '100%'
                                            }}
                                            value={selectedWahine.korero_wahi}
                                        />
                                        <HStack>
                                            <Text
                                                fontSize={['12px', '12px', '12px', '20px', '20px', '20px']}
                                                lineHeight="1.36"
                                                color="pink.200"
                                            >
                                                Tohunga ta moko:{' '}
                                            </Text>
                                            <Text
                                                fontSize={['12px', '12px', '12px', '20px', '20px', '20px']}
                                                lineHeight="1.36"
                                                color="white"
                                            >
                                                {selectedWahine.tohunga_ta_moko}
                                            </Text>
                                        </HStack>
                                        <HStack>
                                            <Text
                                                fontSize={['12px', '12px', '12px', '20px', '20px', '20px']}
                                                lineHeight="1.36"
                                                color="pink.200"
                                            >
                                                Photograph location:{' '}
                                            </Text>
                                            <Text
                                                fontSize={['12px', '12px', '12px', '20px', '20px', '20px']}
                                                lineHeight="1.36"
                                                color="white"
                                            >
                                                {selectedWahine.wahi.ingoa}
                                            </Text>
                                        </HStack>
                                        <HStack>
                                            <Text
                                                fontSize={['12px', '12px', '12px', '20px', '20px', '20px']}
                                                lineHeight="1.36"
                                                color="pink.200"
                                            >
                                                Capture date:{' '}
                                            </Text>
                                            <Text
                                                fontSize={['12px', '12px', '12px', '20px', '20px', '20px']}
                                                lineHeight="1.36"
                                                color="white"
                                            >
                                                {formattedDate}
                                            </Text>
                                        </HStack>
                                    </Flex>
                                </Box>
                            </Flex>
                        </Flex>
                    </Flex>
                </ModalBody>
                <ModalFooter p={0} mt="auto">
                    <Flex justifyContent="space-between" maxW="100vw" w="100vw">
                        <Box>
                            <Button
                                variant={'callToAction'}
                                size={['xs', 'xs', 'xs', 'xl', 'xl', 'xl']}
                                onClick={() => {
                                    onClose()
                                    handlePrevClick(selectedWahineIndex)
                                }}
                            >
                                {'←'} {getPreviousWahine()}
                            </Button>
                        </Box>
                        <Box>
                            <Button
                                variant={'callToAction'}
                                size={['xs', 'xs', 'xs', 'xl', 'xl', 'xl']}
                                onClick={() => {
                                    onClose()
                                    handleNextClick(selectedWahineIndex)
                                }}
                            >
                                {getNextWahine()} {'→'}
                            </Button>
                        </Box>
                    </Flex>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
