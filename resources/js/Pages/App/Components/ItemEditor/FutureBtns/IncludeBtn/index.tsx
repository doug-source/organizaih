import {
    ArrowIcon_,
    IncludeFutureBtn_,
} from '@/Pages/App/Components/ItemEditor/FutureBtns/IncludeBtn/styling';
import { useTranslate } from '@/libraries';
import { MouseEventHandler } from 'react';

type IncludeBtnProps = {
    minQty?: number;
    onInclude?: MouseEventHandler<HTMLButtonElement>;
};

export const IncludeBtn = ({
    minQty = 0,
    onInclude = () => {},
}: IncludeBtnProps) => {
    const translate = useTranslate();
    if (minQty === 0) {
        return null;
    }
    return (
        <IncludeFutureBtn_
            title={translate('include', true)}
            onClick={onInclude}
        >
            <ArrowIcon_ />
        </IncludeFutureBtn_>
    );
};
