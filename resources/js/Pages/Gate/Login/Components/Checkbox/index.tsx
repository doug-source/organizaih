import { Checkbox_ } from '@/Pages/Gate/Login/Components/Checkbox/styling';
import { InputHTMLAttributes } from 'react';

export const Checkbox = ({
    ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
    return <Checkbox_ {...props} />;
};
