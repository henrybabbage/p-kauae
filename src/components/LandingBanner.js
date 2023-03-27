import { Box, Heading } from '@chakra-ui/react'
import { MotionBox } from './MotionBox'
import ScrollPrompt from './ScrollPrompt'

const textAnimation = {
    hidden: {
        opacity: 0
    },
    visible: {
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
