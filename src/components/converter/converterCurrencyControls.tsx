import useCurrencyStore from "@app/stores/currencyStore";
import Dropdown from "../shared/dropdown";
import Input from "../shared/input";
import { CurrencyCode } from "@app/models/currency";

type ConverterCurrencyControlsProps = {
    amount: string,
    currency: CurrencyCode,
    onAmountChange: (amount: string) => void,
    onCurrencyChange: (code: CurrencyCode) => void,
};

const ConverterCurrencyControls = (props: ConverterCurrencyControlsProps) => {
    const {currencyOptions} = useCurrencyStore();

    return (<>
        <Input value={props.amount} onChange={e => props.onAmountChange(e.target.value)}/>
        <Dropdown options={currencyOptions} value={props.currency} onChange={props.onCurrencyChange}/>
    </>)
};

export default ConverterCurrencyControls;