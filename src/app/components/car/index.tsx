import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../../typings/car";

interface ICarProps extends ICar{}

const CarContainer = styled.div`
  min-width: 16.5em;
  min-height: 22.2em;
  max-height: 22.2em;
  box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
  ${tw`flex flex-col items-center p-3 pb-4 m-1 bg-white rounded-md sm:m-3 md:m-6`}
`

const CarThumbnail = styled.div`
  width: 100%;
  height: auto;

  img{
    width: 100%;
    height: 100%;
  }
`

const CarName = styled.h3`
  ${tw`my-1 text-base font-bold text-black`}
`

export function Car(props: ICarProps){

}