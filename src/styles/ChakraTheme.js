import { buttonTheme } from '@/theme/components/Button'
import { linkTheme } from '@/theme/components/Link'
import { modalTheme } from '@/theme/components/Modal'
import { theme as base, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    global: {
        body: {
            bg: 'var(--chakra-colors-theme-grey)',
            color: 'white'
        }
    },
    colors: {
        pink: {
            200: '#C3918F'
        },
        grey: {
            600: '#404041',
            800: '#231F20'
        }
    },
    fonts: {
        body: `"GTPlanar_Regular", ${base.fonts.body}, sans-serif`,
        heading: `"GTZirkon_Bold", ${base.fonts.heading}, sans-serif`
    },
    fontSizes: {
        sm: '18px',
        md: '18px',
        lg: '18px'
    },
    textStyles: {
        primary: {
            fontFamily: 'var(--chakra-fonts-body)'
        },
        secondary: {
            fontFamily: 'var(--chakra-fonts-heading)'
        },
        h1: {
            fontFamily: 'var(--chakra-fonts-heading)',
            fontSize: ['30px', '72px'],
            fontWeight: '700',
            lineHeight: '90%'
        },
        h2: {
            fontFamily: 'var(--chakra-fonts-heading)',
            fontSize: ['30px', '72px'],
            fontWeight: '700',
            lineHeight: '90%'
        },
        p: {
            fontFamily: 'var(--chakra-fonts-body)',
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
