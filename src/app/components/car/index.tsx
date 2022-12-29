import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../../typings/car";

interface ICarProps extends ICar{}

const CarContainer = styled.div`
  ${tw`flex flex-col items-center p-3 pb-4 m-1 bg-white rounded-md sm:m-3 md:m-6`}
`

export function Car(props: ICarProps){

}