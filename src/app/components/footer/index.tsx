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

const AboutText = styled.p`
	${tw`max-w-xs mt-5 text-sm font-normal leading-5 text-white`}
`;

const LinksList = styled.ul`
  ${tw`flex flex-col list-none outline-none`}
`

const HeaderTitle = styled.h3`
  ${tw`mb-3 text-base font-bold text-white`}
`

export function Footer() {
	return (
		<FooterContainer>
			<InnerContainer>
				<AboutContainer>
					<Logo color="light" bgColor="dark" />
					<AboutText>
						Our car rental company has been in business for over 20 years,
						providing top-quality rental vehicles to travelers and locals alike.
						We have a wide range of vehicles to choose from, including economy,
						luxury, and family-sized options.
					</AboutText>
				</AboutContainer>
			</InnerContainer>
		</FooterContainer>
	);
}
