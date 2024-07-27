import {get} from '@app/api/base';
import { CurrencyMap } from '@app/models/currency';

export const loadCurrencyList = async () : Promise<CurrencyMap> => {
    const {data} = await get('/currencies');
    return data;
}

export const convert = async (from: string, to: string, amount: number) : Promise<number> => {
    const {data} = await get('/convert', `to=${to}&from=${from}&amount=${amount}`);
    return data.value;
}