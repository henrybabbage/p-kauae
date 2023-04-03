import { Button, Heading } from '@chakra-ui/react'

export default function MenuIcon({ openDrawer }) {
    return (
        <Button variant="callToAction" onClick={openDrawer} p="2.5">
            <Heading
                as="h2"
                size="md"
                fontWeight="bold"
                fontFamily="subheading"
                textColor="white"
                position="fixed"
            >
                Menu
            </Heading>
        </Button>
    )
}
