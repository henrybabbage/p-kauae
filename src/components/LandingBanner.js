import { Box, Heading, Text } from '@chakra-ui/react'
import { MotionBox } from './MotionBox'

const textAnimation = {
    hidden: {
        y: 5,
        opacity: 0
    },
    visible: {
        y: 1,
        opacity: 1
    }
}

export default function LandingBanner() {
    const lines = [
        'Celebrating over',
        '30 years of',
        'liberation work',
        'throughout',
        'Taranaki'
    ]

    return (
        <Box>
            <MotionBox
                initial="hidden"
                animate="visible"
                variants={{
                    visible: {
                        transition: {
                            ease: [0.6, 0.01, -0.05, 0.95],
                            duration: 0.7,
                            delayChildren: 0.4,
                            staggerChildren: 0.1
                        }
                    }
                }}
            >
                {lines.map((line, index) => (
                    <MotionBox key={index} variants={textAnimation}>
                        <Heading
                            textAlign="center"
                            fontSize="94px"
                            lineHeight="1"
                            color="pink.200"
                            textStyle="heading"
                        >
                            {line}
                        </Heading>
                    </MotionBox>
                ))}
            </MotionBox>
            <MotionBox position="absolute" bottom="100" right="100">
                <ScrollPrompt />
            </MotionBox>
        </Box>
    )
}

const ScrollPrompt = () => {
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
