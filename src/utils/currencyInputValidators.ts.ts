export const isValidCurrencyFormat = (value: string) : boolean => {
    const regexValidCurrencyFormat = /^(?:[.])?\d+(?:\d{3})*(?:[.]\d+)?$/;
    return regexValidCurrencyFormat.test(value);
};

export const isValidCurrencyInputValue = (value: string) : boolean => {
    const regexValidCurrencyInputValue = /^(|[.]|\d+[.])?$/;
    return regexValidCurrencyInputValue.test(value);
};