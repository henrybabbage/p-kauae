import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const baseStyle = defineStyle({
    separator: {
        background: 'white'
    },
    indicator: {
        background: 'transparent'
    },
    status: {},
    stepper: {
        background: 'transparent'
    },
    step: {}
})

export const stepperTheme = defineStyleConfig({
    baseStyle
})
