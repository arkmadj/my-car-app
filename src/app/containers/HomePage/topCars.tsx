import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../../typings/car";
import { Car } from "../../components/car";

const TopCarsContainer = styled.div`
	${tw`flex flex-col items-center justify-center w-full max-w-screen-lg px-4 mb-10 md:px-0`}
`;

const Title = styled.h1`
	${tw`text-3xl font-extrabold text-black lg:text-5xl`}
`;

const CarsContainer = styled.div`
	${tw`flex flex-wrap justify-center w-full mt-7 md:mt-10`}
`;

export function TopCars() {
	const testCar: ICar = {
		name: "Audi S3 Car",
		mileage: "10k",
		thumbnailSrc:
			"https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
		dailyPrice: 70,
		monthlyPrice: 1600,
		gearType: "Auto",
		gas: "Petrol",
	};

	const testCar2: ICar = {
		name: "HONDA cITY 5 Seater Car",
		mileage: "20k",
		thumbnailSrc:
			"https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
		dailyPrice: 50,
		monthlyPrice: 1500,
		gearType: "Auto",
		gas: "Petrol",
	};
  
	return (
		<TopCarsContainer>
			<Title>Explore our top deals</Title>
			<CarsContainer>
        <Car {...testCar}/>
        <Car {...testCar2}/>
        <Car {...testCar}/>
      </CarsContainer>
		</TopCarsContainer>
	);
}
