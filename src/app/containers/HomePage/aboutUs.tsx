import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/responsive";

const AboutUsContainer = styled.div`
  ${tw`flex flex-wrap items-center w-full py-4 bg-white 2xl:justify-center px-7 md:px-0`}
`

const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -30px;

  img{
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}){
    height: 28em;
  }

  @media (min-width: ${SCREENS.lg}){
    height: 30em;
  }

  @media (min-width: ${SCREENS["2xl"]}){
    height: 35em;
    margin-left: 0;
  }
`

const InfoContainer = styled.div`
  ${tw`flex flex-col w-1/2 md:ml-6 2xl:ml-16`}
`

const Title = styled.h1`
  ${tw`text-2xl font-extrabold text-black md:text-5xl md:font-black md:leading-normal`}
`

const InfoText = styled.div``

export function AboutUs(){}