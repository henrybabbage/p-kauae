import { Box } from '@chakra-ui/react'
import { useSpring } from 'framer-motion'
import range from 'lodash.range'
import { useMemo } from 'react'
import { MotionBox } from './animation'
import useMousePosition from './useMousePosition'

const spotlight = ({ intensity, height }) => {
    const calcIlluminationOnPlane = ({ radius }) => {
        const distance = Math.sqrt(height ** 2 + radius ** 2)
        return intensity / distance ** 2
    }

    return {
        calcIlluminationOnPlane
    }
}

const Spotlight = ({ height = 180, intensity = 6.5 }) => {
    height = height / 1000
    intensity = intensity / 1000
    const position = useMousePosition()
    const springs = {
        x: useSpring(position.x, { mass: 0.25 }),
        y: useSpring(position.y, { mass: 0.25 })
    }

    const gradient = useMemo(() => {
        const light = spotlight({ intensity, height })
        const indexes = range(0, 1, 0.05)
        const stops = indexes.map((stop) => {
            return `rgba(255,255,255,${light.calcIlluminationOnPlane({
                radius: stop
            })}) ${(stop * 100) / 2 + '%'}`
        })
        return `radial(${stops.join(',')})`
    }, [height, intensity])

    return (
        <MotionBox pos="fixed" w="4000px" h="4000px" style={{ x: springs.x, y: springs.y }} pointerEvents="none">
            <Box w="100%" h="100%" transform="translate(-50%, -50%)" bgGradient={gradient} />
        </MotionBox>
    )
}

export default Spotlight
