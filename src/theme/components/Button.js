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
    fontFamily: 'primary',
    color: 'white',
    transition: 'transform 0.15s ease-out',
    _hover: {
        textDecoration: 'none',
        color: 'pink'
    },
    _focus: {
        outline: '1px',
        borderRadius: '4px',
        borderColor: '#000000',
        boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.5) !important'
    }
})

export const buttonTheme = defineStyleConfig({
    variants: { callToAction }
})
