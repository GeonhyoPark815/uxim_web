import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';

interface Props {
	label: string;
	href: string;
}

const StyledLinkButton = styled.a`
	display: inline-flex;
	box-sizing: border-box;
	color: ${theme.palette.BLACK};
	padding: 1rem;
	
	&:active,
	&:hover,
	&:focus {
		padding: 1rem 1rem 0.7rem;
		border-bottom: 0.3rem solid ${theme.palette.UXIM_PURPLE};
	}
	
	text-decoration:none;
	font-weight: 700;
	font-size: 1.6rem;
	line-height: 2rem;
	text-align: center;
`;

export default function NavbarItem({ label, href }: Props) {
	return (
		<StyledLinkButton href={href}>{label}</StyledLinkButton>
	);
}
