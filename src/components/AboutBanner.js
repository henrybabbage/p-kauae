import {
    Box,
    Flex,
    Heading,
    Text,
    chakra,
    shouldForwardProp
} from '@chakra-ui/react'
import { isValidMotionProp, motion } from 'framer-motion'
import { MotionBox } from './MotionBox'
import { MotionSpan } from './MotionSpan'

const banner = {
    animate: {
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.2
        }
    }
}

const linesAni = {
    initial: { y: 400 },
    animate: {
        y: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 0.7
        }
    }
}

const letterAni = {
    initial: { y: 400 },
    animate: {
        y: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1
        }
    }
}

export default function AboutBanner() {
    return (
        <Box>
            <MotionBox
                zIndex={100}
                position="relative"
                initial="initial"
                animate="animate"
                variants={banner}
            >
                <BannerRowTop text={'Celebrating over 30 years'} />
                <BannerRowCenter text={'of liberation work'} />
                <BannerRowBottom text={'throughout Taranaki.'} />
            </MotionBox>
            <MotionBox position="absolute" bottom="100" right="100">
                <ScrollPrompt />
            </MotionBox>
        </Box>
    )
}

const AnimatedLetters = ({ text }) => (
    <MotionSpan
        position="relative"
        variants={banner}
        initial="initial"
        animate="animate"
    >
        <Heading
            fontSize="84px"
            letterSpacing="-0.8rem"
            lineHeight="0.8"
            color="pink.200"
            textStyle="heading"
        >
            {[...text].map((letter, index) => (
                <MotionSpan
                    key={index}
                    position="relative"
                    display="inline-block"
                    whiteSpace="nowrap"
                    textAlign="center"
                    left="0"
                    margin="2"
                    variants={letterAni}
                >
                    {letter}
                </MotionSpan>
            ))}
        </Heading>
    </MotionSpan>
)

const AnimatedLine = ({ text }) => (
    <MotionSpan
        position="relative"
        variants={banner}
        initial="initial"
        animate="animate"
    >
        <Heading
            fontSize="94px"
            lineHeight="1"
            color="pink.200"
            textStyle="heading"
        >
            <MotionSpan
                position="relative"
                display="inline-block"
                whiteSpace="nowrap"
                textAlign="center"
                variants={linesAni}
            >
                {text}
            </MotionSpan>
        </Heading>
    </MotionSpan>
)

const BannerRowTop = ({ text }) => {
    return (
        <Flex
            overflow="hidden"
            justifyContent="center"
            alignItems="center"
            w="100%"
        >
            <MotionBox
                initial={{ y: 300 }}
                animate={{ y: 0 }}
                transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 0.3 }}
            >
                <AnimatedLine text={text} />
            </MotionBox>
        </Flex>
    )
}

const BannerRowCenter = ({ text }) => {
    return (
        <Flex
            overflow="hidden"
            justifyContent="center"
            alignItems="center"
            w="100%"
        >
            <MotionBox
                initial={{ y: 300 }}
                animate={{ y: 0 }}
                transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 0.3 }}
            >
                <AnimatedLine text={text} />
            </MotionBox>
        </Flex>
    )
}

const BannerRowBottom = ({ text }) => {
    return (
        <Flex
            overflow="hidden"
            justifyContent="center"
            alignItems="center"
            w="100%"
        >
            <MotionBox
                initial={{ y: 300 }}
                animate={{ y: 0 }}
                transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 0.3 }}
            >
                <AnimatedLine text={text} />
            </MotionBox>
        </Flex>
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
