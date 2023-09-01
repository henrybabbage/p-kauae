import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay
} from '@chakra-ui/react'

export default function MapErrorDrawer() {
    return (
        <Drawer isOpen={isOpen} onClose={onClose} size="md" placement="top">
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader></DrawerHeader>
                <DrawerBody></DrawerBody>
                <DrawerFooter></DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
