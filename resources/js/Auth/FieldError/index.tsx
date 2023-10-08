import { HTMLAttributes } from 'react';
import { FieldError_ } from './styling';

type FieldErrorProps = HTMLAttributes<HTMLParagraphElement> & {
    message?: string;
};

export const FieldError = ({ message, ...remain }: FieldErrorProps) => {
    if (!message) {
        return null;
    }
    return <FieldError_ {...remain}>{message}</FieldError_>;
};
