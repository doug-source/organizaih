import { ReactNode } from 'react';
import { SelectorsBox_ } from './styling';

type SelectorsBoxProps = {
    show: boolean;
    children: ReactNode;
};

export const SelectorsBox = ({ show, children }: SelectorsBoxProps) => {
    if (!show) {
        return null;
    }
    return <SelectorsBox_>{children}</SelectorsBox_>;
};

export * from './styling';
