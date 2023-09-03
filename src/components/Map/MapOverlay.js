import {
    Button,
    Flex,
    Heading,
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Text
} from '@chakra-ui/react'
import Stepper from './Stepper'

export default function MapOverlay({ haerenga, onClose, onOpen, isOpen }) {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            onOpen={onOpen}
            size="full"
            motionPreset="slideInBottom"
            overflow="hidden"
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
            <ModalContent m={0} p={0} overflow="hidden" bg="rgba(0,0,0,0.8)" maxW="100vw" maxH="100vh">
                <ModalHeader h="fit-content">
                    <Flex justifyContent="space-between" alignContent="start" p={['2', '2', '2', '2', '2', '2']}>
                        <Heading
                            as="h1"
                            fontSize={['16px', '16px', '16px', '20px', '20px', '20px']}
                            color="white"
                            fontWeight="regular"
                            fontFamily="subheading"
                        >
                            {'Nau mai ki Pūkauae'}
                        </Heading>
                        <Button variant="callToAction" onClick={onClose} zIndex="100">
                            <Text fontSize={['16px', '16px', '16px', '20px', '20px', '20px']}>{'(Close)'}</Text>
                        </Button>
                    </Flex>
                </ModalHeader>
                <ModalBody
                    p={0}
                    m={0}
                    maxW="100%"
                    maxH="100%"
                    position="absolute"
                    overflow="hidden"
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
                    <Stepper haerenga={haerenga} onClose={onClose} />
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
