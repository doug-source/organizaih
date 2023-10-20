import {
    RemoveFutureBtn_,
    RemoveRedSVG_,
} from '@/Pages/App/Components/ItemEditor/FutureBtns/RemoveBtn/styling';
import { useTranslate } from '@/libraries/hooks';
import { MouseEventHandler, Suspense } from 'react';

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
            <Suspense>
                <RemoveRedSVG_ />
            </Suspense>
        </RemoveFutureBtn_>
    );
};
