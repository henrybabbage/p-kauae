import {
    Box,
    Flex,
    Heading,
    Text,
    chakra,
    shouldForwardProp
} from '@chakra-ui/react'
import { AnimatePresence, isValidMotionProp, motion } from 'framer-motion'
import { ChakraBox } from './ChakraBox'

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

const MotionSpan = chakra(motion.span, {
    /**
     * Allow motion props and non-Chakra props to be forwarded.
     */
    shouldForwardProp: (prop) =>
        isValidMotionProp(prop) || shouldForwardProp(prop)
})

export default function AboutBanner() {
    return (
        <Box>
            <ChakraBox
                zIndex={100}
                position="relative"
                initial="initial"
                animate="animate"
                variants={banner}
            >
                <BannerRowTop text={'Celebrating over 30 years'} />
                <BannerRowCenter text={'of liberation work'} />
                <BannerRowBottom text={'throughout Taranaki.'} />
            </ChakraBox>
            <ChakraBox position="absolute" bottom="100" right="100">
                <ScrollPrompt />
            </ChakraBox>
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
            <ChakraBox
                initial={{ y: 300 }}
                animate={{ y: 0 }}
                transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 0.3 }}
            >
                <AnimatedLine text={text} />
            </ChakraBox>
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
            <ChakraBox
                initial={{ y: 300 }}
                animate={{ y: 0 }}
                transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 0.3 }}
            >
                <AnimatedLine text={text} />
            </ChakraBox>
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
            <ChakraBox
                initial={{ y: 300 }}
                animate={{ y: 0 }}
                transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 0.3 }}
            >
                <AnimatedLine text={text} />
            </ChakraBox>
        </Flex>
    )
}

const ScrollPrompt = () => {
    return (
        <Box pb="4" pr="16">
            <ChakraBox
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
                <ChakraBox
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
                        color="grey.800"
                        textStyle="body"
                        textTransform="uppercase"
                    >
                        Scroll
                    </Text>
                    <Text
                        color="grey.800"
                        textStyle="body"
                        textTransform="uppercase"
                    >
                        Down
                    </Text>
                </ChakraBox>
            </ChakraBox>
        </Box>
    )
}
