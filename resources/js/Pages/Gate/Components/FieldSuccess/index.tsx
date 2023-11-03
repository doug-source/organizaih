import { FieldSuccess_ } from '@/Pages/Gate/Components/FieldSuccess/styling';
import { HTMLAttributes } from 'react';

type FieldSuccessProps = HTMLAttributes<HTMLParagraphElement> & {
    message?: string;
};

export const FieldSuccess = ({ message, ...remain }: FieldSuccessProps) => {
    if (!message) {
        return null;
    }
    return <FieldSuccess_ {...remain}>{message}</FieldSuccess_>;
};
