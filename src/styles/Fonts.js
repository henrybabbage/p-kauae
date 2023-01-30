import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
	styles={`
		@font-face {
			font-family: 'UntitledSans_Regular';
			src: url('fonts/UntitledSans/UntitledSans_Regular.woff2') format('woff2'),
			url('fonts/UntitledSans/UntitledSans_Regular.woff') format('woff');
			font-style: normal;
			font-weight: 400;
			-webkit-font-smoothing: antialiased;
			-moz-font-smoothing: antialiased;
					-ms-font-smoothing: antialiased;
					-o-font-smoothing: antialiased;
			}

        @font-face {
            font-family: "UntitledSerif_Regular";
            src: url("fonts/UntitledSerif/UntitledSerif_Regular.woff2") format("woff2"),
            url("fonts/UntitledSerif/UntitledSerif_Regular.woff") format("woff");
            font-style: normal;
            font-weight: 400;
            -webkit-font-smoothing: antialiased;
			-moz-font-smoothing: antialiased;
					-ms-font-smoothing: antialiased;
					-o-font-smoothing: antialiased;
            }

		`}
  	/>
)

export default Fonts