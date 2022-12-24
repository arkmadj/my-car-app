import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Navbar } from "../../components/navbar";

const PageContainer = styled.div`
	${tw`flex flex-col items-center w-full h-full overflow-x-hidden `}
`;

export function HomePage() {
	return (
		<PageContainer>
			<Navbar />
		</PageContainer>
	);
}
