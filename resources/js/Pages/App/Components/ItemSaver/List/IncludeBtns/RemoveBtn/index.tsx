import {
    RemoveItemIncludedBtn_,
    RemoveRedSVG_,
} from '@/Pages/App/Components/ItemSaver/List/IncludeBtns/RemoveBtn/styling';
import { useTranslate } from '@/libraries';
import { Suspense } from 'react';

type RemoveBtnProps = {
    onRemove?: () => void;
};

export const RemoveBtn = ({ onRemove = () => {} }: RemoveBtnProps) => {
    const translate = useTranslate();
    return (
        <RemoveItemIncludedBtn_
            title={translate('remove', true)}
            onClick={onRemove}
        >
            <Suspense>
                <RemoveRedSVG_ />
            </Suspense>
        </RemoveItemIncludedBtn_>
    );
};
