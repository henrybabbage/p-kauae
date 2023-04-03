import { Button, Flex, Heading } from '@chakra-ui/react'

export default function MenuIcon({ openDrawer }) {
    return (
        <Button variant="menu" onClick={openDrawer}>
            <Flex direction="column" alignItems="center">
                <Heading
                    as="h2"
                    size={['xs', 'xs', 'xs', 'md', 'md', 'md']}
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
