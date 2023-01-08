import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../../typings/car";
import { Car } from "../../components/car";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";
import carService from "../../services/carService";
import { GetCars_cars } from "../../services/carService/__generated__/GetCars";
import { setTopCars } from "./slice";
import { useDispatch, useSelector } from "react-redux";
import { createSelector, Dispatch } from "@reduxjs/toolkit";
import { makeSelectTopCars } from "./selectors";

const TopCarsContainer = styled.div`
	${tw`flex flex-col items-center justify-center w-full max-w-screen-lg px-4 mb-10 md:px-0`}
`;

const Title = styled.h1`
	${tw`text-3xl font-extrabold text-black lg:text-5xl`}
`;

const CarsContainer = styled.div`
	${tw`flex flex-wrap justify-center w-full mt-7 md:mt-10`}
`;

const actionDispatch = (dispatch: Dispatch) => ({
	setTopCars: (cars: GetCars_cars[]) => dispatch(setTopCars(cars)),
});

const stateSelector = createSelector(makeSelectTopCars, (topCars) => ({
	topCars,
}));

export function TopCars() {
	const [current, setCurrent] = useState(0);

	const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

	const { topCars } = useSelector(stateSelector);
	const { setTopCars } = actionDispatch(useDispatch());

	const fetchTopCars = async () => {
		const cars = await carService.getCars().catch((err) => {
			console.log("Error: ", err);
		});
		if (cars) setTopCars(cars);
	};

	useEffect(() => {
		fetchTopCars();
	}, []);

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

	const isEmptyTopCars = !topCars || topCars.length === 0;

	const cars =
		(!isEmptyTopCars &&
			topCars.map((car) => <Car {...car} thumbnailSrc={car.thumbnailURL} />)) ||
		[];

	// const cars = [
	// 	<Car {...testCar} />,
	// 	<Car {...testCar2} />,
	// 	<Car {...testCar} />,
	// 	<Car {...testCar2} />,
	// 	<Car {...testCar} />,
	// 	<Car {...testCar2} />,
	// 	<Car {...testCar} />,
	// ];

	const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3);

	if(isEmptyTopCars) return null

	return (
		<TopCarsContainer>
			<Title>Explore our top deals</Title>
			<CarsContainer>
				<Carousel
					value={current}
					onChange={setCurrent}
					slides={cars}
					plugins={[
						"clickToChange",
						{
							resolve: slidesToShowPlugin,
							options: {
								numberOfSlides: 3,
							},
						},
					]}
					breakpoints={{
						640: {
							plugins: [
								{
									resolve: slidesToShowPlugin,
									options: {
										numberOfSlides: 1,
									},
								},
							],
						},
						900: {
							plugins: [
								{
									resolve: slidesToShowPlugin,
									options: {
										numberOfSlides: 2,
									},
								},
							],
						},
					}}
				/>
				<Dots value={current} onChange={setCurrent} number={numberOfDots} />
				{/* <Car {...testCar}/>
        <Car {...testCar2}/>
        <Car {...testCar}/> */}
			</CarsContainer>
		</TopCarsContainer>
	);
}
