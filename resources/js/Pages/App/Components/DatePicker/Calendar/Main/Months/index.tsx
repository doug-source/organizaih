import { Months_ } from '@/Pages/App/Components/DatePicker/Calendar/Main/Months/styling';
import { MonthDataItem } from '@/Pages/App/Components/DatePicker/Calendar/Main/libraries';
import { DateStateType } from '@/Pages/App/Components/DatePicker/Calendar/libraries';
import { createDate } from '@/libraries/toolbox/Date';
import { MouseEvent } from 'react';

type MonthsProps = {
    dateArgs: ReadonlyArray<MonthDataItem>;
    dateState: DateStateType;
    onMonthChange: (
        event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
        date: Date,
    ) => void;

    months: readonly string[];
};

export const Months = ({
    months,
    dateArgs,
    dateState,
    onMonthChange,
}: MonthsProps) => {
    return (
        <>
            {dateArgs.map((date, index: number) => {
                const [year, monthIndex, monthDay] = date;
                const _date = createDate(monthDay, monthIndex, year);

                return (
                    <Months_
                        $date={_date}
                        $dateState={dateState}
                        $index={index}
                        key={_date.getTime()}
                        onClick={(evt) => onMonthChange(evt, _date)}
                    >
                        {months[index]}
                    </Months_>
                );
            })}
        </>
    );
};
