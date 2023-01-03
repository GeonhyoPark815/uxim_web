import React  from "react";
import styled from 'styled-components'
import theme from "../../../styles/theme";

const LargeTitle = styled.span`
	${theme.font.LARGE_TITLE}
`;

const Title1 = styled.span`
	${theme.font.TITLE1}
`;

const Title2 = styled.span`
	${theme.font.TITLE2}
`;

const Title3 = styled.span`
	${theme.font.TITLE3}
`;

const Headline = styled.span`
	${theme.font.HEADLINE}
`;

const Body = styled.span`
	${theme.font.BODY}
`;

const Callout = styled.span`
	${theme.font.CALLOUT}
`;

const Subhead = styled.span`
	${theme.font.SUBHEAD}
`;

const Footnote = styled.span`
	${theme.font.FOOTNOTE}
`;

const Caption1 = styled.span`
	${theme.font.CAPTION1}
`;

const Caption2 = styled.span`
	${theme.font.CAPTION2}
`;

interface props {
	className: string;
	type:string;
	value:string;
}

export const FontType = {
	LARGE_TITLE:'large_title',
	TITLE1:'title1',
	TITLE2:'title2',
	TITLE3:'title3',
	HEADLINE:'headline',
	BODY:'body',
	CALLOUT:'callout',
	SUBHEAD:'subhead',
	FOOTNOTE:'footnote',
	CAPTION1:'caption1',
	CAPTION2:'caption2',
}

export default function Span({ className, type = FontType.BODY, value }:props) {
	return(
		<>
			{ type === FontType.LARGE_TITLE && <LargeTitle className={className}>{value}</LargeTitle> }
			{ type === FontType.TITLE1 && <Title1 className={className}>{value}</Title1> }
			{ type === FontType.TITLE2 && <Title2 className={className}>{value}</Title2> }
			{ type === FontType.TITLE3 && <Title3 className={className}>{value}</Title3> }
			{ type === FontType.HEADLINE && <Headline className={className}>{value}</Headline> }
			{ type === FontType.BODY && <Body className={className}>{value}</Body> }
			{ type === FontType.CALLOUT && <Callout className={className}>{value}</Callout> }
			{ type === FontType.SUBHEAD && <Subhead className={className}>{value}</Subhead> }
			{ type === FontType.FOOTNOTE && <Footnote className={className}>{value}</Footnote> }
			{ type === FontType.CAPTION1 && <Caption1 className={className}>{value}</Caption1> }
			{ type === FontType.CAPTION2 && <Caption2 className={className}>{value}</Caption2> }
		</>
	);
}