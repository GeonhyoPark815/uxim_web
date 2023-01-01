import React from "react";
import { ComponentMeta } from '@storybook/react';
import FooterCopy from './FooterCopy';

export default {
	title: 'Molecules/FooterCopy',
	component: FooterCopy,
} as ComponentMeta<typeof FooterCopy>;

export function Default() {
	return <FooterCopy />;
}
