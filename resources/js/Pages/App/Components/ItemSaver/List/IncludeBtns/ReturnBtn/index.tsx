import {
    ArrowSVG_,
    ReturnItemIncludedBtn_,
} from '@/Pages/App/Components/ItemSaver/List/IncludeBtns/ReturnBtn/styling';
import { useTranslate } from '@/libraries/hooks';
import { Suspense } from 'react';

type ReturnBtnProps = {
    onReturn?: () => void;
};

export const ReturnBtn = ({ onReturn = () => {} }: ReturnBtnProps) => {
    const translate = useTranslate();
    return (
        <ReturnItemIncludedBtn_
            title={translate('re-edit', true)}
            onClick={onReturn}
        >
            <Suspense>
                <ArrowSVG_ />
            </Suspense>
        </ReturnItemIncludedBtn_>
    );
};
