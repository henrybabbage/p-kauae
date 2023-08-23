import { Flex, Heading } from '@chakra-ui/react'
import { MotionBox } from '../Primitives/MotionBox'

const englishLines = ['Celebrating over', '30 years of', 'liberation work', 'throughout', 'Taranaki']
const reoLines = ['Tū tama wāhine', 'i te wā o te kore']

export default function LandingBanner({ tuhinga_timatanga, tuhinga_timatanga_english }) {
    return (
        <Flex
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            w="100%"
            paddingTop={['0', '0', '0', '12', '12', '12']}
        >
            <MotionBox
                position="absolute"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0, 1, 1, 1, 0]
                }}
                transition={{
                    delay: 1,
                    duration: 9,
                    ease: 'easeInOut',
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatType: 'loop',
                    repeatDelay: 9
                }}
            >
                {englishLines.map((line, index) => (
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
            <MotionBox
                position="absolute"
                initial={{ opacity: 0 }}
                animate={{
                    opacity: [0, 1, 1, 1, 0]
                }}
                transition={{
                    delay: 10,
                    duration: 9,
                    ease: 'easeInOut',
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                    repeatType: 'loop',
                    repeatDelay: 9
                }}
            >
                {reoLines.map((line, index) => (
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
        </Flex>
    )
}
