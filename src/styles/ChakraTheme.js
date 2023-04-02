import { buttonTheme } from '@/theme/components/Button'
import { linkTheme } from '@/theme/components/Link'
import { modalTheme } from '@/theme/components/Modal'
import { spinnerTheme } from '@/theme/components/Spinner'
import { tooltipTheme } from '@/theme/components/Tooltip'
import { theme as base, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    global: {
        body: {
            bg: 'grey.900',
            color: 'white'
        }
    },
    colors: {
        pink: {
            200: '#f9abab',
            400: '#C3918F'
        },
        grey: {
            400: '#404041',
            600: '#2f2f2f',
            800: '#231F20',
            900: '#141414'
        }
    },
    fonts: {
        body: `"Sohne_Buch", ${base.fonts.body}, sans-serif`,
        subheading: `"SohneBreit_Buch", ${base.fonts.body}, sans-serif`,
        heading: `"SohneBreit_Dreiviertelfett", ${base.fonts.heading}, sans-serif`
    },
    fontSizes: {
        sm: '18px',
        md: '36px',
        lg: '72px'
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
            bg: 'grey.900'
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
        Button: buttonTheme,
        Tooltip: tooltipTheme,
        Spinner: spinnerTheme
    }
})

export default theme
