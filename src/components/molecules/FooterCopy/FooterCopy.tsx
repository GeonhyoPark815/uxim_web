import React from "react";
import styled from "styled-components";

const StyledParagraph = styled.p`
	font-size:1.2rem;
	line-height:1.4rem;
	font-weight: 500;
`;

const Strong = styled.strong`
	font-weight: 700;
`;

export default function FooterCopy() {
	return(
		<StyledParagraph>
			Copyright 2022.
			<Strong> UXIM </Strong>
			All Rights Reserved
		</StyledParagraph>
	);
}