import React from 'react';
import styled from "styled-components";
import NavbarItem from '../../atoms/NavbarItem/NavbarItem';

const StyledUl = styled.ul`
	margin:0;
`;

const StyledList = styled.li`
	list-style:none;
	float: left;
`;

export default function Navbar() {
	return (
		<nav>
			<StyledUl className="navbar" role="menu">
				<StyledList className="navbar_item" role="menuitem">
					<NavbarItem label="Projects" href="https://www.naver.com" />
				</StyledList>
				<StyledList className="navbar_item" role="menuitem">
					<NavbarItem label="Activities" href="https://www.naver.com" />
				</StyledList>
				<StyledList className="navbar_item" role="menuitem">
					<NavbarItem label="Join Us" href="https://www.naver.com" />
				</StyledList>
			</StyledUl>
		</nav>
	);
}
