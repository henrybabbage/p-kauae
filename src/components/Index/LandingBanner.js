import { Heading } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import { MotionBox } from '../Primitives/MotionBox'

const firstFadeAnimation = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 3,
            repeat: Infinity,
            repeatType: 'mirror'
        }
    },
    exit: {
        opacity: 0
    }
}

const lastFadeAnimation = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 3,
            duration: 3,
            repeat: Infinity,
            repeatType: 'mirror'
        }
    },
    exit: {
        opacity: 0
    }
}

const variants = {
    slide: {
        opacity: [0, 1, 0],
        transition: {
            // Total duration:
            duration: 1,
            // Timing of each keyframe
            times: [0, 2, 4],

            // Looping behaviour
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 2
        }
    }
}

const englishLines = ['Celebrating over', '30 years of', 'liberation work', 'throughout', 'Taranaki']
const reoLines = ['Tū tama wāhine', 'i te wā o te kore']

const english = {
    text: englishLines,
    variants: firstFadeAnimation,
    key: 'english'
}
const reo = {
    text: reoLines,
    variants: lastFadeAnimation,
    key: 'reo'
}

const banners = [english, reo]

const AnimatedLines = ({ lines, variants, key }) => {
    return (
        <MotionBox key={key} paddingTop={['0', '0', '0', '12', '12', '12']} initial="initial" animate="animate" exit="exit" variants={variants}>
            {lines.map((line, index) => (
                <Heading
                    key={index}
                    textAlign="center"
                    fontSize={['36px', '36px', '46px', '56px', '94px', '94px']}
                    lineHeight="1.05"
                    color="pink.200"
                    fontFamily="heading"
                >
                    {line}
                </Heading>
            ))}
        </MotionBox>
    )
}

export default function LandingBanner({ tuhinga_timatanga, tuhinga_timatanga_english }) {
    // useEffect(() => {
    //     const sequence1 = async () => {
    //         await bannerControls.start('in')
    //         await bannerControls.start('out')
    //     }
    //     const sequence2 = async () => {
    //         await bannerControls.start('in')
    //         await bannerControls.start('out')
    //     }
    //     const sequenceJoined = async () => {
    //         await sequence1()
    //         await sequence2()
    //     }
    //     sequenceJoined()
    // })

    return (
        <AnimatePresence mode="wait">
            {banners.map((object, i) => (
                <MotionBox key={i} position="absolute" display="flex" justifyContent="center" aligntItems="center" w="100%">
                    <AnimatedLines key={object.key} lines={object.text} variants={object.variants} />
                </MotionBox>
            ))}
        </AnimatePresence>
    )
}
