import React from "react";
import styled from "styled-components";
import UXIM_LOGO from '../../../assets/images/UXIM-logo.png';

const StyledImg = styled.img`
	display:block;
	width:100%;
	height:auto;
`;

export default function Logo() {
	return(
		<StyledImg src={UXIM_LOGO} alt="UXIM"/>
	);
}