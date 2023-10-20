import { RemoveBtn } from '@/Pages/App/Components/ItemSaver/List/IncludeBtns/RemoveBtn';
import { ReturnBtn } from '@/Pages/App/Components/ItemSaver/List/IncludeBtns/ReturnBtn';
import { Btns_ } from '@/Pages/App/Components/ItemSaver/List/IncludeBtns/styling';

type IncludeBtnsProps = {
    onReturn?: () => void;
    onRemove?: () => void;
};

export const IncludeBtns = ({
    onReturn = () => {},
    onRemove = () => {},
}: IncludeBtnsProps) => (
    <Btns_>
        <ReturnBtn onReturn={onReturn} />
        <RemoveBtn onRemove={onRemove} />
    </Btns_>
);

export * from './RemoveBtn';
export * from './ReturnBtn';
