import {ComponentMeta} from "@storybook/react";
import React from "react";
import NavbarItem from "./NavbarItem";

export default {
	title: 'Atoms/NavbarItem',
	component: NavbarItem,
} as ComponentMeta<typeof NavbarItem>;

export function Active() {
	return <NavbarItem label="Active" href=""/>;
}

export function Default() {
	return <NavbarItem label="Default" href=""/>;
}

