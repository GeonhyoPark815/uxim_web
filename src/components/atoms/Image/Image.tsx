import React from "react";
import styled from "styled-components";

interface Props {
	src:string;
	alt:string;
	width:string;
	height:string;
	objectFit:string;
}

const StyledImg = styled.img<Props>`
	display:block;
	width:${(props) => props.width};
	height:${(props) => props.height};
	object-fit:${(props) => props.objectFit};
`;

export default function Image({src, alt, width, height, objectFit}:Props) {
	return(
		<StyledImg src={src} alt={alt} width={width} height={height} objectFit={objectFit}/>
	);
}