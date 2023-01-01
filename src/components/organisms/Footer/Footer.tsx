import React from "react";
import styled from "styled-components";
import theme from "../../../styles/theme";
import Logo from "../../atoms/Logo/Logo";
import FooterCopy from "../../molecules/FooterCopy/FooterCopy";

const StyledFooter = styled.header`
	background-color:${theme.palette.WHITE};
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 1rem 2rem;
	width: 100%;
	box-sizing: border-box;
`;

const FooterLogo = styled.div`
	width: 8.2rem;
`;

const FooterContent = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	flex-grow: 1;
`;

export default function Footer() {
	return(
		<StyledFooter>
			<FooterLogo>
				<Logo/>
			</FooterLogo>
			<FooterContent>
				<FooterCopy/>
			</FooterContent>
		</StyledFooter>
	);
}