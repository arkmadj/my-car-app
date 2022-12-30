import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const FooterContainer = styled.div`
  min-height: 30em;
  background: rgb(31 42 76);
  ${tw`flex flex-wrap min-w-full pb-1 pt-7`}
`

const AboutContainer = styled.div`
  ${tw`flex flex-col`}
`

export function Footer (){
  return <FooterContainer>Container</FooterContainer>
}