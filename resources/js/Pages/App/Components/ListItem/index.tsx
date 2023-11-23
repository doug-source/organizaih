import { ListItemColumn } from '@/Pages/App/Components/ListItemColumn';
import { ListItemPack } from '@/Pages/App/Components/ListItemPack';
import { ReactNode } from 'react';

type ListItemProps = {
    index: number;
    titleColumn?: string;
    children?: ReactNode;
    firstColumns?: ReactNode;
    lastColumns?: ReactNode;
};

export const ListItem = ({
    index,
    firstColumns,
    children,
    titleColumn,
    lastColumns,
}: ListItemProps) => {
    return (
        <ListItemPack index={index}>
            {firstColumns}
            <ListItemColumn title={titleColumn}>{children}</ListItemColumn>
            {lastColumns}
        </ListItemPack>
    );
};
