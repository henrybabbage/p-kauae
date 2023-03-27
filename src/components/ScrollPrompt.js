import { Box, Text } from '@chakra-ui/react'
import { MotionBox } from './MotionBox'

export default function ScrollPrompt() {
    return (
        <Box pb="4" pr="16" cursor="auto">
            <MotionBox
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    ease: [0.6, 0.01, -0.05, 0.95],
                    duration: 1,
                    delay: 1.8
                }}
                className="scroll"
                h="100px"
                w="100px"
                backgroundColor="white"
                borderRadius="100%"
                position="absolute"
                display="flex"
                justifyContent="center"
            >
                <MotionBox
                    alignSelf="center"
                    textAlign="center"
                    position="relative"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 1,
                        delay: 1.8
                    }}
                >
                    <Text
                        color="grey.900"
                        textStyle="body"
                        textTransform="uppercase"
                    >
                        Scroll
                    </Text>
                    <Text
                        color="grey.900"
                        textStyle="body"
                        textTransform="uppercase"
                    >
                        Down
                    </Text>
                </MotionBox>
            </MotionBox>
        </Box>
    )
}
