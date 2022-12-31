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
	${tw`flex w-full h-full max-w-screen-2xl`}
`;

const AboutContainer = styled.div`
	${tw`flex flex-col mr-2 md:mr-16`}
`;

const AboutText = styled.p`
	${tw`max-w-xs mt-5 text-sm font-normal leading-5 text-white`}
`;

const SectionContainer = styled.div`
  ${tw`flex flex-col mr-2 md:mr-16`}
`

const LinksList = styled.ul`
  ${tw`flex flex-col list-none outline-none`}
`

const LinkItem = styled.li`
  ${tw`mb-3`}
  & > a {
    ${tw`text-xs text-white transition-all hover:text-gray-200`}
  }
`

const HeaderTitle = styled.h3`
  ${tw`mb-3 text-xl font-bold text-white`}
`

const HorizontalContainer = styled.div`
  ${tw`flex`}
`

const RedIcon = styled.span`
  ${tw`flex items-center justify-center w-5 h-5 mr-2 text-base text-white rounded-full`}
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
        <SectionContainer>
          <HeaderTitle>Our links</HeaderTitle>
          <LinksList>
            <LinkItem><a href="#">Home</a></LinkItem>
            <LinkItem><a href="#">About us</a></LinkItem>
            <LinkItem><a href="#">Services</a></LinkItem>
            <LinkItem><a href="#">Models</a></LinkItem>
            <LinkItem><a href="#">Blog</a></LinkItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Other links</HeaderTitle>
          <LinksList>
            <LinkItem><a href="#">FAQ</a></LinkItem>
            <LinkItem><a href="#">Contact us</a></LinkItem>
            <LinkItem><a href="#">Support</a></LinkItem>
            <LinkItem><a href="#">Privacy policy</a></LinkItem>
            <LinkItem><a href="#">Terms &amp; conditions</a></LinkItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer></SectionContainer>
			</InnerContainer>
		</FooterContainer>
	);
}
