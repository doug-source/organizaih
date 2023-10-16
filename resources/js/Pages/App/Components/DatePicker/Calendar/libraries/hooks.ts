import {
    DateStateType,
    updateDateState,
} from '@/Pages/App/Components/DatePicker/Calendar/libraries';
import { useEffect, useState } from 'react';

export const useDateState = (date: Date) => {
    const [dateState, setDateState] = useState<DateStateType>({
        dtVal: 0,
        month: 0,
        year: 0,
    });
    useEffect(() => {
        if (dateState.dtVal !== 0) {
            return;
        }
        updateDateState(date, setDateState);
    }, [date, dateState, setDateState]);
    return [dateState, setDateState] as const;
};
