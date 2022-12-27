import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`flex flex-col items-center w-full py-3 lg:py-6`}
`

const Title = styled.h2`
  ${tw`text-xl font-extrabold text-black lg:text-4xl`}
`

const StepsContainer = styled.div`
  ${tw`flex flex-wrap justify-evenly mt-7 lg:mt-16`}
`

const  StepContainer = styled.div`
  ${tw`flex flex-col items-center w-16 transition-colors md:w-96 hover:text-red-500`}
`

const Step = styled.div`
  ${tw`flex items-center justify-center p-6 rounded-lg`}
`

const StepTitle = styled.div`
  ${tw`mt-4 text-lg font-semibold text-black`}
`


export function BookingSteps() {

}