import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system'

const baseStyle = defineStyle({
    fontFamily: 'body',
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

const navVariant = defineStyle({
    _hover: {
        textDecoration: 'underline',
        textUnderlinePosition: 'under',
        textUnderlineOffset: '0.5em',
        color: 'pink.200',
        transitionDuration: '0.5s',
        transitionTimingFunction: 'ease-out'
    }
})

const menuVariant = defineStyle({
    _hover: {
        textDecoration: 'none',
        textUnderlinePosition: 'under',
        textUnderlineOffset: '0.2em',
        color: 'pink.200',
        transitionDuration: '0.5s',
        transitionTimingFunction: 'ease-out'
    }
})

export const linkTheme = defineStyleConfig({
    baseStyle,
    sizes,
    variants: {
        menu: menuVariant,
        nac: navVariant
    }
})
