import { Year } from '@/Pages/App/Components/DatePicker/Calendar/Header/Year';
import { DateStateType } from '@/Pages/App/Components/DatePicker/Calendar/libraries';
import { isInsideYearRange } from '@/Pages/App/Components/DatePicker/libraries';
import { getNextMonth, getPreviousMonth } from '@/libraries';
import { ComponentProps, MouseEventHandler } from 'react';

type DateStateFn = (value: React.SetStateAction<DateStateType>) => void;

export const makeMonthChange = (
    dateState: DateStateType,
    setDateState: DateStateFn,
) => {
    return (month: number) => {
        setDateState({
            month: month + 1,
            year: dateState.year,
            dtVal: dateState.dtVal,
        });
    };
};

export const makeYearChange = (
    dateState: DateStateType,
    setDateState: DateStateFn,
) => {
    return (year: number) => {
        setDateState({
            month: dateState.month,
            year: year,
            dtVal: dateState.dtVal,
        });
    };
};

type YearProps = Required<ComponentProps<typeof Year>>;

export const makeLeftByMonth = (
    dateState: DateStateType,
    setDateState: DateStateFn,
    qtyYears: YearProps['qtyYears'],
    yearRangeType: YearProps['yearRangeType'],
): MouseEventHandler<HTMLButtonElement> => {
    return (event) => {
        event.preventDefault();
        const previousMonth = getPreviousMonth(dateState.month, dateState.year);
        if (!isInsideYearRange(previousMonth.year, qtyYears, yearRangeType)) {
            return;
        }
        setDateState({
            month: previousMonth.month,
            year: previousMonth.year,
            dtVal: dateState.dtVal,
        });
    };
};

export const makeRightByMonth = (
    dateState: DateStateType,
    setDateState: DateStateFn,
    qtyYears: YearProps['qtyYears'],
    yearRangeType: YearProps['yearRangeType'],
): MouseEventHandler<HTMLButtonElement> => {
    return (event) => {
        event.preventDefault();
        const nextMonth = getNextMonth(dateState.month, dateState.year);
        if (!isInsideYearRange(nextMonth.year, qtyYears, yearRangeType)) {
            return;
        }
        setDateState({
            month: nextMonth.month,
            year: nextMonth.year,
            dtVal: dateState.dtVal,
        });
    };
};

export const makeLeftByYear = (
    dateState: DateStateType,
    setDateState: DateStateFn,
    qtyYears: YearProps['qtyYears'],
    yearRangeType: YearProps['yearRangeType'],
): MouseEventHandler<HTMLButtonElement> => {
    return (event) => {
        event.preventDefault();
        const previousYear = dateState.year - 1;
        if (!isInsideYearRange(previousYear, qtyYears, yearRangeType)) {
            return;
        }
        setDateState({
            month: dateState.month,
            year: previousYear,
            dtVal: dateState.dtVal,
        });
    };
};

export const makeRightByYear = (
    dateState: DateStateType,
    setDateState: DateStateFn,
    qtyYears: YearProps['qtyYears'],
    yearRangeType: YearProps['yearRangeType'],
): MouseEventHandler<HTMLButtonElement> => {
    return (event) => {
        event.preventDefault();
        const nextYear = dateState.year + 1;
        if (!isInsideYearRange(nextYear, qtyYears, yearRangeType)) {
            return;
        }
        setDateState({
            month: dateState.month,
            year: nextYear,
            dtVal: dateState.dtVal,
        });
    };
};
