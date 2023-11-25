import { LinkedButton } from '@/Pages/App/Components/LinkedButton';
import { emptySpaceCharacter } from '@/Pages/App/libraries';
import { DataReducerEnum } from '@/Pages/App/libraries/enums';
import { useAppDispatch } from '@/Pages/App/libraries/hooks';
import { ReactNode } from 'react';

type NextButtonProps = {
    link?: string;
    className?: string;
    children?: ReactNode;
    preIcon?: boolean;
    icon: ReactNode;
    onClick?: () => void;
};

export const NextButton = ({
    link,
    className,
    children,
    preIcon = false,
    icon,
    onClick,
}: NextButtonProps) => {
    const appDispatch = useAppDispatch();
    if (!link) {
        return null;
    }
    return (
        <LinkedButton
            className={className}
            to={link}
            onClick={() => {
                appDispatch({
                    type: DataReducerEnum.TITLE,
                    payload: emptySpaceCharacter,
                });
                onClick && onClick();
            }}
        >
            {preIcon && icon}
            {children}
            {!preIcon && icon}
        </LinkedButton>
    );
};
