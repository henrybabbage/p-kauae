import { Global } from '@emotion/react'

const Fonts = () => (
    <Global
        styles={`
        @font-face {
            font-family: 'SohneBreit_Halbfett';
            src: url('fonts/SohneBreit/SohneBreit_Halbfett.woff2') format('woff2'),
                url('fonts/SohneBreit/SohneBreit_Halbfett.woff') format('woff');
            font-weight: 400;
            font-style: italic;
            font-display: block;
            font-variant-numeric: tabular-nums;
            unicode-range: U+0000-024F, U+1E00-1EFF, U+2000-206F, U+2070-209F;
        }
        @font-face {
            font-family: 'SohneBreit_Fett';
            src: url('fonts/SohneBreit/SohneBreit_Fett.woff2') format('woff2'),
                url('fonts/SohneBreit/SohneBreit_Fett.woff') format('woff');
            font-weight: 400;
            font-style: italic;
            font-display: block;
            font-variant-numeric: tabular-nums;
            unicode-range: U+0000-024F, U+1E00-1EFF, U+2000-206F, U+2070-209F;
        }
        @font-face {
            font-family: 'SohneBreit_BuchKursiv';
            src: url('fonts/SohneBreit/SohneBreit_BuchKursiv.woff2') format('woff2'),
                url('fonts/SohneBreit/SohneBreit_BuchKursiv.woff') format('woff');
            font-weight: 400;
            font-style: italic;
            font-display: block;
            font-variant-numeric: tabular-nums;
            unicode-range: U+0000-024F, U+1E00-1EFF, U+2000-206F, U+2070-209F;
        }
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
            font-family: 'SohneBreit_ExtrafettKursiv';
            src: url('fonts/SohneBreit/SohneBreit_ExtrafettKursiv.woff2') format('woff2'),
                url('fonts/SohneBreit/SohneBreit_ExtrafettKursiv.woff') format('woff');
            font-weight: 900;
            font-style: italic;
            font-display: block;
            font-variant-numeric: tabular-nums;
            unicode-range: U+0000-024F, U+1E00-1EFF, U+2000-206F, U+2070-209F;
        }
        @font-face {
            font-family: 'SohneBreit_Extrafett';
            src: url('fonts/SohneBreit/SohneBreit_Extrafett.woff2') format('woff2'),
                url('fonts/SohneBreit/SohneBreit_Extrafett.woff') format('woff');
            font-weight: 900;
            font-style: normal;
            font-display: block;
            font-variant-numeric: tabular-nums;
            unicode-range: U+0000-024F, U+1E00-1EFF, U+2000-206F, U+2070-209F;
        }
        @font-face {
            font-family: 'Sohne_HalbfettKursiv';
            src: url('fonts/Sohne/Sohne_HalbfettKursiv.woff2') format('woff2'),
                url('fonts/Sohne/Sohne_HalbfettKursiv.woff') format('woff');
            font-weight: 600;
            font-style: italic;
            font-display: block;
            font-variant-numeric: tabular-nums;
            unicode-range: U+0000-024F, U+1E00-1EFF, U+2000-206F, U+2070-209F;
        }
        @font-face {
            font-family: 'Sohne_Halbfett';
            src: url('fonts/Sohne/Sohne_Halbfett.woff2') format('woff2'),
                url('fonts/Sohne/Sohne_Halbfett.woff') format('woff');
            font-weight: 600;
            font-style: normal;
            font-display: block;
            font-variant-numeric: tabular-nums;
            unicode-range: U+0000-024F, U+1E00-1EFF, U+2000-206F, U+2070-209F;
        }
        @font-face {
            font-family: 'SohneBreit_DreiviertelfettKursiv';
            src: url('fonts/SohneBreit/SohneBreit_DreiviertelfettKursiv.woff2') format('woff2'),
                url('fonts/SohneBreit/SohneBreit_DreiviertelfettKursiv.woff') format('woff');
            font-weight: 500;
            font-style: italic;
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
            font-family: 'Sohne_BuchKursiv';
            src: url('fonts/Sohne/Sohne_BuchKursiv.woff2') format('woff2'),
                url('fonts/Sohne/Sohne_BuchKursiv.woff') format('woff');
            font-weight: 400;
            font-style: italic;
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
