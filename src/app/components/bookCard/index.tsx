import React, { useState } from "react";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../button";
import { Marginer } from "../marginer";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CardContainer = styled.div`
	min-height: 4.3em;
	box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
	${tw`flex items-center justify-center px-2 py-1 bg-white rounded-md md:px-9 md:py-2`}
`;

const ItemContainer = styled.div`
	${tw`relative flex items-center`}
`;

const Icon = styled.span`
	${tw`mr-1 text-xs text-red-500 fill-current md:text-base md:mr-3`}
`;

const Name = styled.span`
	${tw`text-xs text-gray-600 cursor-pointer md:text-sm`}
`;

const LineSeperator = styled.span`
	width: 2px;
	height: 45%;
	${tw`mx-2 bg-gray-300 md:mx-5`}
`;

const DateCalendar = styled(Calendar)`
	position: absolute;
	max-width: none;
	top: 3.5em;
	left: -2em;
`;
export function BookCard() {
	const [startDate, setStartDate] = useState<Date>(new Date());
	const [isStartDateOpen, setStartDateOpen] = useState(false);
	const [returnDate, setReturnDate] = useState<Date>(new Date());
	const [isReturnDateOpen, setReturnDateOpen] = useState(false);

	const toggleStartDateCalendar = () => {
		setStartDateOpen(!isStartDateOpen);
	};

	const toggleReturnDateCalendar = () => {
		setReturnDateOpen(!isReturnDateOpen);
	};

	return (
		<CardContainer>
			<ItemContainer>
				<Icon>
					<FontAwesomeIcon icon={faCalendarAlt} />
				</Icon>
				<Name onClick={toggleStartDateCalendar}>Pick up date</Name>
				{isStartDateOpen && (
					<DateCalendar value={startDate} onChange={setStartDate} />
				)}
			</ItemContainer>
			<LineSeperator />
			<ItemContainer>
				<Icon>
					<FontAwesomeIcon icon={faCalendarAlt} />
				</Icon>
				<Name onClick={toggleReturnDateCalendar}>Return date</Name>
				{isReturnDateOpen && (
					<DateCalendar value={returnDate} onChange={setReturnDate} />
				)}
			</ItemContainer>
			<Marginer direction="horizontal" margin="2em" />
			<Button text="Book ride" />
		</CardContainer>
	);
}
