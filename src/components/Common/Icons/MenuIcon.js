import { Button, Flex, Heading } from '@chakra-ui/react'

export default function MenuIcon({ openDrawer }) {
    return (
        <Button variant="menu" onClick={openDrawer} zIndex="100">
            <Flex direction="column" alignItems="center">
                <Heading
                    as="h2"
                    fontSize={['18px', '18px', '18px', '20px', '20px', '20px']}
                    lineHeight="1.36"
                    fontFamily={['body', 'body', 'body', 'subheading', 'subheading', 'subheading']}
                    textColor="white"
                    position="fixed"
                >
                    Menu
                </Heading>
            </Flex>
        </Button>
    )
}
