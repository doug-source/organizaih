import { LabelHTMLAttributes } from 'react';
import { InputLabel_ } from './styling';

type InputLabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
    value?: string;
};

export const InputLabel = ({ value, children, ...props }: InputLabelProps) => {
    return <InputLabel_ {...props}>{value ? value : children}</InputLabel_>;
};
