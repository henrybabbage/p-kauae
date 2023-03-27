import { Box } from '@chakra-ui/react'
import BackgroundImage from './BackgroundImage'
import { MotionBox } from './MotionBox'

export default function ParallaxImage() {
    return (
        <Box>
            <MotionBox position="absolute">
                <BackgroundImage
                    src={'/images/background.jpeg'}
                    alt={'Taranaki landscape'}
                />
            </MotionBox>
        </Box>
    )
}
