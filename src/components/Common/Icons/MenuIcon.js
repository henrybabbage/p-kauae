import { Button, Flex, Heading } from '@chakra-ui/react'

export default function MenuIcon({ openDrawer }) {
    return (
        <Button variant="menu" onClick={openDrawer} zIndex="100">
            <Flex direction="column" alignItems="center">
                <Heading
                    as="h2"
                    fontSize={['24px', '24px', '24px', '32px', '32px', '32px']}
                    lineHeight="1.36"
                    fontFamily={['body', 'body', 'body', 'subheading', 'subheading', 'subheading']}
                    fontWeight="normal"
                    textColor="white"
                    position="fixed"
                >
                    Menu
                </Heading>
            </Flex>
        </Button>
    )
}
