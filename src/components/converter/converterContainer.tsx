import useCurrencyStore from '@app/stores/currencyStore';
import {useEffect, useCallback} from 'react';
import ConverterCurrencyControls from '@app/components/converter/converterCurrencyControls';
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
    const {
        error, 
        loadCurrencyOptions,
        wereCurrenciesLoaded,
        setCurrencyACode,
        currencyASum,
        currencyBSum,
        currencyACode,
        currencyBCode,
        setCurrencyBCode,
        performCurrencyAConversion,
        performCurrencyBConversion,
    } = useCurrencyStore();
    const getCurrencyOptions = useCallback(async () => {
        await loadCurrencyOptions();
    }, []);

    useEffect(() => {
        getCurrencyOptions();
    }, [])
    if (error){
        return <Container>{error}</Container>
    }
    return (<Container>
        {wereCurrenciesLoaded
            ? <ControlsWrapper>
                <ConverterCurrencyControls
                    onAmountChange={performCurrencyAConversion}
                    currency={currencyACode}
                    amount={currencyASum}
                    onCurrencyChange={setCurrencyACode}
                />
                <InfoWrapper>is equal to</InfoWrapper>
                <ConverterCurrencyControls
                    onAmountChange={performCurrencyBConversion}
                    currency={currencyBCode}
                    amount={currencyBSum}
                    onCurrencyChange={setCurrencyBCode}
                />
            </ControlsWrapper>
        : 'Loading'}
    </Container>)
};

export default ConverterContainer;