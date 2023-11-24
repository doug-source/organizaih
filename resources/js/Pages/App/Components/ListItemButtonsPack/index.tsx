import {
    BtnsItemContainer_,
    BtnsItem_,
} from '@/Pages/App/Components/ListItemButtonsPack/styling';
import { HTMLAttributes } from 'react';

type ListItemButtonsPackProps = HTMLAttributes<HTMLDivElement>;

export const ListItemButtonsPack = ({
    children,
    ...remain
}: ListItemButtonsPackProps) => (
    <BtnsItemContainer_ {...remain}>
        <BtnsItem_>{children}</BtnsItem_>
    </BtnsItemContainer_>
);
