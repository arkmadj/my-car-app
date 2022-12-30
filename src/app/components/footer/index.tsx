import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";

const FooterContainer = styled.div`
  min-height: 30em;
  background: #1D2124;
  ${tw`flex flex-wrap min-w-full pb-1 pt-7`}
`

const AboutContainer = styled.div`
  ${tw`flex flex-col`}
`

export function Footer (){
  return <FooterContainer>
    <AboutContainer>
      <Logo color="light" bgColor="dark"/>
    </AboutContainer>
  </FooterContainer>
}