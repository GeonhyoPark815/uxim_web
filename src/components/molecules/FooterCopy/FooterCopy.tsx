import React from "react";
import Span, {FontType} from "../../atoms/Span/Span";

export default function FooterCopy() {
	return(
		<>
			<Span className='footer-copy' type={FontType.CALLOUT} value="Copyright 2022. "/>
			<strong>
				<Span className='footer-copy' type={FontType.CALLOUT} value="UXIM"/>
			</strong>
			<Span className='footer-copy' type={FontType.CALLOUT} value=" All Rights Reserved"/>
		</>
	);
}