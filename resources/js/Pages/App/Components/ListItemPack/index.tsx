import { ListItemContainer_ } from '@/Pages/App/Components/ListItemPack/styling';
import { ReactNode } from 'react';

type ListItemPackProps = {
    index: number;
    className?: string;
    children?: ReactNode;
};

export const ListItemPack = ({
    index,
    className,
    children,
}: ListItemPackProps) => {
    return (
        <ListItemContainer_ className={className}>
            <div>{index + 1}</div>
            {children}
        </ListItemContainer_>
    );
};
