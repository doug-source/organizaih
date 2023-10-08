import { InputHTMLAttributes } from 'react';
import { Checkbox_ } from './styling';

export const Checkbox = ({
    ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
    return <Checkbox_ {...props} />;
};
