import { useTranslate } from '@/libraries';
import { Empty_ } from '@/Pages/App/Components/ListItemEmpty/styling';

type ListItemEmptyProps = {
    emptyListKey: string;
};

export const ListItemEmpty = ({ emptyListKey }: ListItemEmptyProps) => {
    const translate = useTranslate();
    return (
        <Empty_>
            <div>{translate(emptyListKey, true)}</div>
        </Empty_>
    );
};
