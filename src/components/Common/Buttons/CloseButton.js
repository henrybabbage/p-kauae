import { Box } from '@chakra-ui/react'
import { useState } from 'react'
import { IconContext } from 'react-icons'
import { TfiClose as Close } from 'react-icons/tfi'

export default function CloseButton() {
    const hoverColor = '#C3918F'
    const defaultColor = '#ffffff'

    const [isHovering, setIsHovering] = useState(false)

    const handleMouseEnter = () => {
        setIsHovering(true)
    }

    const handleMouseLeave = () => {
        setIsHovering(false)
    }

    const style = `${isHovering ? hoverColor : defaultColor}`

    return (
        <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <IconContext.Provider value={{ color: style }}>
                <Close size="20px" />
            </IconContext.Provider>
        </Box>
    )
}
