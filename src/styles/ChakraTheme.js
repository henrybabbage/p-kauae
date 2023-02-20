import { linkTheme } from '@/theme/components/Link'
import { modalTheme } from '@/theme/components/Modal'
import { buttonTheme } from '@/theme/components/Button'
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    global: {},
    colors: {
        pink: '#C3918F',
        grey: '#404041',
        charcoal: '#231F20'
    },
    fonts: {
        primary: `"UntitledSans_Regular", sans-serif`,
        secondary: `"UntitledSerif_Regular", serif`,
        special: `"GTZirkon", sans-serif`
    },
    fontSizes: {
        sm: '18px',
        md: '18px',
        lg: '18px'
    },
    textStyles: {
        primary: {
            fontFamily: 'var(--chakra-fonts-primary)'
        },
        secondary: {
            fontFamily: 'var(--chakra-fonts-secondary)'
        },
        h1: {
            fontFamily: 'var(--chakra-fonts-secondary)',
            fontSize: ['18px', '20px'],
            fontWeight: '700',
            lineHeight: '90%'
        },
        h2: {
            fontFamily: 'var(--chakra-fonts-secondary)',
            fontSize: ['18px', '20px'],
            fontWeight: '700',
            lineHeight: '90%'
        },
        p: {
            fontFamily: 'var(--chakra-fonts-secondary)',
            fontSize: ['26px', '36px'],
            fontWeight: '700',
            lineHeight: '90%'
        }
    },
    layerStyles: {
        base: {
            bg: 'grey'
        },
        modal: {
            bg: 'charcoal',
            color: 'white',
            border: '2px solid',
            borderColor: 'white'
        }
    },
    components: {
        Link: linkTheme,
        Modal: modalTheme,
        Button: buttonTheme
    }
})

export default theme
