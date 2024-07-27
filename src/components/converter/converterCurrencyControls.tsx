import useCurrencyStore from "@app/stores/currencyStore";
import Dropdown from "@app/components/shared/dropdown";
import NumberInput from "@app/components/shared/numberInput";
import { CurrencyCode } from "@app/models/currency";

type ConverterCurrencyControlsProps = {
    amount: string,
    currency: CurrencyCode,
    onAmountChange: (amount: string) => void,
    onCurrencyChange: (code: CurrencyCode) => void,
};

const ConverterCurrencyControls = (props: ConverterCurrencyControlsProps) => {
    const {currencyOptions} = useCurrencyStore();

    return (<div>
        <NumberInput value={props.amount} onChange={e => props.onAmountChange(e.target.value)}/>
        <Dropdown options={currencyOptions} value={props.currency} onChange={props.onCurrencyChange}/>
    </div>)
};

export default ConverterCurrencyControls;