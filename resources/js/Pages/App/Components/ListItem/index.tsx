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
    data: { id: number; name: string };
    index: number;
    urlPrefix?: string;
    innerColumns?: ReactNode;
    onRemove?: ListItemBtnsProps['onRemove'];
    updateBtn?: ListItemBtnsProps['updateBtn'];
    onUpdate?: ListItemBtnsProps['onUpdate'];
    removeBtn?: ListItemBtnsProps['removeBtn'];
};

export const ListItem = ({
    data,
    index,
    urlPrefix,
    innerColumns,
    removeBtn = true,
    onRemove,
    updateBtn = true,
    onUpdate,
}: ListItemProps) => {
    const appDispatch = useAppDispatch();
    if (!urlPrefix) {
        return null;
    }
    return (
        <DataListItem_>
            <div>{index + 1}</div>
            {innerColumns}
            <TextItem_ title={data.name}>
                <TextContent_>
                    <NavLink_
                        to={`${urlPrefix}/${data.id}`}
                        onClick={() =>
                            appDispatch({
                                type: DataReducerEnum.TITLE,
                                payload: '',
                            })
                        }
                    >
                        {data.name}
                    </NavLink_>
                </TextContent_>
            </TextItem_>
            <ListItemButtons
                urlPrefix={urlPrefix}
                id={data.id}
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
