import { InputHTMLAttributes, useCallback, useState } from "react";
import styled from "styled-components";
import debounce from "@app/utils/debounce";

const InputStyled = styled.input`
    height: 2rem;
    border-radius: 0.5rem;
    border: 1px solid lightblue;
    max-width: 4rem;
    margin: 0.5rem;
    box-sizing: border-box;
`;

export default (props: InputHTMLAttributes<HTMLInputElement>) => {
    return <InputStyled {...props}} />
}