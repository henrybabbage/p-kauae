import { useEventListener } from '@chakra-ui/react'
import { useMotionValue } from 'framer-motion'
import { useMemo } from 'react'

// Track mouse position as motion values
const useMousePosition = () => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    useEventListener('mousemove', (e) => {
        x.set(e.clientX)
        y.set(e.clientY)
    })

    return useMemo(
        () => ({
            x,
            y
        }),
        [x, y]
    )
}

export default useMousePosition
