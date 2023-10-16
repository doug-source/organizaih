import {
    DateStateType,
    updateDateState,
} from '@/Pages/App/Components/DatePicker/Calendar/libraries';
import { buildTrimonthDays, isSameDay } from '@/libraries/toolbox/Date';
import { Dispatch, MouseEvent, SetStateAction } from 'react';

export const goToDate = (
    evt: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
    date: Date,
    onDateChange: (date: Date) => void,
    setDateState: Dispatch<SetStateAction<DateStateType>>,
    { dtVal }: DateStateType,
) => {
    evt.preventDefault();
    if (dtVal instanceof Date && isSameDay(date, dtVal)) {
        updateDateState(date, setDateState);
    }
    onDateChange(date);
};

export const getCalendarDates = ({ dtVal, month, year }: DateStateType) => {
    if (dtVal === null || typeof dtVal === 'number') {
        return [];
    }
    const calendarMonth = month ?? dtVal.getMonth() + 1;
    const calendarYear = year ?? dtVal.getFullYear();
    return buildTrimonthDays(calendarMonth, calendarYear);
};

export type MonthDataItem = readonly [number, number, number];

export const getCalendarMonths = (
    months: readonly string[],
    { dtVal, year }: DateStateType,
): ReadonlyArray<MonthDataItem> => {
    if (dtVal === null || typeof dtVal === 'number') {
        return [];
    }
    const calendarYear = year ?? dtVal.getFullYear();
    return months.reduce<MonthDataItem[]>((acc, _, monthIndex) => {
        acc.push([calendarYear, monthIndex, 1]);
        return acc;
    }, []);
};

export * from './handlers';
