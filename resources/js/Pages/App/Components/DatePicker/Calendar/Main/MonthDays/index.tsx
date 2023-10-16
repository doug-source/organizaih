import { DateCell_ } from '@/Pages/App/Components/DatePicker/Calendar/Main/MonthDays/styling';
import { DateStateType } from '@/Pages/App/Components/DatePicker/Calendar/libraries';
import { MouseEvent } from 'react';

type MonthDaysProps = {
    dateArgs: (string | number)[][];
    dateState: DateStateType;
    onDateChange: (
        event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
        date: Date,
    ) => void;
};

export const MonthDays = ({
    dateArgs,
    dateState,
    onDateChange,
}: MonthDaysProps) => {
    return (
        <>
            {dateArgs.map((date, index: number) => {
                const _date = new Date(date.join('-'));
                return (
                    <DateCell_
                        $date={_date}
                        $dateState={dateState}
                        $index={index}
                        key={_date.getTime()}
                        onClick={(evt) => onDateChange(evt, _date)}
                    >
                        {_date.getDate()}
                    </DateCell_>
                );
            })}
        </>
    );
};
