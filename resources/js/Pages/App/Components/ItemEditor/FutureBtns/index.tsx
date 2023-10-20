import { IncludeBtn } from '@/Pages/App/Components/ItemEditor/FutureBtns/IncludeBtn';
import { RemoveBtn } from '@/Pages/App/Components/ItemEditor/FutureBtns/RemoveBtn';
import { Btns_ } from '@/Pages/App/Components/ItemEditor/FutureBtns/styling';
import { MouseEventHandler } from 'react';

type FutureBtns = {
    minQty?: number;
    onRemove?: MouseEventHandler<HTMLButtonElement>;
    onInclude?: MouseEventHandler<HTMLButtonElement>;
};

export const FutureBtns = ({
    minQty = 0,
    onRemove = () => {},
    onInclude = () => {},
}: FutureBtns) => {
    return (
        <Btns_>
            <RemoveBtn onRemove={onRemove} />
            <IncludeBtn
                minQty={minQty}
                onInclude={onInclude}
            />
        </Btns_>
    );
};

export * from './IncludeBtn';
export * from './RemoveBtn';
