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
    wahines,
    selectedWahineIndex,
    handleNextClick,
    handlePrevClick
}) {
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
                        <Box flex={['0', '0', '0', '1', '1', '1']}>
                            <Flex flexDir="column" gap="24px">
                                <Box display="block" max-width="100%" width="100%" height="auto">
                                    <Client>
                                        <TabletAndAbove>
                                            <ZoomImage
                                                src={wahines[selectedWahineIndex]?.whakaahua?.asset?.url}
                                                alt={wahines[selectedWahineIndex]?.whakaahua?.alternative_text}
                                                width={
                                                    wahines[selectedWahineIndex]?.whakaahua?.asset?.metadata?.dimensions
                                                        ?.width
                                                }
                                                height={
                                                    wahines[selectedWahineIndex]?.whakaahua?.asset?.metadata?.dimensions
                                                        ?.height
                                                }
                                                blurhash={
                                                    wahines[selectedWahineIndex]?.whakaahua?.asset?.metadata?.blurHash
                                                }
                                                caption={wahines[selectedWahineIndex]?.ingoa}
                                            />
                                        </TabletAndAbove>
                                        <Mobile>
                                            <ChakraNextImage
                                                src={wahines[selectedWahineIndex]?.whakaahua?.asset?.url}
                                                alt={wahines[selectedWahineIndex]?.whakaahua?.alternative_text}
                                                width={
                                                    wahines[selectedWahineIndex]?.whakaahua?.asset?.metadata?.dimensions
                                                        ?.width
                                                }
                                                height={
                                                    wahines[selectedWahineIndex]?.whakaahua?.asset?.metadata?.dimensions
                                                        ?.height
                                                }
                                                blurhash={
                                                    wahines[selectedWahineIndex]?.whakaahua?.asset?.metadata?.blurHash
                                                }
                                            />
                                        </Mobile>
                                    </Client>
                                </Box>
                                <Box className="player">
                                    <ModalVideo
                                        playerRef={playerRef}
                                        src={wahines[selectedWahineIndex]?.kiriata?.droneFootage?.secure_url}
                                        location={wahines[selectedWahineIndex].kiriata.ingoa}
                                        poster={wahines[selectedWahineIndex].kiriata.poster?.asset?.url}
                                        autoplay={true}
                                        muted={true}
                                        loop={true}
                                    />
                                </Box>
                            </Flex>
                        </Box>
                        <Box flex="1">
                            <Flex flexDir="column">
                                <Heading
                                    position="relative"
                                    top={['0', '0', '0', '-18px', '-18px', '-18px']}
                                    fontSize={['28px', '28px', '28px', '64px', '64px', '64px']}
                                    color="pink.200"
                                    fontWeight="regular"
                                    fontFamily="heading"
                                >
                                    {wahines[selectedWahineIndex].ingoa}
                                </Heading>
                                <Heading
                                    fontSize={['12px', '12px', '12px', '30px', '30px', '30px']}
                                    color="pink.200"
                                    fontWeight="regular"
                                    fontFamily="heading"
                                >
                                    {wahines[selectedWahineIndex].whakapapa}
                                </Heading>
                                <Flex pt="24px" flexDir="column" gap={['12px', '12px', '12px', '24px', '24px', '24px']}>
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
                                        value={wahines[selectedWahineIndex].korero_pukauae}
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
                                        value={wahines[selectedWahineIndex].korero_wahi}
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
                                            {wahines[selectedWahineIndex].tohunga_ta_moko}
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
                                            {wahines[selectedWahineIndex].wahi.ingoa}
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
                            </Flex>
                        </Box>
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
                                {'←'} {getPreviousWahine(selectedWahineIndex)}
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
                                {getNextWahine(selectedWahineIndex)} {'→'}
                            </Button>
                        </Box>
                    </Flex>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
