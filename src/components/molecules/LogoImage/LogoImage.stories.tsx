import React from 'react';
import { ComponentMeta } from '@storybook/react';
import LogoImage from './LogoImage';

export default {
	title: 'Molecules/LogoImage',
	component: LogoImage,
} as ComponentMeta<typeof LogoImage>;

export function Default() {
	return <LogoImage />;
}
