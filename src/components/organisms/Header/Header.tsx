import React from "react";
import styled from "styled-components";
import theme from "../../../styles/theme";
import Logo from "../../atoms/Logo/Logo";
import Navbar from "../../molecules/Navbar/Navbar";

const StyledHeader = styled.header`
	background-color:${theme.palette.WHITE};
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 1rem 2rem;
	width: 100%;
	box-sizing: border-box;
`;

const HeaderLogo = styled.div`
	width: 8.2rem;
`;

const HeaderContent = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	flex-grow: 1;
`;

export default function Header() {
	return(
		<StyledHeader>
			<HeaderLogo>
				<Logo/>
			</HeaderLogo>
			<HeaderContent>
				<Navbar/>
			</HeaderContent>
		</StyledHeader>
	);
}