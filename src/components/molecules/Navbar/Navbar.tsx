import React from 'react';
import styled from "styled-components";
import NavbarItem from './NavbarItem/NavbarItem';

const StyledUl = styled.ul`
	margin:0;
`;

const StyledList = styled.li`
	list-style:none;
	float: left;
`;

export const PageType = {
	HomePage:'home',
	ProjectPage:'project',
	ActivitiesPage:'activities',
	JoinUsPage:'join-us',
}

interface Props {
	pageType: string;
}

export default function Navbar({pageType}:Props) {
	return (
		<nav>
			<StyledUl className="navbar" role="menu">
				<StyledList className={pageType === PageType.ProjectPage ? "navbar_item on" : "navbar_item"} role="menuitem">
					<NavbarItem label="Projects" url={`/${PageType.ProjectPage}`} isActive={pageType === PageType.ProjectPage}/>
				</StyledList>
				<StyledList className={pageType === PageType.ActivitiesPage ? "navbar_item on" : "navbar_item"} role="menuitem">
					<NavbarItem label="Activities" url={`/${PageType.ActivitiesPage}`} isActive={pageType === PageType.ActivitiesPage}/>
				</StyledList>
				<StyledList className={pageType === PageType.JoinUsPage ? "navbar_item on" : "navbar_item"} role="menuitem">
					<NavbarItem label="Join Us" url={`/${PageType.JoinUsPage}`} isActive={pageType === PageType.JoinUsPage}/>
				</StyledList>
			</StyledUl>
		</nav>
	);
}
