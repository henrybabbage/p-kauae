import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    highlight: '#9FC36C',
    background: '#A45036',
  },
  fonts: {
    heading: "Open Sans",
    subHeading: "Times New Roman",
    body: "Arial",
  },
  textStyles: {
    h1: {
        'font-family': 'var(--chakra-fonts-heading)',
    },
    h2: {
        'font-family': 'var(--chakra-fonts-subHeading)',
    },
    p: {
        'font-family': 'var(--chakra-fonts-body)',
    }
  }
});

export default theme;