import {
    DatePicker_,
    DatePickers_,
} from '@/Pages/App/Components/BoundaryDateInputs/styling';
import { DatePicker } from '@/Pages/App/Components/DatePicker';
import { useTranslate } from '@/libraries';
import { ComponentPropsWithoutRef } from 'react';

type DatePickerProps = ComponentPropsWithoutRef<typeof DatePicker>;

type BoundaryDateInputsProps = {
    dtStart: DatePickerProps['date'];
    dtEnd: DatePickerProps['date'];
    onFirstDateChanged: DatePickerProps['onDateChanged'];
    onLastDateChanged: DatePickerProps['onDateChanged'];
};

export const BoundaryDateInputs = ({
    dtStart,
    dtEnd,
    onFirstDateChanged,
    onLastDateChanged,
}: BoundaryDateInputsProps) => {
    const translate = useTranslate();
    return (
        <DatePickers_>
            <DatePicker_
                date={dtStart}
                label={translate('date-start', true)}
                onDateChanged={onFirstDateChanged}
            />
            <DatePicker_
                date={dtEnd}
                label={translate('date-end', true)}
                onDateChanged={onLastDateChanged}
            />
        </DatePickers_>
    );
};
