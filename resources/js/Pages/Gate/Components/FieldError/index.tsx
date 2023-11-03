import { FieldError_ } from '@/Pages/Gate/Components/FieldError/styling';
import { HTMLAttributes } from 'react';

type FieldErrorProps = HTMLAttributes<HTMLParagraphElement> & {
    message?: string;
};

export const FieldError = ({ message, ...remain }: FieldErrorProps) => {
    if (!message) {
        return null;
    }
    return <FieldError_ {...remain}>{message}</FieldError_>;
};
