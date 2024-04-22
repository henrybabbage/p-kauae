import { Global } from '@emotion/react'

const Fonts = () => (
    <Global
        styles={`
        @font-face {
            font-family: 'SohneBreit_Buch';
            src: url('fonts/SohneBreit/SohneBreit_Buch.woff2') format('woff2'),
                url('fonts/SohneBreit/SohneBreit_Buch.woff') format('woff');
            font-weight: 400;
            font-style: normal;
            font-display: block;
            font-variant-numeric: tabular-nums;
            unicode-range: U+0000-024F, U+1E00-1EFF, U+2000-206F, U+2070-209F;
        }
        @font-face {
            font-family: 'SohneBreit_Dreiviertelfett';
            src: url('fonts/SohneBreit/SohneBreit_Dreiviertelfett.woff2') format('woff2'),
                url('fonts/SohneBreit/SohneBreit_Dreiviertelfett.woff') format('woff');
            font-weight: 500;
            font-style: normal;
            font-display: block;
            font-variant-numeric: tabular-nums;
            unicode-range: U+0000-024F, U+1E00-1EFF, U+2000-206F, U+2070-209F;
        }
        @font-face {
            font-family: 'Sohne_Buch';
            src: url('fonts/Sohne/Sohne_Buch.woff2') format('woff2'),
                url('fonts/Sohne/Sohne_Buch.woff') format('woff');
            font-weight: 400;
            font-style: normal;
            font-display: block;
            font-variant-numeric: tabular-nums;
            unicode-range: U+0000-024F, U+1E00-1EFF, U+2000-206F, U+2070-209F;
        }
	`}
    />
)

export default Fonts
