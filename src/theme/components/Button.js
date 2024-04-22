import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const callToAction = defineStyle({
    border: 'none',
    borderRadius: 0,
    padding: 0,
    paddingInlineEnd: '0 !important',
    paddingInlineStart: '0 !important',
    wordWrap: 'break-word',
    margin: 0,
    iconSpacing: 0,
    height: 'inherit',
    width: 'inherit',
    fontWeight: 'regular',
    fontFamily: 'subheading',
    color: 'white',
    transition: 'transform 0.15s ease-out',
    _hover: {
        textDecoration: 'none',
        textColor: 'pink',
        transitionDuration: '0.5s',
        transitionTimingFunction: 'ease-out'
    },
    _focus: {
        boxShadow: 'none'
    }
})

const mapLabel = defineStyle({
    border: 'none',
    borderRadius: 0,
    padding: 0,
    margin: 0,
    iconSpacing: 0,
    height: 'inherit',
    width: 'inherit',
    fontWeight: 'regular',
    fontFamily: 'body',
    color: 'white',
    transition: 'transform 0.15s ease-out',
    _hover: {
        textDecoration: 'none',
        textColor: 'pink',
        transitionDuration: '0.5s',
        transitionTimingFunction: 'ease-out'
    },
    _focus: {
        boxShadow: 'none'
    }
})

const prompt = defineStyle({
    border: 'none',
    borderRadius: 0,
    padding: 0,
    margin: 0,
    iconSpacing: 0,
    height: 'inherit',
    width: 'inherit',
    fontWeight: 'regular',
    fontFamily: 'body',
    color: 'white',
    transition: 'transform 0.15s ease-out',
    _hover: {
        textDecoration: 'none',
        textColor: 'pink',
        transitionDuration: '0.5s',
        transitionTimingFunction: 'ease-out'
    },
    _focus: {
        boxShadow: 'none'
    }
})

const menu = defineStyle({
    border: 'none',
    borderRadius: 0,
    padding: 0,
    margin: 0,
    iconSpacing: 0,
    height: 'inherit',
    width: 'max-content',
    lineHeight: '1.36',
    textColor: 'white',
    transition: 'transform 0.15s ease-out',
    _hover: {
        textDecoration: 'none',
        textColor: 'pink',
        transitionDuration: '0.5s',
        transitionTimingFunction: 'ease-out'
    },
    _focus: {
        boxShadow: 'none'
    }
})

const sizes = {
    xl: defineStyle({
        fontSize: 'xl',
        px: '0',
        mx: '0'
    }),
    lg: defineStyle({
        fontSize: 'lg',
        px: '0',
        mx: '0'
    }),
    md: defineStyle({
        fontSize: 'md',
        px: '0',
        mx: '0'
    }),
    sm: defineStyle({
        fontSize: 'sm',
        px: '0',
        mx: '0'
    }),
    xs: defineStyle({
        fontSize: '10px',
        px: '0',
        mx: '0'
    })
}

export const buttonTheme = defineStyleConfig({
    variants: { callToAction, mapLabel, prompt, menu },
    sizes: sizes
})
