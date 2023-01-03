import React from 'react';
import styled from 'styled-components';

interface Props {
	children: React.ReactNode;
	href: string;
	defaultColor: string;
	activeColor: string;
	isActive: boolean;
	verticalPadding: number;
	horizontalPadding: number;
	activeBorderWidth: number;
}

const StyledAnchor = styled.a<Props>`
	text-decoration: none;
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
	href,
	isActive,
	defaultColor,
	activeColor,
	verticalPadding,
	horizontalPadding,
	activeBorderWidth,
}: Props) {
	return (
		<StyledAnchor
			href={href}
			isActive={isActive}
			defaultColor={defaultColor}
			activeColor={activeColor}
			verticalPadding={verticalPadding}
			horizontalPadding={horizontalPadding}
			activeBorderWidth={activeBorderWidth}
		>
			{children}
		</StyledAnchor>
	);
}
