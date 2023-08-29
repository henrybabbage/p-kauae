import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const baseStyle = defineStyle({
    filledTrack: {
        bg: '#FFD233'
    },
    background: 'transparent'
})

export const progressTheme = defineStyleConfig({
    baseStyle
})
