export const objectToAPIParamString = (obj: {[key: string] : string}): string => {
    return Object.entries(obj).map((keyValue) => {
        return `${keyValue[0]}=${keyValue[1]}`
    }).join('&');
}