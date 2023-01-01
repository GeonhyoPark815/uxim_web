import React from "react";
import { ComponentMeta } from '@storybook/react';
import Footer from "./Footer";

export default {
	title: 'Organisms/Footer',
	component: Footer,
} as ComponentMeta<typeof Footer>;

export function Default() {
	return <Footer />;
}
