import React from "react";
import { ComponentMeta } from '@storybook/react';
import Copyright from './Copyright';

export default {
	title: 'Molecules/Copyright',
	component: Copyright,
} as ComponentMeta<typeof Copyright>;

export function Default() {
	return <Copyright />;
}
