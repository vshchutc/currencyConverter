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

export default (props: InputHTMLAttributes<HTMLInputElement> & {processNewValue: (value: string) => void;}) => {
    const {value, processNewValue, ...rest} = props;
    const [tempValue, setTempValue] = useState(props.value);

    const handleChange = useCallback((e) => {
        const regexValidForConversion = /^(?:[.])?\d+(?:\d{3})*(?:[.]\d+)?$/;
        const regexValidForInput = /^(|[.]|\d+[.])?$/;
        const {value: targetValue} = e.target;
        if(regexValidForConversion.test(targetValue)){
            processNewValue(targetValue)
            setTempValue(value)
        } else if (regexValidForInput.test(targetValue)) {
            setTempValue(targetValue)
        }
    }, [setTempValue, processNewValue]);

    useEffect(() => {
        setTempValue(props.value)
    }, [props.value]);
    
    return (<InputStyled
        onChange={handleChange}
        value={tempValue}
        {...rest}
    />);
}