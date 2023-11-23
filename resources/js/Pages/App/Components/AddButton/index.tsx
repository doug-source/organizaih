import { PlusSVG_ } from '@/Pages/App/Components/AddButton/styling';
import { NextButton } from '@/Pages/App/Components/NextButton';
import { ComponentPropsWithoutRef, Suspense } from 'react';

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
            icon={
                <Suspense>
                    <PlusSVG_ />
                </Suspense>
            }
            link={link}
            preIcon={preIcon}
            onClick={onClick}
        >
            {Boolean(strBtnText) && <div>{strBtnText}</div>}
        </NextButton>
    );
};
