import { Button, Flex, Heading } from '@chakra-ui/react'

export default function MenuIcon({ openDrawer }) {
    return (
        <Button variant="menu" onClick={openDrawer} zIndex="1000">
            <Flex direction="column" alignItems="center">
                <Heading
                    as="h2"
                    fontSize={['14px', '14px', '14px', '20px', '20px', '20px']}
                    lineHeight="1.36"
                    fontWeight="bold"
                    fontFamily="subheading"
                    textColor="white"
                    position="fixed"
                >
                    Menu
                </Heading>
            </Flex>
        </Button>
    )
}
