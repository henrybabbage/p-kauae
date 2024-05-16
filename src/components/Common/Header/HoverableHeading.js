import { MotionSpan } from '@/components/Primitives/MotionSpan'
import { Box, Heading } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function HoverableHeading({ hoverContent, defaultContent, ...props }) {
    const [buttonState, setButtonState] = useState('default')

    const handleMouseEnter = () => {
        setButtonState('hovered')
    }

    const handleMouseLeave = () => {
        setButtonState('default')
    }

    const buttonCopy = {
        default: defaultContent,
        hovered: hoverContent
    }

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            zIndex="500"
            width="200px"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Heading
                {...props}
                as="h2"
                fontSize={['24px', '24px', '24px', '20px', '20px', '20px']}
                lineHeight="1.36"
                fontFamily="subheading"
                fontWeight="normal"
                w="100%"
            >
                <AnimatePresence mode="wait" initial={false}>
                    <MotionSpan
                        transition={{ type: 'linear', duration: 0.2 }}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        key={buttonState}
                        w="100%"
                    >
                        {buttonCopy[buttonState]}
                    </MotionSpan>
                </AnimatePresence>
            </Heading>
        </Box>
    )
}
