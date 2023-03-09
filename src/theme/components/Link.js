import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system'

const baseStyle = defineStyle({
    fontFamily: 'secondary',
    textColor: 'black',
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
    fontFamily: 'secondary',
    color: 'black',
    transition: 'transform 0.15s ease-out',
    _hover: {
        textDecoration: 'none',
        color: 'pink'
    }
})

export const linkTheme = defineStyleConfig({
    baseStyle,
    sizes,
    variants: {
        menu: menuVariant
    }
})
