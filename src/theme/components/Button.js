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
    // fontSize: 'xl',
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
    // fontSize: 'xs',
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
    // fontSize: 'sm',
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
    width: 'inherit',
    fontWeight: 'bold',
    // fontSize: 'xs',
    lineHeight: '1.36',
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

const sizes = {
    xl: defineStyle({
        fontSize: 'xl'
    }),
    lg: defineStyle({
        fontSize: 'lg'
    }),
    md: defineStyle({
        fontSize: 'md'
    }),
    sm: defineStyle({
        fontSize: 'sm'
    }),
    xs: defineStyle({
        fontSize: '10px'
    })
}

export const buttonTheme = defineStyleConfig({
    variants: { callToAction, mapLabel, prompt, menu, sizes }
})
