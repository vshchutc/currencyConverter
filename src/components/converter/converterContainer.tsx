import useCurrencyStore from '@app/stores/currencyStore';
import {useEffect, useCallback} from 'react';
import ConverterCurrencyControls from './converterCurrencyControls';
import styled from 'styled-components';

const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 2rem;
`;

const ControlsWrapper = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-around;
    border: 2px solid blue;
    border-radius: 0.5rem;
    padding: 3rem 1rem;
`;
const InfoWrapper = styled.div`
    margin: 0 1rem;
`;
const ConverterContainer = () => {
    const {loadCurrencyOptions, currencyOptions, setConvertFromCurrency, convertFromAmount,convertToAmount, convertFromCurrency, convertToCurrency, setConvertToCurrency,setConvertFromAmount, setConvertToAmount} = useCurrencyStore();
    const getCurrencyOptions = useCallback(async () => {
        await loadCurrencyOptions();
    }, []);

    useEffect(() => {
        getCurrencyOptions();
    }, [])

    return (<Container>{currencyOptions.length ? <ControlsWrapper>
        <ConverterCurrencyControls onAmountChange={setConvertFromAmount} currency={convertFromCurrency} amount={convertFromAmount.toString() } onCurrencyChange={setConvertFromCurrency}/>
        <InfoWrapper>is equal to</InfoWrapper>
        <ConverterCurrencyControls onAmountChange={setConvertToAmount} currency={convertToCurrency} amount={convertToAmount.toString() } onCurrencyChange={setConvertToCurrency}/>
</ControlsWrapper> : 'Loading'}
        
    </Container>)
};

export default ConverterContainer;