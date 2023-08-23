import { Box } from '@chakra-ui/react'
import { MotionBox } from '../../Primitives/MotionBox'
import BackgroundImage from './BackgroundImage'

export default function ParallaxImage() {
    return (
        <Box>
            <MotionBox position="absolute">
                <BackgroundImage src={'/images/background.jpeg'} alt={'Taranaki landscape'} />
            </MotionBox>
        </Box>
    )
}
