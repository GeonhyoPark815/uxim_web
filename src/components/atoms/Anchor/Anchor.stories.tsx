import { ComponentMeta } from '@storybook/react';
import React from 'react';
import Anchor from './Anchor';
import theme from '../../../styles/theme';
import Span, {FontType} from "../Span/Span";

export default {
	title: 'Atoms/Anchor',
	component: Anchor,
} as ComponentMeta<typeof Anchor>;


export function Active() {
	return (
		<Anchor
			url="/"
			isActive
			activeColor={theme.palette.UXIM_EMERALD}
			defaultColor={theme.palette.BLACK}
			activeBorderWidth={0.3}
			horizontalPadding={1}
			verticalPadding={1}
		>
			<Span className='active' type={FontType.HEADLINE} value='Active'/>
		</Anchor>
	);
}


export function Default() {
	return (
		<Anchor
			url="/"
			isActive={false}
			activeColor={theme.palette.UXIM_EMERALD}
			defaultColor={theme.palette.BLACK}
			activeBorderWidth={0.3}
			horizontalPadding={1}
			verticalPadding={1}
		>
			<Span className='default' type={theme.font.HEADLINE} value='Default'/>
		</Anchor>
	);
}
