import { MotionBox } from '@/components/Primitives/MotionBox'
import { Heading } from '@chakra-ui/react'
import { useState } from 'react'

export default function HoverableHeading({ hoverContent, defaultContent, ...props }) {
    const [isHovered, setIsHovered] = useState(false)

    const handleHover = () => {
        setIsHovered(true)
    }

    const handleUnhover = () => {
        setIsHovered(false)
    }
    return (
        <>
            <MotionBox
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{
                    type: 'crossfade',
                    duration: 0.2
                }}
                position="absolute"
            >
                <Heading
                    {...props}
                    as="h2"
                    fontSize={['16px', '16px', '16px', '20px', '20px', '20px']}
                    lineHeight="1.36"
                    fontWeight="bold"
                    fontFamily="subheading"
                    width="140px"
                    zIndex="500"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleUnhover}
                >
                    {hoverContent}
                </Heading>
            </MotionBox>
            <MotionBox
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 0 : 1 }}
                transition={{
                    type: 'crossfade',
                    duration: 0.2
                }}
                position="relative"
            >
                <Heading
                    {...props}
                    as="h2"
                    fontSize={['16px', '16px', '16px', '20px', '20px', '20px']}
                    lineHeight="1.36"
                    fontWeight="bold"
                    fontFamily="subheading"
                    width="140px"
                    zIndex="500"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleUnhover}
                >
                    {defaultContent}
                </Heading>
            </MotionBox>
        </>
    )
}
