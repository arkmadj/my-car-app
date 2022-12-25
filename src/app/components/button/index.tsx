import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface IButtonProps {
	theme: "filled" | "outlined";
  text: string
}

const BaseButton = styled.button`
  ${tw`px-5 py-3 m-1 text-xs font-semibold text-white transition-all duration-200 ease-in-out border-2 border-transparent border-solid rounded-md outline-none focus:outline-none`}
`

cn

export function Button(props: IButtonProps) {}
