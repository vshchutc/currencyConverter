import { isValidCurrencyFormat, isValidCurrencyInputValue } from "@app/utils/currencyInputValidators.ts";
import { InputHTMLAttributes, useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const InputStyled = styled.input`
    height: 2rem;
    border-radius: 0.5rem;
    border: 1px solid lightblue;
    max-width: 4rem;
    margin: 0.5rem;
    box-sizing: border-box;
`;

const CurrencyInput = (props: InputHTMLAttributes<HTMLInputElement> & {onValidChange: (value: string) => void;}) => {
    const {value, onValidChange, ...rest} = props;
    const [tempValue, setTempValue] = useState(props.value);

    const handleChange = useCallback((e) => {
        const {value: targetValue} = e.target;
        if(isValidCurrencyFormat(targetValue)){
            onValidChange(targetValue)
            setTempValue(value)
        } else if (isValidCurrencyInputValue(targetValue)) {
            setTempValue(targetValue)
        }
    }, [setTempValue, onValidChange, value]);

    useEffect(() => {
        setTempValue(props.value)
    }, [props.value]);
    
    return (<InputStyled
        onChange={handleChange}
        value={tempValue}
        {...rest}
    />);
};

export default CurrencyInput;