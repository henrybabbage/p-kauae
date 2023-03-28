import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

// define which sizes, variants, and color schemes are applied by default
const baseStyle = defineStyle({
    fontFamily: 'body',
    fontWeight: 'normal',
    textDecoration: 'none'
})

// define custom sizes
const sizes = {
    sm: defineStyle({
        fontSize: 'sm',
        py: '1',
        px: '2',
        maxW: '200px'
    }),
    md: defineStyle({
        fontSize: 'md',
        py: '2',
        px: '3',
        maxW: '300px'
    }),
    lg: defineStyle({
        fontSize: 'lg',
        py: '2',
        px: '4',
        maxW: '350px'
    })
}

// define styles for custom variant
const playButtonVariant = defineStyle({
    fontWeight: 'regular',
    fontSize: 'xs',
    fontFamily: 'heading',
    color: 'black',
    backgroundColor: 'white',
    textTransform: 'uppercase'
})

// export the component theme
export const tooltipTheme = defineStyleConfig({
    baseStyle,
    sizes,
    variants: {
        video: playButtonVariant
    }
})
