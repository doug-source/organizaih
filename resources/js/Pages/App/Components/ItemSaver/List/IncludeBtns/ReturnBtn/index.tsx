import {
    ArrowIcon_,
    ReturnItemIncludedBtn_,
} from '@/Pages/App/Components/ItemSaver/List/IncludeBtns/ReturnBtn/styling';
import { useTranslate } from '@/libraries/hooks';

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
            <ArrowIcon_ />
        </ReturnItemIncludedBtn_>
    );
};
