import { CurrencyData, CurrencyMap, CurrencyOption } from "@app/models/currency";

const currencyMapToCurrencyOptions = (currencyMap: CurrencyMap) : CurrencyOption[] => {
    return Object.values(currencyMap).map((currencyData: CurrencyData) => ({
        label: `${currencyData.name} (${currencyData.short_code})`,
        value: currencyData.short_code,
        id: currencyData.code,
    })).sort((item1, item2) => item1.label > item2.label ? 1 : -1);
};

export default currencyMapToCurrencyOptions;