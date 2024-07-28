import { create } from 'zustand'
import { loadCurrencyList, convert} from '@app/api/currency';
import { CurrencyCode, CurrencyOption } from '@app/models/currency';
import currencyMapToCurrencyOptions from '@app/utils/currencyMapToCurrencyOptions';

interface CurrencyState {
    wereCurrenciesLoaded: boolean;
    currencyOptions: CurrencyOption[],
    loadCurrencyOptions: () => Promise<void>,
    error: string | null;
    currencyBCode: CurrencyCode | null;
    setCurrencyBCode: (code: CurrencyCode) => void;
    currencyACode: CurrencyCode | null;
    setCurrencyACode: (code: CurrencyCode) => void;
    currencyASum: string;
    currencyBSum: string;
    performCurrencyAConversion: (sumToConvert: string) => Promise<void>;
    performCurrencyBConversion: (sumToConvert: string) => Promise<void>;
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
                currencyBCode: currencyOptions[0].value,
                currencyACode: currencyOptions[1].value,
            })
        } catch (err){
            set({
                error: 'Something went wrong. Please, refresh the page',
            });
        }
    },
    currencyBCode: null,
    currencyACode: null,
    currencyBSum: '0.00',
    currencyASum: '0.00',
    error: null,
    setCurrencyBCode: (code: CurrencyCode) => {
        const {currencyBSum, performCurrencyBConversion} = get();
        set({currencyBCode: code});
        performCurrencyBConversion(currencyBSum);
    },
    setCurrencyACode: (code: CurrencyCode) => {
        const {currencyASum, performCurrencyAConversion} = get();
        set({currencyACode: code});
        performCurrencyAConversion(currencyASum);
    },
    performCurrencyAConversion: async (sumToConvert: string) => {
        try {
            const {currencyACode, currencyBCode} = get();
            set({currencyASum: sumToConvert, currencyBSum: ''});
            const value = await convert(currencyACode, currencyBCode, sumToConvert);
            set({currencyBSum: value.toFixed(2)})
        } catch (err){
            set({
                error: 'Something went wrong. Unable to convert. Please, refresh the page',
            });
        }
    },
    performCurrencyBConversion: async (sumToConvert: string) => {
        try {
            const {currencyACode, currencyBCode} = get();
            set({currencyBSum: sumToConvert, currencyASum: ''});
            const value = await convert(currencyBCode, currencyACode, sumToConvert);
            set({currencyASum: value.toFixed(2)})
        } catch (err){
            set({
                error: 'Something went wrong. Unable to convert. Please, refresh the page',
            });
        }
    }
}))

export default useCurrencyStore;