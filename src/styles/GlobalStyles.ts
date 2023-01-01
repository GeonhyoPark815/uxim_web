import {createGlobalStyle} from "styled-components";
import theme from "./theme";

const GlobalStyles = createGlobalStyle`
	* {
		margin:0;
		padding:0;
	}
	
	body {
		// font
		font-family: 'Inter';
		font-color: ${theme.palette.BLACK}
		font-style: normal;
		font-size: 10px;
		line-height: 10px;
		
		// color
		color: ${theme.palette.BLACK};
		// background: ${theme.palette.WHITE};
	}
`;

export default GlobalStyles;