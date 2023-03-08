import { Box, chakra, shouldForwardProp } from '@chakra-ui/react'
import {
    isValidMotionProp,
    motion,
    useScroll,
    useSpring,
    useTransform,
    useWillChange
} from 'framer-motion'
import React, {
    useCallback,
    useEffect,
    useLayoutEffect,
    useRef,
    useState
} from 'react'
import ResizeObserver from 'resize-observer-polyfill'

const ChakraBox = chakra(motion.div, {
    /**
     * Allow motion props and non-Chakra props to be forwarded.
     */
    shouldForwardProp: (prop) =>
        isValidMotionProp(prop) || shouldForwardProp(prop)
})

const SmoothScroll = ({ children }) => {
    if (typeof document === 'undefined') {
        React.useLayoutEffect = React.useEffect
    }

    const willChange = useWillChange()

    // scroll container
    const scrollRef = useRef(null)

    // page scrollable height based on content length
    const [pageHeight, setPageHeight] = useState(0)

    // update scrollable height when browser is resizing
    const resizePageHeight = useCallback((entries) => {
        for (let entry of entries) {
            setPageHeight(entry.contentRect.height)
        }
    }, [])

    // observe when browser is resizing
    useLayoutEffect(() => {
        const resizeObserver = new ResizeObserver((entries) =>
            resizePageHeight(entries)
        )
        scrollRef && resizeObserver.observe(scrollRef.current)
        return () => resizeObserver.disconnect()
    }, [scrollRef, resizePageHeight])

    const { scrollY } = useScroll() // measures how many pixels user has scrolled vertically
    // as scrollY changes between 0px and the scrollable height, create a negative scroll value...
    // ... based on current scroll position to translateY the document in a natural way
    const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight])
    const physics = { damping: 15, mass: 0.27, stiffness: 55 } // easing of smooth scroll
    const spring = useSpring(transform, physics) // apply easing to the negative scroll value

    let variants = {
        hidden: { opacity: 0, x: 0, y: 64 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: 64 }
    }

    useEffect(() => {
        return scrollY.onChange((latest) => {
            variants.exit.y = -scrollY.current - 128
        })
    })

    return (
        <>
            <ChakraBox
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ type: 'linear', duration: 1 }}
                ref={scrollRef}
                style={{ y: spring }} // translateY of scroll container using negative scroll value
                position="fixed"
                top={0}
                left={0}
                width="100%"
                overflow="hidden"
                willChange="transform"
            >
                {children}
            </ChakraBox>
            {/* blank div that has a dynamic height based on the content's inherent height */}
            {/* this is neccessary to allow the scroll container to scroll... */}
            <Box backgroundColor="grey.600" style={{ height: pageHeight }} />
        </>
    )
}

export default SmoothScroll
