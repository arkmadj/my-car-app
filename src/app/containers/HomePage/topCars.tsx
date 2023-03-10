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
import { MoonLoader } from "react-spinners";

const TopCarsContainer = styled.div`
	${tw`flex flex-col items-center justify-center w-full max-w-screen-lg px-4 mb-10 md:px-0`}
`;

const Title = styled.h1`
	${tw`text-3xl font-extrabold text-black lg:text-5xl`}
`;

const CarsContainer = styled.div`
	${tw`flex flex-wrap justify-center w-full mt-7 md:mt-10`}
`;

const EmptyCars = styled.div`
	${tw`flex items-center justify-center w-full text-sm text-gray-500`}
`;

const LoadingContainer = styled.div`
	${tw`flex items-center justify-center w-full text-base text-black mt-9`}
`;

const actionDispatch = (dispatch: Dispatch) => ({
	setTopCars: (cars: GetCars_cars[]) => dispatch(setTopCars(cars)),
});

const stateSelector = createSelector(makeSelectTopCars, (topCars) => ({
	topCars,
}));


export function TopCars() {
	const [current, setCurrent] = useState(0);
	const [isLoading, setLoading] = useState(false);

	const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

	const { topCars } = useSelector(stateSelector);
	const { setTopCars } = actionDispatch(useDispatch());

	const fetchTopCars = async () => {
		setLoading(true);
		const cars = await carService.getCars().catch((err) => {});
		if (cars) setTopCars(cars);
		setLoading(false);
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

	const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3);

	return (
		<TopCarsContainer>
			<Title>Explore our top deals</Title>
			{isLoading && (
				<LoadingContainer>
					<MoonLoader loading size={20}/>
				</LoadingContainer>
			)}
			{isEmptyTopCars && !isLoading && (
				<EmptyCars>No available cars at the moment</EmptyCars>
			)}
			{!isEmptyTopCars && !isLoading && (
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
			)}
		</TopCarsContainer>
	);
}
