import { Box } from '@chakra-ui/react'
import { ChakraBox } from './ChakraBox'

const banner = {
    animate: {
        transition: {
            delayChildren: 0.4,
            staggerChildren: 0.1
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

export default function AnimatedText() {
    return (
        <Box>
            <ChakraBox className="banner" variants={banner}>
                <BannerRowTop title={'Celebrating over 30 years'} />
                <BannerRowCenter title={'of liberation work'} />
                <BannerRowBottom title={'throughout Taranaki.'} />
            </ChakraBox>
        </Box>
    )
}

const AnimatedLetters = ({ title, disabled }) => (
    <ChakraBox
        as="span"
        className="row-title"
        variants={disabled ? null : banner}
        initial="initial"
        animate="animate"
    >
        {[...title].map((letter, index) => (
            <ChakraBox
                key={index}
                as="span"
                className="row-letter"
                variants={disabled ? null : letterAni}
            >
                {letter}
            </ChakraBox>
        ))}
    </ChakraBox>
)

const BannerRowTop = ({ title }) => {
    return (
        <Box className={'banner-row'}>
            <Box className="row-col">
                <AnimatedLetters title={title} />
            </Box>
            <ChakraBox
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    ease: 'easeInOut',
                    duration: 1,
                    delay: 0.4
                }}
                className="row-col"
            >
                <span className="row-message">Nau mai ki Pūkauae</span>
            </ChakraBox>
        </Box>
    )
}

const BannerRowBottom = ({ title }) => {
    return (
        <Box className={'banner-row center'}>
            <ChakraBox
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    ease: [0.6, 0.01, -0.05, 0.95],
                    duration: 1,
                    delay: 1
                }}
                className="scroll"
            >
                <ChakraBox
                    as="span"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 1,
                        delay: 1.8
                    }}
                >
                    scroll
                </ChakraBox>
                <ChakraBox
                    as="span"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 1,
                        delay: 1.8
                    }}
                >
                    down
                </ChakraBox>
            </ChakraBox>
            <AnimatedLetters title={title} />
        </Box>
    )
}

const BannerRowCenter = ({ title }) => {
    return (
        <Box className={'banner-row'}>
            <ChakraBox
                initial={{ y: 310 }}
                animate={{ y: 0 }}
                transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
                className="marquee__inner"
            >
                <AnimatedLetters title={title} />
                <AnimatedLetters title={title} />
                <AnimatedLetters title={title} />
            </ChakraBox>
        </Box>
    )
}
