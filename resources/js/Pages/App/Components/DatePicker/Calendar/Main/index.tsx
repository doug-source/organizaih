import { MonthDays } from '@/Pages/App/Components/DatePicker/Calendar/Main/MonthDays';
import { Months } from '@/Pages/App/Components/DatePicker/Calendar/Main/Months';
import { WeekDays } from '@/Pages/App/Components/DatePicker/Calendar/Main/WeekDays';
import {
    getCalendarDates,
    getCalendarMonths,
    makeDateChange,
} from '@/Pages/App/Components/DatePicker/Calendar/Main/libraries';
import {
    CalendarGrid_,
    CalendarMonthGrid_,
} from '@/Pages/App/Components/DatePicker/Calendar/Main/styling';
import { DateStateType } from '@/Pages/App/Components/DatePicker/Calendar/libraries';
import { DateManager } from '@/libraries/toolbox/Date';
import { Dispatch, MutableRefObject, SetStateAction } from 'react';

const MainComponent = () => <></>;

type GenericProps = {
    calMngRef: MutableRefObject<DateManager>;
    dateState: DateStateType;
    setDateState: Dispatch<SetStateAction<DateStateType>>;
    onDataChange: (date: Date) => void;
};

export const Main = Object.assign(MainComponent, {
    WeekMonthDay: ({
        calMngRef,
        dateState,
        setDateState,
        onDataChange,
    }: GenericProps) => {
        return (
            <CalendarGrid_>
                <WeekDays names={calMngRef.current.WEEKS.short} />
                <MonthDays
                    dateArgs={getCalendarDates(dateState)}
                    dateState={dateState}
                    onDateChange={makeDateChange(
                        onDataChange,
                        setDateState,
                        dateState,
                    )}
                />
            </CalendarGrid_>
        );
    },
    Months: ({
        calMngRef,
        dateState,
        setDateState,
        onDataChange,
    }: GenericProps) => {
        return (
            <CalendarMonthGrid_>
                <Months
                    dateState={dateState}
                    months={calMngRef.current.MONTHS.long}
                    dateArgs={getCalendarMonths(
                        calMngRef.current.MONTHS.long,
                        dateState,
                    )}
                    onMonthChange={makeDateChange(
                        onDataChange,
                        setDateState,
                        dateState,
                    )}
                />
            </CalendarMonthGrid_>
        );
    },
});
