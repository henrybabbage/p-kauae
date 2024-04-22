import { Mobile, TabletAndAbove } from '@/utils/breakpoints'
import {
    Box,
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    HStack,
    Heading,
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

    return (
        <Drawer
            onClose={onClose}
            isOpen={isOpen}
            onOpen={onOpen}
            placement="bottom"
            size="full"
            sx={{
                '-webkit-scrollbar': {
                    display: 'none'
                },
                '::-ms-overflow-style': {
                    display: 'none'
                },
                scrollbarWidth: 'none'
            }}
            minH="100vh"
        >
            <DrawerOverlay />
            <DrawerContent w="auto" maxW="100vw" p={[4, 4, 4, 6, 6, 6]} bg="grey.900" h="100%" overflow="hidden">
                <DrawerHeader pt={0} px={0} pb={2} bg="grey.900">
                    <Flex justifyContent="space-between" alignContent="start" h="max-content" bg="grey.900">
                        <Heading
                            as="h1"
                            textColor="white"
                            fontWeight="regular"
                            fontSize={['14px', '14px', '14px', '20px', '20px', '20px']}
                            fontFamily={['body', 'body', 'body', 'subheading', 'subheading', 'subheading']}
                        >
                            Tū Tama Wāhine o Taranaki
                        </Heading>
                        <Button variant="menu" onClick={onClose}>
                            <Text
                                textColor="white"
                                _hover={{
                                    color: 'pink.200'
                                }}
                                fontWeight="regular"
                                fontSize={['14px', '14px', '14px', '20px', '20px', '20px']}
                                fontFamily={['body', 'body', 'body', 'subheading', 'subheading', 'subheading']}
                            >
                                {'Back to map ↗'}
                            </Text>
                        </Button>
                    </Flex>
                </DrawerHeader>
                <DrawerBody
                    width="auto"
                    maxW="100vw"
                    pt={0}
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
                                    src={selectedWahine?.kiriata?.droneFootage?.secure_url}
                                    location={selectedWahine?.kiriata?.ingoa}
                                    poster={selectedWahine?.kiriata.poster?.asset?.url ?? ''}
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
                                        fontSize={['14px', '14px', '14px', '16px', '16px', '16px']}
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
                                        pt={[2, 2, 2, 0, 0, 0]}
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
                                                    sizes="100vw"
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
                                                    sizes="100vw"
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
                                                fontSize: ['14px', '14px', '14px', '20px', '20px', '20px'],
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
                                                fontSize: ['14px', '14px', '14px', '20px', '20px', '20px'],
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
                                                fontSize={['14px', '14px', '14px', '20px', '20px', '20px']}
                                                lineHeight="1.36"
                                                color="pink.200"
                                            >
                                                Tohunga ta moko:{' '}
                                            </Text>
                                            <Text
                                                fontSize={['14px', '14px', '14px', '20px', '20px', '20px']}
                                                lineHeight="1.36"
                                                color="white"
                                            >
                                                {selectedWahine.tohunga_ta_moko}
                                            </Text>
                                        </HStack>
                                        <HStack>
                                            <Text
                                                fontSize={['14px', '14px', '14px', '20px', '20px', '20px']}
                                                lineHeight="1.36"
                                                color="pink.200"
                                            >
                                                Photograph location:{' '}
                                            </Text>
                                            <Text
                                                fontSize={['14px', '14px', '14px', '20px', '20px', '20px']}
                                                lineHeight="1.36"
                                                color="white"
                                            >
                                                {selectedWahine.wahi.ingoa}
                                            </Text>
                                        </HStack>
                                        <HStack>
                                            <Text
                                                fontSize={['14px', '14px', '14px', '20px', '20px', '20px']}
                                                lineHeight="1.36"
                                                color="pink.200"
                                            >
                                                Capture date:{' '}
                                            </Text>
                                            <Text
                                                fontSize={['14px', '14px', '14px', '20px', '20px', '20px']}
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
                </DrawerBody>
                <DrawerFooter px={0} pb={0} pt={1} mt="auto" mx={0}>
                    <Flex justifyContent="space-between" maxW="100vw" w="100vw" px={0} mx={0}>
                        <Box position="relative" p={0} m={0}>
                            <Button
                                variant={'menu'}
                                size={['xs', 'xs', 'xs', 'xl', 'xl', 'xl']}
                                onClick={() => {
                                    onClose()
                                    handlePrevClick(selectedWahineIndex)
                                }}
                            >
                                <Text
                                    px={0}
                                    mx={0}
                                    textColor="white"
                                    _hover={{
                                        color: 'pink.200'
                                    }}
                                    fontWeight="regular"
                                    fontSize={['12px', '12px', '12px', '20px', '20px', '20px']}
                                    fontFamily={['body', 'body', 'body', 'subheading', 'subheading', 'subheading']}
                                >
                                    {'←'} {getPreviousWahine()}
                                </Text>
                            </Button>
                        </Box>
                        <Box position="relative" p={0} m={0}>
                            <Button
                                px={0}
                                mx={0}
                                variant={'menu'}
                                size={['xs', 'xs', 'xs', 'xl', 'xl', 'xl']}
                                onClick={() => {
                                    onClose()
                                    handleNextClick(selectedWahineIndex)
                                }}
                            >
                                <Text
                                    px={0}
                                    mx={0}
                                    textColor="white"
                                    _hover={{
                                        color: 'pink.200'
                                    }}
                                    fontWeight="regular"
                                    fontSize={['12px', '12px', '12px', '20px', '20px', '20px']}
                                    fontFamily={['body', 'body', 'body', 'subheading', 'subheading', 'subheading']}
                                >
                                    {getNextWahine()} {'→'}
                                </Text>
                            </Button>
                        </Box>
                    </Flex>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
