import {
    DataListItem_,
    NavLink_,
    TextContent_,
    TextItem_,
} from '@/Pages/App/Components/ListItem/styling';
import { ListItemButtons } from '@/Pages/App/Components/ListItemButtons';
import { DataReducerEnum, useAppDispatch } from '@/Pages/App/libraries';
import { ComponentPropsWithoutRef, ReactNode } from 'react';

type ListItemBtnsProps = ComponentPropsWithoutRef<typeof ListItemButtons>;

type ListItemProps = {
    id: number;
    index: number;
    innerColumns?: ReactNode;
    onRemove?: ListItemBtnsProps['onRemove'];
    updateBtn?: ListItemBtnsProps['updateBtn'];
    onUpdate?: ListItemBtnsProps['onUpdate'];
    removeBtn?: ListItemBtnsProps['removeBtn'];

    contentLinked: ReactNode;
    titleLink?: string;
    urlLink: string;
};

export const ListItem = ({
    id,
    index,
    innerColumns,
    removeBtn = true,
    onRemove,
    updateBtn = true,
    onUpdate,

    contentLinked,
    titleLink,
    urlLink,
}: ListItemProps) => {
    const appDispatch = useAppDispatch();
    if (!urlLink) {
        return null;
    }
    return (
        <DataListItem_>
            <div>{index + 1}</div>
            {innerColumns}
            <TextItem_ title={titleLink}>
                <TextContent_>
                    <NavLink_
                        to={urlLink}
                        onClick={() =>
                            appDispatch({
                                type: DataReducerEnum.TITLE,
                                payload: '',
                            })
                        }
                    >
                        {contentLinked}
                    </NavLink_>
                </TextContent_>
            </TextItem_>
            <ListItemButtons
                urlLink={urlLink}
                id={id}
                removeBtn={removeBtn}
                onRemove={onRemove}
                updateBtn={updateBtn}
                onUpdate={onUpdate}
            />
        </DataListItem_>
    );
};

export * from './styling';
export * from './types';
