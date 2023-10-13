import { PlusSVG_ } from '@/Pages/App/Components/AddButton/styling';
import { LinkedButton } from '@/Pages/App/Components/LinkedButton';
import {
    DataReducerEnum,
    emptySpaceCharacter,
    useAppDispatch,
} from '@/Pages/App/libraries';
import { Suspense } from 'react';

type AddButtonProps = {
    link?: string;
    strBtnText?: string;
    preIcon?: boolean;
    onClick?: () => void;
};

export const AddButton = ({
    link,
    strBtnText,
    preIcon = false,
    onClick = () => {},
}: AddButtonProps) => {
    const appDispatch = useAppDispatch();
    if (!link) {
        return null;
    }
    return (
        <LinkedButton
            to={link}
            onClick={() => {
                appDispatch({
                    type: DataReducerEnum.TITLE,
                    payload: emptySpaceCharacter,
                });
                onClick();
            }}
        >
            {preIcon && (
                <Suspense>
                    <PlusSVG_ />
                </Suspense>
            )}
            {Boolean(strBtnText) && <div>{strBtnText}</div>}
            {!preIcon && (
                <Suspense>
                    <PlusSVG_ />
                </Suspense>
            )}
        </LinkedButton>
    );
};
