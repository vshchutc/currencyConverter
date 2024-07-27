export interface CurrencyData {
    code: string,
    decimal_mark: string,
    id: number,
    name: string,
    precision: number,
    short_code: string,
    subunit: number,
    symbol: string,
    symbol_first: boolean,
    thousands_separator: string,
}
  
export type CurrencyMap = {
    [key: string]: CurrencyData;
};
  
export type CurrencyCode = CurrencyMap[keyof CurrencyMap]['code'];

export interface CurrencyOption {
    value: CurrencyCode;
    label: CurrencyMap[keyof CurrencyMap]['name'],
    id: CurrencyMap[keyof CurrencyMap]['id'],
};