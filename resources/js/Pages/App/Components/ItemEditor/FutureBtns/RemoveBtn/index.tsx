import {
    RemoveFutureBtn_,
    RemoveRedIcon_,
} from '@/Pages/App/Components/ItemEditor/FutureBtns/RemoveBtn/styling';
import { useTranslate } from '@/libraries/hooks';
import { MouseEventHandler } from 'react';

type RemoveBtnProps = {
    onRemove?: MouseEventHandler<HTMLButtonElement>;
};

export const RemoveBtn = ({ onRemove = () => {} }: RemoveBtnProps) => {
    const translate = useTranslate();
    return (
        <RemoveFutureBtn_
            title={translate('edit', true)}
            onClick={onRemove}
        >
            <RemoveRedIcon_ />
        </RemoveFutureBtn_>
    );
};
