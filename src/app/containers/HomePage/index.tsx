import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { BookCard } from "../../components/bookCard";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";
import { BookingSteps } from "./bookingSteps";
import { TopSection } from "./topSection";

const PageContainer = styled.div`
	${tw`flex flex-col items-center w-full h-full overflow-x-hidden `}
`;

export function HomePage() {
	return (
		<PageContainer>
			<Navbar />
      <TopSection/>
      <Marginer direction="vertical" margin="5em"/>
      <BookCard/> 
      <Marginer direction="vertical" margin="5em"/>
      <BookingSteps/>
		</PageContainer>
	);
}
