import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import { MotionBox } from '../../Primitives/MotionBox'

export default function SectionBreakIcon() {
    return (
        <Flex position="relative" cursor="auto" justify="center">
            <Box
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
                    width={['70px', '70px', '70px', '120px', '120px', '120px']}
                    height={['70px', '70px', '70px', '120px', '120px', '120px']}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        ease: 'easeInOut',
                        duration: 1,
                        delay: 2
                    }}
                >
                    <Image
                        src="/icons/pukauae.svg"
                        alt="Pūkauae icon"
                        width="120"
                        height="120"
                        priority
                        sizes="100vw"
                        style={{
                            objectFit: 'contain',
                            objectPosition: 'center'
                        }}
                    />
                </MotionBox>
            </Box>
        </Flex>
    )
}
