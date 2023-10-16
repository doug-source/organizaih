import { formatDateByLocale, formatMonthYearDate } from '@/libraries';
import { DateManager } from '@/libraries/toolbox/Date';
import { YearRangeType } from '@/libraries/types';

const buildInputDateValue = (locale: string, date: Date | null | undefined) => {
    if (!date) {
        return '';
    }
    return formatDateByLocale(locale.replace('_', '-'), date) ?? '';
};

export const makeInputDateValue = (
    locale: string,
    months: readonly string[],
    showMonthYear: boolean,
    date?: Date | null,
) => {
    if (!date) {
        return '';
    }
    if (showMonthYear) {
        return formatMonthYearDate(date, months) ?? '';
    }
    return buildInputDateValue(locale, date);
};

export const isInsideYearRange = (
    year: number,
    qtyYears: number,
    type: YearRangeType,
) => {
    const yearCurrent = DateManager.YEAR_CURRENT;
    if (type === 'after') {
        return year >= yearCurrent && year < yearCurrent + qtyYears;
    }
    if (type === 'before') {
        return year <= yearCurrent && year > yearCurrent - qtyYears;
    }
    return year >= yearCurrent - qtyYears && year <= yearCurrent + qtyYears;
};
