import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

interface Props {
	children: React.ReactNode;
	url: string;
	defaultColor: string;
	activeColor: string;
	isActive: boolean;
	verticalPadding: number;
	horizontalPadding: number;
	activeBorderWidth: number;
}

const StyledAnchor = styled.div<Props>`
	display: inline-flex;
	box-sizing: border-box;
	text-align: center;
	color: ${(props) => (props.isActive ? props.activeColor : props.defaultColor)};
	padding: ${(props) => (props.isActive ? `${props.verticalPadding}rem ${props.horizontalPadding}rem ${props.verticalPadding - props.activeBorderWidth}rem` : `${props.verticalPadding}rem ${props.horizontalPadding}rem`)};
	border-bottom: ${(props) => (props.isActive ? `${props.activeBorderWidth}rem solid ${props.activeColor}` : `null`)};
	&:active,
	&:hover,
	&:focus {
		padding: ${(props) => `${props.verticalPadding}rem ${props.horizontalPadding}rem ${props.verticalPadding - props.activeBorderWidth}rem`};
		color: ${(props) => props.activeColor};
		border-bottom: ${(props) => props.activeBorderWidth}rem solid ${(props) => props.activeColor};
	}
`;

export default function Anchor({
	children,
	url,
	isActive,
	defaultColor,
	activeColor,
	verticalPadding,
	horizontalPadding,
	activeBorderWidth,
}: Props) {
	return (
		<Link to={url} style={{textDecoration: "none"}}>
			<StyledAnchor
				isActive={isActive}
				defaultColor={defaultColor}
				activeColor={activeColor}
				verticalPadding={verticalPadding}
				horizontalPadding={horizontalPadding}
				activeBorderWidth={activeBorderWidth}
				url={url}
			>
				{children}
			</StyledAnchor>
		</Link>
	);
}
