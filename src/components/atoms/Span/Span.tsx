import React  from "react";
import styled from 'styled-components'
import FontStyles from "../../../styles/FontStyles";

const LargeTitle = styled.span`
	font-size: 3.4rem;
	line-height: 4.1rem;
`;

const Title1 = styled.span`
	font-size: 2.8rem;
	line-height: 3.4rem;
`;

const Title2 = styled.span`
	font-size: 2.2rem;
	line-height: 2.8rem;
`;

const Title3 = styled.span`
	font-size: 2rem;
	line-height: 2.5rem;
`;

const Headline = styled.span`
	font-weight: 600;
	font-size: 1.7rem;
	line-height: 2.2rem;
`;

const Body = styled.span`
	font-size: 1.7rem;
	line-height: 2.2rem;
`;

const Callout = styled.span`
	font-size: 1.6rem;
	line-height: 2.1rem;
`;

const Subhead = styled.span`
	font-size: 1.5rem;
	line-height: 2.0rem;
`;

const Footnote = styled.span`
	font-size: 1.3rem;
	line-height: 1.8rem;
`;

const Caption1 = styled.span`
	font-size: 1.2rem;
	line-height: 1.6rem;
`;

const Caption2 = styled.span`
	font-size: 1.1rem;
	line-height: 1.3rem;
`;

interface props {
	className: string;
	type:string;
	value:string;
}

export default function Span({ className, type = FontStyles.BODY, value }:props) {
	return(
		<>
			{ type === FontStyles.LARGE_TITLE && <LargeTitle className={className}>{value}</LargeTitle> }
			{ type === FontStyles.TITLE1 && <Title1 className={className}>{value}</Title1> }
			{ type === FontStyles.TITLE2 && <Title2 className={className}>{value}</Title2> }
			{ type === FontStyles.TITLE3 && <Title3 className={className}>{value}</Title3> }
			{ type === FontStyles.HEADLINE && <Headline className={className}>{value}</Headline> }
			{ type === FontStyles.BODY && <Body className={className}>{value}</Body> }
			{ type === FontStyles.CALLOUT && <Callout className={className}>{value}</Callout> }
			{ type === FontStyles.SUBHEAD && <Subhead className={className}>{value}</Subhead> }
			{ type === FontStyles.FOOTNOTE && <Footnote className={className}>{value}</Footnote> }
			{ type === FontStyles.CAPTION1 && <Caption1 className={className}>{value}</Caption1> }
			{ type === FontStyles.CAPTION2 && <Caption2 className={className}>{value}</Caption2> }
		</>
	);
}