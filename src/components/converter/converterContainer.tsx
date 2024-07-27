import { CurrencyCode, CurrencyData } from '@app/models/currency';
import useCurrencyStore from '@app/stores/currencyStore';
import { useEffect, useState, useCallback } from 'react';
import Dropdown from '@app/components/shared/dropdown';
import Input from '../shared/input';
import ConverterCurrencyControls from './converterCurrencyControls';

const ConverterContainer = () => {
    const {loadCurrencyOptions, currencyOptions, setConvertFromCurrency, convertFromAmount,convertToAmount, convertFromCurrency, convertToCurrency, setConvertToCurrency,setConvertFromAmount, setConvertToAmount} = useCurrencyStore();
    const getCurrencyOptions = useCallback(async () => {
        await loadCurrencyOptions();
    }, []);

    useEffect(() => {
        getCurrencyOptions();
    }, [])

    return (<>{currencyOptions.length ? <>
        <ConverterCurrencyControls onAmountChange={setConvertFromAmount} currency={convertFromCurrency} amount={convertFromAmount.toString() } onCurrencyChange={setConvertFromCurrency}/>
        <ConverterCurrencyControls onAmountChange={setConvertToAmount} currency={convertToCurrency} amount={convertToAmount.toString() } onCurrencyChange={setConvertToCurrency}/>
</> : 'Loading'}
        
    </>)
};

export default ConverterContainer;