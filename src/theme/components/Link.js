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
    // transition: 'color 0.5s ease-out',
    _hover: {
        textDecoration: 'none',
        textColor: 'pink',
        transform: 'color',
        transitionDuration: '0.2s',
        transitionTimingFunction: 'ease-in-out'
    }
})

export const linkTheme = defineStyleConfig({
    baseStyle,
    sizes,
    variants: {
        menu: menuVariant
    }
})
