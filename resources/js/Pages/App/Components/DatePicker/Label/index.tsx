import { DatePicker } from '@/Pages/App/Components/DatePicker';
import { DatepickerLabel_ } from '@/Pages/App/Components/DatePicker/Label/styling';
import { ComponentPropsWithoutRef } from 'react';

type DatePickerProps = ComponentPropsWithoutRef<typeof DatePicker>;

type LabelProps = {
    label: DatePickerProps['label'];
    placeholder: DatePickerProps['placeholder'];
};

export const Label = ({ label, placeholder }: LabelProps) => {
    if (!label || placeholder) {
        return null;
    }
    return <DatepickerLabel_>{label}</DatepickerLabel_>;
};
