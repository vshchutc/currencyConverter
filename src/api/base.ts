import axios from "axios";
import type { AxiosResponse } from 'axios';

const API_KEY = 'api_key=NHKNUhI53ZApF4IXCOX1DpUj2YTSl2U1';
const BASE_URL = 'https://api.currencybeacon.com/v1';

export const get = (url: string, params?: string): Promise<AxiosResponse<any, any>> => {
    return axios.get(`${BASE_URL}${url}?${API_KEY}${params ? `&${params}`: ''}`);
}

