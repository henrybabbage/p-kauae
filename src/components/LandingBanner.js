import { Heading } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { MotionBox } from './MotionBox'

const fadeAnimation = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 2.5,
            repeat: Infinity,
            repeatType: 'reverse'
        }
    },
    exit: {
        opacity: 0
    }
}

const englishLines = [
    'Celebrating over',
    '30 years of',
    'liberation work',
    'throughout',
    'Taranaki'
]

const reoLines = ['Tū tama wāhine', 'i te wā o te kore']

const AnimatedLines = ({ lines }) => {
    return (
        <MotionBox
            paddingTop={['0', '0', '0', '12', '12', '12']}
            key="animated-lines"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={fadeAnimation}
        >
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

export default function LandingBanner({
    tuhinga_timatanga,
    tuhinga_timatanga_english
}) {
    const [showEnglish, setShowEnglish] = useState(true)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setShowEnglish((prev) => !prev)
        }, 5000)

        return () => clearInterval(intervalId)
    }, [])

    return showEnglish ? (
        <AnimatedLines lines={englishLines} />
    ) : (
        <AnimatedLines lines={reoLines} />
    )
}
