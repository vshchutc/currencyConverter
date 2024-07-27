import { CurrencyData, CurrencyMap, CurrencyOption } from "@app/models/currency";

export default (currencyMap: CurrencyMap) : CurrencyOption[] => {
    return Object.values(currencyMap).map((currencyData: CurrencyData) => ({
        label: currencyData.name,
        value: currencyData.short_code,
        id: currencyData.id,
    }))
}