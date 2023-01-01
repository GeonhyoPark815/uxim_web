import {ComponentMeta} from "@storybook/react";
import React from "react";
import Header from "./Header";

export default {
	title: 'Organisms/Header',
	component:Header
} as ComponentMeta<typeof Header>;

export function Default() {
	return <Header/>;
}