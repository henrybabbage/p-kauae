import { Flex } from '@chakra-ui/react'
import Image from 'next/image'
import { MotionBox } from '../../Primitives/MotionBox'

export default function SectionBreakIcon() {
    return (
        <Flex position="relative" cursor="auto" justify="center">
            <MotionBox
                // initial={{ scale: 0 }}
                // animate={{ scale: 1 }}
                // transition={{
                //     ease: [0.6, 0.01, -0.05, 0.95],
                //     duration: 1
                //     // delay: 2.8
                // }}
                h={['80px', '80px', '80px', '100px', '100px', '100px']}
                w={['80px', '80px', '80px', '100px', '100px', '100px']}
                borderRadius="100%"
                position="relative"
                display="flex"
                justifyContent="center"
            >
                <MotionBox
                    alignSelf="center"
                    textAlign="center"
                    position="relative"
                    width={['60px', '60px', '60px', '80px', '80px', '80px']}
                    height={['60px', '60px', '60px', '80px', '80px', '80px']}
                    // initial={{ opacity: 0 }}
                    // animate={{ opacity: 1 }}
                    // transition={{
                    //     ease: 'easeInOut',
                    //     duration: 1,
                    //     delay: 1.8
                    // }}
                >
                    <Image
                        src="/icons/pukauae.svg"
                        alt="Pūkauae icon"
                        width="80"
                        height="80"
                        priority
                        sizes="100vw"
                        style={{
                            objectFit: 'contain',
                            objectPosition: 'center'
                        }}
                    />
                </MotionBox>
            </MotionBox>
        </Flex>
    )
}
