import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Logo from './Logo';

export default {
	title: 'Atoms/Logo',
	component: Logo,
} as ComponentMeta<typeof Logo>;

export function Default() {
	return <Logo />;
}
