import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const baseStyle = defineStyle({
    filledTrack: {
        bg: 'pink.200'
    },
    background: 'transparent'
})

export const progressTheme = defineStyleConfig({
    baseStyle
})
