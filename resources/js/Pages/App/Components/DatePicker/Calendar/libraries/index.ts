import { isValidDate } from '@/libraries';
import { Dispatch, SetStateAction } from 'react';

export type DateStateType = {
    dtVal: Date | number | null;
    month: number;
    year: number;
};

export const updateDateState = (
    date: Date,
    setDateState: Dispatch<SetStateAction<DateStateType>>,
) => {
    const isDateObject = isValidDate(date);
    const _date = isDateObject ? date : new Date();
    setDateState({
        dtVal: isDateObject ? date : null,
        month: _date.getMonth() + 1,
        year: _date.getFullYear(),
    });
};

export * from './handlers';
export * from './hooks';
