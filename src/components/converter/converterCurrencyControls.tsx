import useCurrencyStore from "@app/stores/currencyStore";
import Dropdown from "@app/components/shared/dropdown";
import CurrencyInput from "@app/components/shared/currencyInput";
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
        <CurrencyInput
            value={props.amount}
            processNewValue={props.onAmountChange}
        />
        <Dropdown
            options={currencyOptions}
            value={props.currency}
            onChange={props.onCurrencyChange}
        />
    </div>)
};

export default ConverterCurrencyControls;