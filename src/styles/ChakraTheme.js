import { buttonTheme } from '@/theme/components/Button'
import { headingTheme } from '@/theme/components/Heading'
import { linkTheme } from '@/theme/components/Link'
import { modalTheme } from '@/theme/components/Modal'
import { progressTheme } from '@/theme/components/Progress'
import { spinnerTheme } from '@/theme/components/Spinner'
import { stepperTheme } from '@/theme/components/Stepper'
import { tooltipTheme } from '@/theme/components/Tooltip'
import { theme as base, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false
    },
    global: {
        body: {
            bg: 'grey.900',
            color: 'white',
            height: '100dvh',
            maxHeight: '100dvh'
        }
    },
    colors: {
        state: {
            activeColor: '#f9abab',
            completedColor: '#f9abab',
            disabledColor: 'white',
            errorColor: 'white',
            inactiveColor: 'white',
            stepTextColor: 'white'
        },
        pink: {
            200: '#f9abab',
            400: '#C3918F'
        },
        grey: {
            400: '#404041',
            600: '#2f2f2f',
            800: '#231F20',
            900: '#141414'
        },
        red: {
            400: '#FF3333'
        },
        yellow: {
            400: '#FFD233'
        },
        white: '#ffffff',
        black: '#000000'
    },
    fonts: {
        body: `"Sohne_Buch", ${base.fonts.body}, sans-serif`,
        subheading: `"Sohne_Buch", ${base.fonts.body}, sans-serif`,
        // subheading: `"SohneBreit_Buch", ${base.fonts.body}, sans-serif`,
        heading: `"SohneBreit_Dreiviertelfett", ${base.fonts.heading}, sans-serif`,
        hero: `"SohneBreit_Dreiviertelfett", ${base.fonts.heading}, sans-serif`
        // hero: `"SohneBreit_Halbfett", ${base.fonts.menu}, sans-serif`
    },
    fontSizes: {
        sm: '18px',
        md: '36px',
        lg: '72px',
        xl: '84px'
    },
    textStyles: {
        heading: {
            fontFamily: 'var(--chakra-fonts-heading)',
            fontSize: ['24px', '24px', '24px', '36px', '36px', '36px'],
            lineHeight: '1.2',
            letterSpacing: '0.010',
            textAlign: 'left',
            textColor: 'pink.200'
        },
        subheading: {
            fontFamily: 'var(--chakra-fonts-subheading)',
            fontSize: ['24px', '24px', '24px', '46px', '84px', '84px'],
            lineHeight: ['1.2', '1.2', '1.2', '1.2', '1.1', '1.1'],
            letterSpacing: '0.010',
            textAlign: 'left',
            textColor: 'pink.200'
        },
        body: {
            fontFamily: 'var(--chakra-fonts-body)',
            fontSize: ['24px', '24px', '24px', '32px', '32px', '32px'],
            lineHeight: '1.2',
            letterSpacing: '0.010',
            textAlign: 'left',
            textColor: 'white'
        }
    },
    layerStyles: {
        base: {
            bg: 'grey.900'
        },
        modal: {
            bg: 'grey.900',
            color: 'white',
            border: '2px solid',
            borderColor: 'white'
        }
    },
    components: {
        Heading: headingTheme,
        Link: linkTheme,
        Modal: modalTheme,
        Button: buttonTheme,
        Tooltip: tooltipTheme,
        Spinner: spinnerTheme,
        Progress: progressTheme,
        Stepper: stepperTheme
    }
})

export default theme
