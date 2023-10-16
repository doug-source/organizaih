import { Year } from '@/Pages/App/Components/DatePicker/Calendar/Header/Year';
import { YearRangeType } from '@/libraries/types';
import { ComponentProps } from 'react';

const yearsUp = (yearCurrent: number, qtyYears: number) => {
    const years: number[] = [];
    for (let year = yearCurrent; year < qtyYears; year++) {
        years.push(year);
    }
    return years;
};
const yearsDown = (yearCurrent: number, qtyYears: number) => {
    const years: number[] = [];
    for (let year = yearCurrent; year > yearCurrent - qtyYears; year--) {
        years.unshift(year);
    }
    return years;
};
const yearsMid = (yearCurrent: number, qtyYears: number) => {
    const years: number[] = [yearCurrent];
    let counter = 1;
    while (years.length < Math.max(qtyYears, 1)) {
        years.push(yearCurrent + counter);
        years.unshift(yearCurrent - counter);
        counter++;
    }
    return years;
};

type YearProps = ComponentProps<typeof Year>;

export function buildYearList(
    typeYear: YearRangeType,
    qtyYears: YearProps['qtyYears'] = 0,
) {
    const yearCurrent = new Date().getFullYear();
    if (typeYear === 'after') {
        return yearsUp(yearCurrent, qtyYears);
    }
    if (typeYear === 'before') {
        return yearsDown(yearCurrent, qtyYears);
    }
    return yearsMid(yearCurrent, qtyYears);
}
