import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const CardContainer = styled.div`
	${tw`flex items-center justify-center px-2 py-1 bg-white rounded-md md:px-6 md:py-2`}
`;

const ItemContainer = styled.div`
	${tw`flex`}
`;

const Icon = styled.span`
  ${tw`mr-1 text-xs text-red-500 fill-current md:text-base md:mr-3`}
`

const Name = styled.span`
  ${tw`text-xs text-gray-600 md:text-sm`}
`

const LineSeperator = styled.span`
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
  </CardContainer>
}
