import { modalAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
    // define the part you're going to style
    overlay: {
        bg: 'blackAlpha.200' // change the background
    },
    dialog: {
        fontFamily: 'var(--chakra-fonts-primary)',
        borderRadius: '4px',
        bg: `grey`
    }
})

export const modalTheme = defineMultiStyleConfig({
    baseStyle
})
