const digitsAfterDecimal = (num: number): number => {
    if (Number.isInteger(num) || !/^.*\.\d+$/g.test(num.toString())) {
        return 0;
    }
    return num.toString().replace(/^.*\.(\d+)$/g, '$1').length;
};

const digitsBeforeDecimal = (num: number): number => {
    if (Number.isInteger(num) || !/^.*\.\d+$/g.test(num.toString())) {
        return num.toString().length;
    }
    return num.toString().replace(/^(.+)\.\d+$/g, '$1').length;
};

export const isFloatValid = (value: number, scale: number, precision: number): boolean => {
    const decimalDigits = digitsAfterDecimal(value);
    if (decimalDigits > scale) {
        return false;
    }
    const integerDigits = digitsBeforeDecimal(value);
    const maxIntegerDigits = +(precision - scale).toFixed();
    if (integerDigits > maxIntegerDigits) {
        return false;
    }
    return true;
};

export const formatCurrency = (
    value: number,
    locale: string,
    currency: string,
    minimumFractionDigits: number = 2,
    maximumFractionDigits: number = 2,
) => {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
        minimumFractionDigits,
        maximumFractionDigits,
    }).format(value);
};
