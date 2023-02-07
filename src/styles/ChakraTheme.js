import { extendTheme } from '@chakra-ui/react'
import { linkTheme } from '@/theme/components/Link'

const theme = extendTheme({
    colors: {
        pink: '#C3918F',
        grey: '#404041',
        charcoal: '#231F20'
    },
    fonts: {
        primary: `"UntitledSans_Regular", sans-serif`,
        secondary: `"UntitledSerif_Regular", serif`
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
            fontSize: ['18px', '20px'],
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
        Link: linkTheme
    }
})

export default theme
