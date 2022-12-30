import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";

const FooterContainer = styled.div`
	min-height: 30em;
	background: #1d2124;
	${tw`flex items-center justify-center min-w-full pt-4 pb-1 md:pt-12`}
`;

const InnerContainer = styled.div`
	${tw`flex flex-col w-full h-full max-w-screen-2xl`}
`;

const AboutContainer = styled.div`
	${tw`flex flex-col`}
`;

export function Footer() {
	return (
		<FooterContainer>
			<InnerContainer>
				<AboutContainer>
					<Logo color="light" bgColor="dark" />
				</AboutContainer>
			</InnerContainer>
		</FooterContainer>
	);
}
