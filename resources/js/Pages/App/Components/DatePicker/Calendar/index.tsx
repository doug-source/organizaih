import { Header } from '@/Pages/App/Components/DatePicker/Calendar/Header';
import { Main } from '@/Pages/App/Components/DatePicker/Calendar/Main';
import {
    makeLeftByMonth,
    makeLeftByYear,
    makeMonthChange,
    makeRightByMonth,
    makeRightByYear,
    makeYearChange,
    useDateState,
} from '@/Pages/App/Components/DatePicker/Calendar/libraries';
import { CalendarContainer_ } from '@/Pages/App/Components/DatePicker/Calendar/styling';
import { DateManager } from '@/libraries';
import { YearRangeType } from '@/libraries/types';

const CalendarComponent = () => <></>;

type GenericProps = {
    date: Date;
    yearRangeType: YearRangeType;
    qtyYears: number;
    calMngRef: React.MutableRefObject<DateManager>;
    onDataChange: (date: Date) => void;
};

export const Calendar = Object.assign(CalendarComponent, {
    Complete: ({
        date,
        qtyYears,
        yearRangeType,
        calMngRef,
        onDataChange,
    }: GenericProps) => {
        const [dateState, setDateState] = useDateState(date);
        return (
            <CalendarContainer_>
                <>
                    <Header.YearMonthDay
                        onArrowLeft={makeLeftByMonth(
                            dateState,
                            setDateState,
                            qtyYears,
                            yearRangeType,
                        )}
                        onArrowRight={makeRightByMonth(
                            dateState,
                            setDateState,
                            qtyYears,
                            yearRangeType,
                        )}
                        onMonthChange={makeMonthChange(dateState, setDateState)}
                        month={dateState.month}
                        year={dateState.year}
                        months={calMngRef.current.MONTHS.long}
                        qtyYears={qtyYears}
                        yearRangeType={yearRangeType}
                        onYearChange={makeYearChange(dateState, setDateState)}
                    />
                    <Main.WeekMonthDay
                        calMngRef={calMngRef}
                        dateState={dateState}
                        onDataChange={onDataChange}
                        setDateState={setDateState}
                    />
                </>
            </CalendarContainer_>
        );
    },
    Months: ({
        date,
        qtyYears,
        yearRangeType,
        calMngRef,
        onDataChange,
    }: GenericProps) => {
        const [dateState, setDateState] = useDateState(date);
        return (
            <CalendarContainer_>
                <>
                    <Header.YearMonth
                        onArrowLeft={makeLeftByYear(
                            dateState,
                            setDateState,
                            qtyYears,
                            yearRangeType,
                        )}
                        onArrowRight={makeRightByYear(
                            dateState,
                            setDateState,
                            qtyYears,
                            yearRangeType,
                        )}
                        onYearChange={makeYearChange(dateState, setDateState)}
                        year={dateState.year}
                        qtyYears={qtyYears}
                        yearRangeType={yearRangeType}
                    />
                    <Main.Months
                        calMngRef={calMngRef}
                        dateState={dateState}
                        onDataChange={onDataChange}
                        setDateState={setDateState}
                    />
                </>
            </CalendarContainer_>
        );
    },
});
