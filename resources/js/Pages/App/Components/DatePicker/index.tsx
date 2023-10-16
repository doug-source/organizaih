import { Calendar } from '@/Pages/App/Components/DatePicker/Calendar';
import { DropDown } from '@/Pages/App/Components/DatePicker/DropDown';
import { Label } from '@/Pages/App/Components/DatePicker/Label';
import { makeInputDateValue } from '@/Pages/App/Components/DatePicker/libraries';
import {
    CalendarIcon_,
    Container_,
    DatepickerInputGroup_,
    DatepickerInput_,
    FormGroup_,
} from '@/Pages/App/Components/DatePicker/styling';
import { useLocale } from '@/Pages/App/libraries/hooks';
import { DateManager } from '@/libraries';
import { YearRangeType } from '@/libraries/types';
import { Suspense, useRef, useState } from 'react';

type DatePickerProps = {
    date?: Date | null;
    label?: string;
    placeholder?: boolean;
    yearRangeType?: YearRangeType;
    qtyYears?: number;
    showMonthYear?: boolean;
    className?: string;
    onDateChanged: (date: Date) => void;
};

export const DatePicker = ({
    date,
    label = '',
    placeholder = false,
    yearRangeType = 'before',
    qtyYears = 10,
    showMonthYear = false,
    className,
    onDateChanged,
}: DatePickerProps) => {
    const [locale] = useLocale();
    const [calendarOpen, setCalendarOpen] = useState(false);
    const calMngRef = useRef<DateManager>(
        new DateManager(locale.substring(0, locale.indexOf('_'))),
    );
    const CalendarItem = showMonthYear ? Calendar.Months : Calendar.Complete;
    return (
        <Container_ className={className}>
            <FormGroup_>
                <Label
                    label={label}
                    placeholder={placeholder}
                />
                <DatepickerInputGroup_>
                    <Suspense>
                        <CalendarIcon_ onClick={() => setCalendarOpen(true)} />
                    </Suspense>
                    <DatepickerInput_
                        readOnly
                        onClick={() => setCalendarOpen(true)}
                        onFocus={(evt) => evt.target.blur()}
                        value={makeInputDateValue(
                            locale,
                            calMngRef.current.MONTHS.short,
                            showMonthYear,
                            date,
                        )}
                        placeholder={placeholder ? label : ''}
                    />
                </DatepickerInputGroup_>
            </FormGroup_>
            <DropDown
                isOpen={calendarOpen}
                onOverlayClick={() => setCalendarOpen(false)}
            >
                <CalendarItem
                    date={date ?? DateManager.DATE_CURRENT}
                    yearRangeType={yearRangeType}
                    qtyYears={qtyYears}
                    calMngRef={calMngRef}
                    onDataChange={(date) => {
                        onDateChanged(date);
                        setCalendarOpen(false);
                    }}
                />
            </DropDown>
        </Container_>
    );
};
