import { extendTheme } from '@chakra-ui/react'
import { linkTheme } from '@/theme/components/Link'

const theme = extendTheme({
	colors: {
		pink: '#C3918F',
		grey: '#404041',
	},
	fonts: {
		primary: `"UntitledSans_Regular", sans-serif`,
		secondary: `"UntitledSerif_Regular", serif`,
	},
	textStyles: {
		primary: {
			'fontFamily': 'var(--chakra-fonts-primary)',
		},
		secondary: {
			'fontFamily': 'var(--chakra-fonts-secondary)',
		},
        h1: {
            fontFamily: 'var(--chakra-fonts-secondary)',
            fontSize: ['14px', '16px'],
            fontWeight: '700',
            lineHeight: '90%',
        },
        h2: {
            fontFamily: 'var(--chakra-fonts-secondary)',
            fontSize: ['14px', '16px'],
            fontWeight: '700',
            lineHeight: '90%',
        },
	},
	components: {
		Link: linkTheme,
	},
})

export default theme