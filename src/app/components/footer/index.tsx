import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const FooterContainer = styled.div`
  min-height: 20em;
  ${tw`flex flex-wrap min-w-full pb-1 bg-blue-900 pt-7`}
`

export function Footer (){
  return <FooterContainer>Container</FooterContainer>
}