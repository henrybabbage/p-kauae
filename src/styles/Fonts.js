import { Global } from '@emotion/react'

const Fonts = () => (
    <Global
        styles={`
        @font-face {
            font-family: 'SohneBreit_HalbfettKursiv';
            src: url('fonts/SohneBreit/SohneBreit_HalbfettKursiv.woff2') format('woff2'),
                url('fonts/SohneBreit/SohneBreit_HalbfettKursiv.woff') format('woff');
            font-weight: 600;
            font-style: italic;
            font-display: swap;
        }
        @font-face {
            font-family: 'SohneBreit_Halbfett';
            src: url('fonts/SohneBreit/SohneBreit_Halbfett.woff2') format('woff2'),
                url('fonts/SohneBreit/SohneBreit_Halbfett.woff') format('woff');
            font-weight: 600;
            font-style: normal;
            font-display: swap;
        }
        @font-face {
            font-family: 'Sohne_LeichtKursiv';
            src: url('fonts/Sohne/Sohne_LeichtKursiv.woff2') format('woff2'),
                url('fonts/Sohne/Sohne_LeichtKursiv.woff') format('woff');
            font-weight: 300;
            font-style: italic;
            font-display: swap;
        }
        @font-face {
            font-family: 'Sohne_Leicht';
            src: url('fonts/Sohne/Sohne_Leicht.woff2') format('woff2'),
                url('fonts/Sohne/Sohne_Leicht.woff') format('woff');
            font-weight: 300;
            font-style: normal;
            font-display: swap;
        }
        @font-face {
            font-family: 'Sohne_BuchKursiv';
            src: url('fonts/Sohne/Sohne_BuchKursiv.woff2') format('woff2'),
                url('fonts/Sohne/Sohne_BuchKursiv.woff') format('woff');
            font-weight: 400;
            font-style: italic;
            font-display: swap;
        }
        @font-face {
            font-family: 'Sohne_Buch';
            src: url('fonts/Sohne/Sohne_Buch.woff2') format('woff2'),
                url('fonts/Sohne/Sohne_Buch.woff') format('woff');
            font-weight: 400;
            font-style: normal;
            font-display: swap;
        }
        @font-face {
            font-family: 'National2_Regular';
            src: url('fonts/National/National2_Regular.woff2') format('woff2'),
                url('fonts/National/National2_Regular.woff') format('woff');
            font-weight: 500;
            font-style: normal;
            font-stretch: normal;
            font-display: swap;
        }
        @font-face {
            font-family: 'National2_Bold';
            src: url('fonts/National/National2_Bold.woff2') format('woff2'),
                url('fonts/National/National2_Bold.woff') format('woff');
            font-weight: 700;
            font-style: normal;
            font-stretch: normal;
            font-display: swap;
        }
        @font-face {
            font-family: 'National2_Narrow';
            src: url('fonts/National/National2_Narrow-Extralight.woff2') format('woff2'),
                url('fonts/National/National2_Narrow-Extralight.woff') format('woff');
            font-weight: 200;
            font-style: normal;
            font-stretch: normal;
            font-display: swap;
        }
        @font-face {
            font-family: 'National2_Narrow';
            src: url('fonts/National/National2_Narrow_Regular.woff2') format('woff2'),
                url('fonts/National/National2_Narrow_Regular.woff') format('woff');
            font-weight: 500;
            font-style: normal;
            font-stretch: normal;
            font-display: swap;
        }
        @font-face {
            font-family: 'National2_Narrow';
            src: url('fonts/National/National2_Narrow_Bold.woff2') format('woff2'),
                url('fonts/National/National2_Narrow_Bold.woff') format('woff');
            font-weight: 700;
            font-style: normal;
            font-stretch: normal;
            font-display: swap;
        }
        @font-face {
            font-family: 'National2_Narrow ';
            src: url('fonts/National/National2_Narrow_Black.woff2') format('woff2'),
                url('fonts/National/National2_Narrow_Black.woff') format('woff');
            font-weight: 900;
            font-style: normal;
            font-stretch: normal;
            font-display: swap;
        }
		@font-face {
			font-family: 'UntitledSans_Regular';
			src: url('fonts/UntitledSans/UntitledSans_Regular.woff2') format('woff2'),
			    url('fonts/UntitledSans/UntitledSans_Regular.woff') format('woff');
			font-style: normal;
			font-weight: 400;
        }
        @font-face {
			font-family: 'UntitledSans_Bold';
			src: url('fonts/UntitledSans/UntitledSans_Bold.woff2') format('woff2'),
			    url('fonts/UntitledSans/UntitledSans_Bold.woff') format('woff');
			font-style: normal;
			font-weight: 700;
        }
        @font-face {
            font-family: "UntitledSerif_Regular";
            src: url("fonts/UntitledSerif/UntitledSerif_Regular.woff2") format("woff2"),
                url("fonts/UntitledSerif/UntitledSerif_Regular.woff") format("woff");
            font-style: normal;
            font-weight: 400;
        }
        @font-face {
            font-family: "UntitledSerif_Bold";
            src: url("fonts/UntitledSerif/UntitledSerif_Bold.woff2") format("woff2"),
                url("fonts/UntitledSerif/UntitledSerif_Bold.woff") format("woff");
            font-style: normal;
            font-weight: 700;
        }
        @font-face {
            font-family: "GTZirkon_Regular";
            src: url("fonts/GTZirkon/GTZirkon_Regular.woff2") format("woff2"),
                url("fonts/GTZirkon/GTZirkon_Regular.woff") format("woff");
            font-style: normal;
            font-weight: 400;
        }
        @font-face {
            font-family: "GTZirkon_Bold";
            src: url("fonts/GTZirkon/GTZirkon_Bold.woff2") format("woff2"),
                url("fonts/GTZirkon/GTZirkon_Bold.woff") format("woff");
            font-style: normal;
            font-weight: 700;
        }
        @font-face {
            font-family: "GTZirkon_Black";
            src: url("fonts/GTZirkon/GTZirkon_Black.woff2") format("woff2"),
                url("fonts/GTZirkon/GTZirkon_Black.woff") format("woff");
            font-style: normal;
            font-weight: 800;
        }
        @font-face {
            font-family: "GTPlanar_Regular";
            src: url("fonts/GTPlanar/GTPlanar_Regular.woff2") format("woff2"),
                url("fonts/GTPlanar/GTPlanar_Regular.woff") format("woff");
            font-style: normal;
            font-weight: 400;
            font-feature-settings: "ss02"
        }
        @font-face {
            font-family: "GTPlanar_Bold";
            src: url("fonts/GTPlanar/GTPlanar_Bold.woff2") format("woff2"),
                url("fonts/GTPlanar/GTPlanar_Bold.woff") format("woff");
            font-style: normal;
            font-weight: 700;
            font-feature-settings: "ss02"
        }
	`}
    />
)

export default Fonts
