import {
    Button,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay
} from '@chakra-ui/react'

export default function MobileMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button variant="menu" onClick={onOpen}>
                Open
            </Button>
            <Drawer
                placement="right"
                size="full"
                onClose={onClose}
                isOpen={isOpen}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth="4px">
                        Basic Drawer
                    </DrawerHeader>
                    <DrawerBody>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}
