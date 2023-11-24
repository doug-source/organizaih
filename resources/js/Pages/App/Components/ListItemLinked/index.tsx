import { ListItem } from '@/Pages/App/Components/ListItem';
import { NavLink_ } from '@/Pages/App/Components/ListItemLinked/styling';
import { DataReducerEnum, useAppDispatch } from '@/Pages/App/libraries';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

type ListItemProps = ComponentPropsWithoutRef<typeof ListItem>;

type ListItemLinkedProps = {
    index: number;
    urlLink: string;
    titleLink?: string;
    contentLink: ReactNode;
    firstColumns?: ListItemProps['firstColumns'];
    lastColumns?: ListItemProps['lastColumns'];
};

export const ListItemLinked = ({
    index,
    urlLink,
    titleLink,
    contentLink,
    firstColumns: firstColumns,
    lastColumns,
}: ListItemLinkedProps) => {
    const appDispatch = useAppDispatch();
    if (!urlLink) {
        return null;
    }
    return (
        <ListItem
            index={index}
            firstColumns={firstColumns}
            titleColumn={titleLink}
            lastColumns={lastColumns}
        >
            <NavLink_
                to={urlLink}
                onClick={() =>
                    appDispatch({
                        type: DataReducerEnum.TITLE,
                        payload: '',
                    })
                }
            >
                {contentLink}
            </NavLink_>
        </ListItem>
    );
};
