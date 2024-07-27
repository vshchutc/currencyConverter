import { InputHTMLAttributes, useCallback, useEffect, useState } from "react";
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

export default (props: Omit<InputHTMLAttributes<HTMLInputElement>, 'onBlur'> & {onBlur: (value: string) => void;}) => {
    const [tempValue, setTempValue] = useState(props.value);
    const handleChange = useCallback((e) => {
        setTempValue(e.target.value)
    }, [setTempValue]);
    useEffect(() => {
        setTempValue(props.value)
    }, [props.value]);
    const handleBlur = useCallback(e => {
        const value = Math.abs(Number.parseFloat(e.target.value || 0)).toFixed(2);
        props.onBlur(value);
    }, [props.onBlur])
    return <InputStyled type="number" {...props} onChange={handleChange} value={tempValue} onBlur={handleBlur}/>
}