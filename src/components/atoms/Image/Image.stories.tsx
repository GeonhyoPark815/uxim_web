import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Image from './Image';
import UXIM_LOGO from '../../../assets/images/UXIM-logo.png';

export default {
	title: 'Atoms/Image',
	component: Image,
} as ComponentMeta<typeof Image>;

export function Example() {
	return <Image src={UXIM_LOGO} alt="UXIM_LOGO" width="100px" height="auto" objectFit="contain"/>;
}
