import {
    Button,
    Flex,
    Heading,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from '@chakra-ui/react'

const WahineModal = ({ onOpen, onClose, isOpen }) => {
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
                        <ModalHeader p={0} color={'white'} fontWeight="regular">
                            Wahine Name
                        </ModalHeader>
                        <ModalBody></ModalBody>

                        <ModalFooter></ModalFooter>
                    </Flex>
                </ModalContent>
            </Modal>
        </>
    )
}

export default WahineModal
