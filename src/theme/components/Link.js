import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system'

const baseStyle = defineStyle({
    fontFamily: 'secondary',
    fontWeight: 'normal',
    textDecoration: 'none'
})

const sizes = {
    lg: defineStyle({
        fontSize: 'lg'
    }),
    md: defineStyle({
        fontSize: 'md'
    }),
    sm: defineStyle({
        fontSize: 'sm'
    })
}

const menuVariant = defineStyle({
    // transition: 'textColor 0.5s ease-out',
    _hover: {
        textDecoration: 'none',
        textColor: 'pink',
        transitionDuration: '0.5s',
        transitionTimingFunction: 'ease-out'
    }
})

export const linkTheme = defineStyleConfig({
    baseStyle,
    sizes,
    variants: {
        menu: menuVariant
    }
})
