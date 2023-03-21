import { Global } from '@emotion/react'

const Fonts = () => (
    <Global
        styles={`
        @font-face {
            font-family: 'National 2 Web';
            src: url('{{basepath}}assets/fonts/national/National2Web-Regular.woff2') format('woff2'),
            url('{{basepath}}assets/fonts/national/National2Web-Regular.woff') format('woff');
            font-weight: 500;
            font-style: normal;
            font-stretch: normal;
            font-display: swap;
        }
        @font-face {
            font-family: 'National 2 Web';
            src: url('{{basepath}}assets/fonts/national/National2Web-Bold.woff2') format('woff2'),
            url('{{basepath}}assets/fonts/national/National2Web-Bold.woff') format('woff');
            font-weight: 700;
            font-style: normal;
            font-stretch: normal;
            font-display: swap;
        }
        @font-face {
            font-family: 'National 2 Narrow Web';
            src: url('{{basepath}}assets/fonts/national/National2NarrowWeb-Extralight.woff2') format('woff2'),
            url('{{basepath}}assets/fonts/national/National2NarrowWeb-Extralight.woff') format('woff');
            font-weight: 200;
            font-style: normal;
            font-stretch: normal;
            font-display: swap;
        }
        @font-face {
            font-family: 'National 2 Narrow Web';
            src: url('{{basepath}}assets/fonts/national/National2NarrowWeb-Regular.woff2') format('woff2'),
            url('{{basepath}}assets/fonts/national/National2NarrowWeb-Regular.woff') format('woff');
            font-weight: 500;
            font-style: normal;
            font-stretch: normal;
            font-display: swap;
        }
        @font-face {
            font-family: 'National 2 Narrow Web';
            src: url('{{basepath}}assets/fonts/national/National2NarrowWeb-Bold.woff2') format('woff2'),
            url('{{basepath}}assets/fonts/national/National2NarrowWeb-Bold.woff') format('woff');
            font-weight: 700;
            font-style: normal;
            font-stretch: normal;
            font-display: swap;
        }
        @font-face {
            font-family: 'National 2 Narrow Web';
            src: url('{{basepath}}assets/fonts/national/National2NarrowWeb-Black.woff2') format('woff2'),
            url('{{basepath}}assets/fonts/national/National2NarrowWeb-Black.woff') format('woff');
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
            font-feature-settings: "ss02"
        }
        @font-face {
            font-family: "GTZirkon_Bold";
            src: url("fonts/GTZirkon/GTZirkon_Bold.woff2") format("woff2"),
            url("fonts/GTZirkon/GTZirkon_Bold.woff") format("woff");
            font-style: normal;
            font-weight: 700;
            font-feature-settings: "ss02"
        }
        @font-face {
            font-family: "GTZirkon_Black";
            src: url("fonts/GTZirkon/GTZirkon_Black.woff2") format("woff2"),
            url("fonts/GTZirkon/GTZirkon_Black.woff") format("woff");
            font-style: normal;
            font-weight: 800;
            font-feature-settings: "ss02"
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
