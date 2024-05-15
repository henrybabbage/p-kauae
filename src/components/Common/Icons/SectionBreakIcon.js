import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import { MotionBox } from '../../Primitives/MotionBox'

export default function SectionBreakIcon() {
    return (
        <Flex justifyContent="center" alignItems="center" w="100%" userSelect="none" pointerEvents="none">
            <Box
                h={['80px', '80px', '80px', '100px', '100px', '100px']}
                w={['80px', '80px', '80px', '100px', '100px', '100px']}
                borderRadius="100%"
                position="relative"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <MotionBox
                    position="relative"
                    width={['70px', '70px', '50px', '120px', '120px', '120px']}
                    height={['70px', '70px', '50px', '120px', '120px', '120px']}
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
                            objectPosition: 'center',
                            userSelect: 'none',
                            pointerEvents: 'none'
                        }}
                    />
                </MotionBox>
            </Box>
        </Flex>
    )
}
