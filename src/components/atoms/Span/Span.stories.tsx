import React from "react";
import { ComponentMeta } from '@storybook/react';
import Span, {FontType} from "./Span";

export default {
	title: 'Atoms/Span',
	component: Span,
} as ComponentMeta<typeof Span>;

const testValue:string = '1234567890 가나다라마바사 ABCDEFabcdef';

export function LargeTitle() {
	return <Span className='large-title' type={FontType.LARGE_TITLE} value={testValue}/>;
}

export function Title1() {
	return <Span className='title1' type={FontType.TITLE1} value={testValue}/>;
}

export function Title2() {
	return <Span className='title2' type={FontType.TITLE2} value={testValue}/>;
}

export function Title3() {
	return <Span className='title3' type={FontType.TITLE3} value={testValue}/>;
}

export function Headline() {
	return <Span className='headline' type={FontType.HEADLINE} value={testValue}/>;
}

export function Body() {
	return <Span className='body' type={FontType.BODY} value={testValue}/>;
}

export function Callout() {
	return <Span className='callout' type={FontType.CALLOUT} value={testValue}/>;
}

export function Subhead() {
	return <Span className='subhead' type={FontType.SUBHEAD} value={testValue}/>;
}

export function Footnote() {
	return <Span className='footnote' type={FontType.FOOTNOTE} value={testValue}/>;
}

export function Caption1() {
	return <Span className='caption1' type={FontType.CAPTION1} value={testValue}/>;
}

export function Caption2() {
	return <Span className='caption2' type={FontType.CAPTION2} value={testValue}/>;
}