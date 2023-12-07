import { AddIcon_ } from '@/Pages/App/Components/AddButton/styling';
import { NextButton } from '@/Pages/App/Components/NextButton';
import { ComponentPropsWithoutRef } from 'react';

type NextButtonProps = ComponentPropsWithoutRef<typeof NextButton>;

type AddButtonProps = Omit<NextButtonProps, 'icon'> & {
    strBtnText?: string;
};

export const AddButton = ({
    link,
    strBtnText,
    preIcon = false,
    onClick,
}: AddButtonProps) => {
    return (
        <NextButton
            icon={<AddIcon_ />}
            link={link}
            preIcon={preIcon}
            onClick={onClick}
        >
            {Boolean(strBtnText) && <div>{strBtnText}</div>}
        </NextButton>
    );
};
