import {get} from '@app/api/base';
import { CurrencyMap } from '@app/models/currency';
import { objectToAPIParamString } from '@app/utils/objectToApiParamString';

export const loadCurrencyList = async () : Promise<CurrencyMap> => {
    const {data} = await get('/currencies');
    return data;
}

export const convert = async (params: {from: string, to: string, amount: string}) : Promise<number> => {
    const {data} = await get('/convert', objectToAPIParamString(params));
    return data.value;
}