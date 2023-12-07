import {
    RemoveItemIncludedBtn_,
    RemoveRedIcon_,
} from '@/Pages/App/Components/ItemSaver/List/IncludeBtns/RemoveBtn/styling';
import { useTranslate } from '@/libraries/hooks';

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
            <RemoveRedIcon_ />
        </RemoveItemIncludedBtn_>
    );
};
