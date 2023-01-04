import React from 'react';
import theme from '../../../../styles/theme';
import Anchor from '../../../atoms/Anchor/Anchor';
import Span, { FontType } from '../../../atoms/Span/Span';

interface Props {
	label: string;
	url: string;
	isActive: boolean;
}

export default function NavbarItem({ label, url, isActive }: Props) {
	return (
		<Anchor
			url={url}
			defaultColor={theme.palette.BLACK}
			activeColor={theme.palette.UXIM_PURPLE}
			isActive={isActive}
			verticalPadding={1}
			horizontalPadding={1}
			activeBorderWidth={0.3}
		>
			<Span className="navbar-item_name" type={FontType.HEADLINE} value={label} />
		</Anchor>
	);
}
