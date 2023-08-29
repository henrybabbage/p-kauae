import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const xxl = defineStyle({
    height: 20,
    width: 20
})

export const spinnerTheme = defineStyleConfig({
    sizes: { xxl }
})
