import {ComponentMeta} from "@storybook/react";
import React from "react";
import Navbar, {PageType} from "./Navbar";

export default {
	title: 'Molecules/Navbar',
} as ComponentMeta<typeof Navbar>;

export function HomePage() {
	return <Navbar pageType={PageType.HomePage}/>
}

export function ProjectPage() {
	return <Navbar pageType={PageType.ProjectPage}/>
}

export function ActivitiesPage() {
	return <Navbar pageType={PageType.ActivitiesPage}/>
}

export function JoinUsPage() {
	return <Navbar pageType={PageType.JoinUsPage}/>
}

