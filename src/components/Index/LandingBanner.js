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
            paddingTop={['12', '12', '24', '12', '12', '12']}
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
                {/* <Balancer>
                    <Heading
                        textAlign="center"
                        fontSize={['36px', '36px', '46px', '56px', '94px', '94px']}
                        lineHeight="1.05"
                        textColor="pink.200"
                        fontFamily="heading"
                    >
                        {tuhinga_timatanga}
                    </Heading>
                </Balancer> */}
                {englishLines.map((line, index) => (
                    <Heading
                        key={index}
                        textAlign="center"
                        fontSize={['32px', '32px', '32px', '56px', '94px', '94px']}
                        lineHeight={['1.2', '1.2', '1.2', '1', '1', '1']}
                        letterSpacing="0.016em"
                        textColor="pink.200"
                        fontFamily={['hero', 'hero', 'hero', 'hero', 'hero', 'hero']}
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
                {/* <Balancer>
                    <Heading
                        textAlign="center"
                        fontSize={['32px', '36px', '46px', '56px', '94px', '94px']}
                        lineHeight="1.05"
                        textColor="pink.200"
                        fontFamily="heading"
                    >
                        {tuhinga_timatanga_english}
                    </Heading>
                </Balancer> */}
                {reoLines.map((line, index) => (
                    <Heading
                        key={index}
                        textAlign="center"
                        fontSize={['36px', '36px', '32px', '56px', '94px', '94px']}
                        lineHeight={['1.2', '1.2', '1.2', '1', '1', '1']}
                        letterSpacing="0.016em"
                        textColor="pink.200"
                        fontFamily={['hero', 'hero', 'hero', 'hero', 'hero', 'hero']}
                    >
                        {line}
                    </Heading>
                ))}
            </MotionBox>
        </Flex>
    )
}
