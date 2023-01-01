import {ComponentMeta} from "@storybook/react";
import React from "react";
import Navbar from "./Navbar";

export default {
	title: 'Molecules/Navbar',
} as ComponentMeta<typeof Navbar>;

export function Default() {
	return <Navbar/>;
}

