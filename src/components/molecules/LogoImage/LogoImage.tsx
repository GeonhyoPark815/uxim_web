import React from "react";
import UXIM_LOGO from '../../../assets/images/UXIM-logo.png';
import Image from "../../atoms/Image/Image";

export default function LogoImage() {
	return(
		<Image src={UXIM_LOGO} alt="UXIM" width="8rem" height="auto" objectFit="contain" />
	);
}