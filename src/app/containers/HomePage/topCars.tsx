import React from "react";
import styled from "styled-components";
import tw from "twin.macro";


const TopCarsContainer = styled.div`
${tw`flex flex-col items-center justify-center w-full max-w-screen-lg px-4 mb-10 md:px-0`}
`

const Title = styled.h1`
  ${tw`text-3xl font-extrabold text-black lg:text-5xl`}
`

const CarsContainer = styled.div`
  ${tw`flex flex-wrap justify-center w-full mt-7 md:mt-10`}
`

export function TopCars(){
  return (
    <TopCarsContainer>
      <Title>Explore our top deals</Title>
      <CarsContainer>  </CarsContainer>
    </TopCarsContainer>
  )
}