import { defineStyleConfig } from '@chakra-ui/react'

export const headingTheme = defineStyleConfig({
    // Styles for the base style
    baseStyle: {
        fontFamily: 'heading'
    },
    // Styles for the size variations
    sizes: {
        '4xl': {
            fontSize: '96px'
        },
        '3xl': {
            fontSize: '84px'
        },
        '2xl': {
            fontSize: '72px'
        },
        lg: {
            fontSize: '46px'
        },
        md: {
            fontSize: '36px'
        },
        sm: {
            fontSize: '30px'
        },
        xs: {
            fontSize: '24px'
        }
    },
    // Styles for the visual style variations
    variants: {},
    // The default `size` or `variant` values
    defaultProps: {}
})
