import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const ListContainer = styled.ul`
	${tw`flex list-none`}
`;

const NavItem = styled.li`
	${tw`mr-1 text-xs font-medium text-black transition duration-300 ease-in-out cursor-pointer md:text-base md:mr-5 hover:text-gray-700`}
`;

export function NavItems(){
  return <ListContainer>
    <NavItem>
      <a href="#">Home</a>
    </NavItem>
    <NavItem>
      <a href="#">Cars</a>
    </NavItem>
    <NavItem>
      <a href="#">Services</a>
    </NavItem>
    <NavItem>
      <a href="#">Contact Us</a>
    </NavItem>
  </ListContainer>
}