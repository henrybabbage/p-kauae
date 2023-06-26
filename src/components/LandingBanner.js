import { Heading } from '@chakra-ui/react'
import { MotionBox } from './MotionBox'

const textAnimation = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
}

export default function LandingBanner({
    tuhinga_timatanga,
    tuhinga_timatanga_english
}) {
    const englishLines = [
        'Celebrating over',
        '30 years of',
        'liberation work',
        'throughout',
        'Taranaki'
    ]

    const reoLines = ['Tū tama wāhine', 'i te wā o te kore']

    return (
        <>
            <MotionBox
                initial="hidden"
                animate="visible"
                variants={{
                    visible: {
                        transition: {
                            ease: [0.6, 0.01, -0.05, 0.95],
                            duration: 1,
                            delayChildren: 0.4,
                            staggerChildren: 0.4
                        }
                    }
                }}
            >
                {englishLines.map((line, index) => (
                    <MotionBox key={index} variants={textAnimation}>
                        <Heading
                            textAlign="center"
                            fontSize={['36px', '46px', '56', '94px']}
                            lineHeight="1.05"
                            color="pink.200"
                            fontFamily="heading"
                        >
                            {line}
                        </Heading>
                    </MotionBox>
                ))}
            </MotionBox>
        </>
    )
}
