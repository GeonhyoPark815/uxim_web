import {ComponentMeta} from "@storybook/react";
import React from "react";
import NavbarItem from "./NavbarItem";

export default {
	title: 'Molecules/NavbarItem',
	component: NavbarItem,
} as ComponentMeta<typeof NavbarItem>;

export function Active() {
	return <NavbarItem label="Active" url="/" isActive/>;
}

export function Default() {
	return <NavbarItem label="Default" url="/" isActive={false}/>;
}

