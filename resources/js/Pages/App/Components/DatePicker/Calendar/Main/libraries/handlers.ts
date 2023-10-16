import { goToDate } from '@/Pages/App/Components/DatePicker/Calendar/Main/libraries';
import { DateStateType } from '@/Pages/App/Components/DatePicker/Calendar/libraries';
import { Dispatch, MouseEvent, SetStateAction } from 'react';

export const makeDateChange = (
    onDataChange: (date: Date) => void,
    setDateState: Dispatch<SetStateAction<DateStateType>>,
    dateState: DateStateType,
) => {
    return (
        event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
        date: Date,
    ) => goToDate(event, date, onDataChange, setDateState, dateState);
};
