import {createGlobalStyle} from "styled-components";
import theme from "./theme";

const GlobalStyles = createGlobalStyle`
	* {
		margin:0;
		padding:0;
		
		// font
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
		font-style: normal;
		font-size: 10px;
		line-height: 10px;
		font-weight: 400;
	}
	
	body {
		// font
		font-family: 'Inter';
		font-color: ${theme.palette.BLACK}
		font-style: normal;
		font-size: 10px;
		line-height: 10px;
		font-weight: 400;
		
		// color
		color: ${theme.palette.BLACK};
		// background: ${theme.palette.WHITE};
	}
`;

export default GlobalStyles;