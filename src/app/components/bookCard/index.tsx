import React, { useState } from "react";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { Button } from "../button";
import { Marginer } from "../marginer";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { SCREENS } from "../responsive";

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

const SmallIcon = styled.span`
	${tw`ml-1 text-xs text-gray-500 fill-current md:text-base`}
`;

const Name = styled.span`
	${tw`text-xs text-gray-600 cursor-pointer select-none md:text-sm`}
`;

const LineSeperator = styled.span`
	width: 2px;
	height: 45%;
	${tw`mx-2 bg-gray-300 md:mx-5`}
`;

const DateCalendar = styled(Calendar)<{ offset?: boolean }>`
	user-select: none;
	position: absolute;
	max-width: none;
	top: 3.5em;
	left: 0;
	${({ offset }) =>
		offset &&
		css`
			left: -7.35em;
		`}

	@media (min-width: ${SCREENS.md}) {
		top: 3.5em;
		left: -2em;
	}
`;
export function BookCard() {
	const [startDate, setStartDate] = useState<Date>(new Date());
	const [isStartDateOpen, setStartDateOpen] = useState(false);
	const [returnDate, setReturnDate] = useState<Date>(new Date());
	const [isReturnDateOpen, setReturnDateOpen] = useState(false);

	const toggleStartDateCalendar = () => {
		setStartDateOpen(!isStartDateOpen);
		if (isReturnDateOpen) setReturnDateOpen(false);
	};

	const toggleReturnDateCalendar = () => {
		setReturnDateOpen(!isReturnDateOpen);
		if (isStartDateOpen) setStartDateOpen(false);
	};

	return (
		<CardContainer>
			<ItemContainer>
				<Icon>
					<FontAwesomeIcon icon={faCalendarAlt} />
				</Icon>
				<Name onClick={toggleStartDateCalendar}>Pick up date</Name>
				<SmallIcon>
					<FontAwesomeIcon icon={isStartDateOpen ? faCaretUp : faCaretDown} />
				</SmallIcon>
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
				<SmallIcon>
					<FontAwesomeIcon icon={isReturnDateOpen ? faCaretUp : faCaretDown} />
				</SmallIcon>
				{isReturnDateOpen && (
					<DateCalendar offset={true} value={returnDate} onChange={setReturnDate} />
				)}
			</ItemContainer>
			<Marginer direction="horizontal" margin="2em" />
			<Button text="Book ride" />
		</CardContainer>
	);
}
