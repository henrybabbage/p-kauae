import { useRef } from 'react'
import { MotionBox } from './MotionBox'

const PageTransition = ({ children }) => {
    const containerRef = useRef(null)

    // page transition animation
    const variants = {
        initial: { opacity: 0, x: 0, y: -30 },
        animate: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 40 }
    }

    return (
        <MotionBox
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{ type: 'ease-in-out', duration: 0.5 }}
            ref={containerRef}
            width="100%"
            overflow="hidden"
        >
            {children}
        </MotionBox>
    )
}

export default PageTransition
