import { InputHTMLAttributes } from "react";
import styled from "styled-components";

const InputStyled = styled.input`
    height: 2rem;
    border-radius: 0.5rem;
    border: 1px solid lightblue;
    max-width: 4rem;
    margin: 0.5rem;
    box-sizing: border-box;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    &[type=number] {
        -moz-appearance: textfield;
    }
`;

export default (props: InputHTMLAttributes<HTMLInputElement>) => {
    return <InputStyled type="number" {...props} />
}