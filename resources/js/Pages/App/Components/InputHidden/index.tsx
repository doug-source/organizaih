import { HTMLAttributes } from 'react';

type InputHiddenProps = {
    show: boolean;
    name: string;
    value: string;
} & HTMLAttributes<HTMLInputElement>;

export const InputHidden = ({
    show,
    name,
    value,
    ...remain
}: InputHiddenProps) => {
    if (!show) {
        return null;
    }
    return (
        <input
            type='hidden'
            name={name}
            value={value}
            {...remain}
        />
    );
};
