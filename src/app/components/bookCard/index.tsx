import React from "react";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../button";
import { Marginer } from "../marginer";

const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
	${tw`flex items-center justify-center px-2 py-1 bg-white rounded-md md:px-9 md:py-2`}
`;

const ItemContainer = styled.div`
	${tw`flex items-center `}
`;

const Icon = styled.span`
  ${tw`mr-1 text-xs text-red-500 fill-current md:text-base md:mr-3`}
`

const Name = styled.span`
  ${tw`text-xs text-gray-600 md:text-sm`}
`

const LineSeperator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`mx-2 bg-gray-300 md:mx-5`}
`
export function BookCard() {
  return <CardContainer>
    <ItemContainer>
      <Icon>
        <FontAwesomeIcon icon={faCalendarAlt}/>
      </Icon>
      <Name>Pick up date</Name>
    </ItemContainer>
    <LineSeperator/> 
    <ItemContainer>
      <Icon>
        <FontAwesomeIcon icon={faCalendarAlt}/>
      </Icon>
      <Name>Return date</Name>
    </ItemContainer>
    <Marginer direction="horizontal" margin="2em"/>
    <Button text="Book ride"/>
  </CardContainer>
}
