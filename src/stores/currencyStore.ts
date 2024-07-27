import { create } from 'zustand'
import { loadCurrencyList, convert} from '@app/api/currency';
import { CurrencyCode, CurrencyOption } from '@app/models/currency';
import currencyMapToCurrencyOptions from '@app/utils/currencyMapToCurrencyOptions';

enum ConvertAmountPropertiesEnum {
    CONVERT_TO_AMOUNT = 'convertToAmount',
    CONVERT_FROM_AMOUNT = 'convertToAmount',
};
interface CurrencyState {
    wereCurrenciesLoaded: boolean;
    currencyOptions: CurrencyOption[],
    loadCurrencyOptions: () => Promise<void>,
    error: string | null;
    convert: (from: CurrencyCode, to: CurrencyCode, amount: string, currencyToUpdate: 'convertToAmount' | 'convertFromAmount') => Promise<void>,
    convertToCurrency: CurrencyCode | null;
    setConvertToCurrency: (code: CurrencyCode) => void;
    convertFromCurrency: CurrencyCode | null;
    setConvertFromCurrency: (code: CurrencyCode) => void;
    convertFromAmount: string;
    setConvertFromAmount: (amount: string) => void;
    convertToAmount: string;
    setConvertToAmount: (amount: string) => void;
}

const useCurrencyStore = create<CurrencyState>()((set, get) => ({
    currencyOptions: [],
    wereCurrenciesLoaded: false,
    loadCurrencyOptions: async () => {
        try {
            const currencyMap = await loadCurrencyList();
            const currencyOptions = currencyMapToCurrencyOptions(currencyMap);
            set({
                currencyOptions,
                wereCurrenciesLoaded: true,
                convertToCurrency: currencyOptions[0].value,
                convertFromCurrency: currencyOptions[1].value,
            })
        } catch (err){
            set({
                error: 'Something went wrong. Please, refresh the page',
            });
        }
    },
    convert: async (from: CurrencyCode, to: CurrencyCode, amount: string, currencyToUpdate: 'convertToAmount'|'convertFromAmount') => {
        const value = await convert(from, to, amount);
        set({
            [currencyToUpdate]: value.toFixed(2)
        })
    },
    convertToCurrency: null,
    convertFromCurrency: null,
    convertToAmount: '0.00',
    convertFromAmount: '0.00',
    error: null,
    setConvertToCurrency: (code: CurrencyCode) => {
        const {convertToAmount, convertFromCurrency, convert} = get();
        set({convertToCurrency: code});
        convert(code, convertFromCurrency, Number(convertToAmount), 'convertFromAmount');
    },
    setConvertFromCurrency: (code: CurrencyCode) => {
        const {convertFromAmount, convertToCurrency, convert} = get();
        set({convertFromCurrency: code});
        convert(code, convertToCurrency, Number(convertFromAmount), 'convertToAmount');
    },
    setConvertToAmount: async(amount: string) => {
        const {convertToCurrency, convertFromCurrency, convert} = get();
        set({convertToAmount: amount});
        convert(convertToCurrency, convertFromCurrency, Number(amount), 'convertFromAmount');
    },
    setConvertFromAmount: (amount: string) => {
        const {convertToCurrency, convertFromCurrency, convert} = get();
        set({convertFromAmount: amount});
        convert(convertFromCurrency, convertToCurrency, amount, 'convertToAmount');
    }
}))

export default useCurrencyStore;