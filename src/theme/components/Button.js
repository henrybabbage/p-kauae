import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const callToAction = defineStyle({
    border: 'none',
    borderRadius: 0,
    padding: 0,
    margin: 0,
    iconSpacing: 0,
    height: 'inherit',
    width: 'inherit',
    fontWeight: 'regular',
    fontSize: 'xl',
    fontFamily: 'subheading',
    color: 'white',
    transition: 'transform 0.15s ease-out',
    _hover: {
        textDecoration: 'none',
        color: 'pink'
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
    fontSize: 'xs',
    fontFamily: 'body',
    color: 'white',
    transition: 'transform 0.15s ease-out',
    _hover: {
        textDecoration: 'none',
        color: 'pink'
    }
})

export const buttonTheme = defineStyleConfig({
    variants: { callToAction, mapLabel }
})
