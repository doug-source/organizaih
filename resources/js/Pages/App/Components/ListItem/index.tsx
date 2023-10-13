import {
    DataListItem_,
    NavLink_,
    TextContent_,
    TextItem_,
} from '@/Pages/App/Components/ListItem/styling';
import { ListItemType } from '@/Pages/App/Components/ListItem/types';
import { ListItemButtons } from '@/Pages/App/Components/ListItemButtons';
import { PhotoListItem } from '@/Pages/App/Components/PhotoListItem';
import { DataReducerEnum, useAppDispatch } from '@/Pages/App/libraries';
import { ReactNode } from 'react';

type ListItemProps = {
    data: ListItemType;
    index: number;
    urlPrefix?: string;
    iconNoPhoto?: ReactNode;
    onRemove?: (id: number) => void;
    onUpdate?: () => void;
};

export const ListItem = ({
    data,
    index,
    iconNoPhoto,
    urlPrefix,
    onRemove,
    onUpdate,
}: ListItemProps) => {
    const appDispatch = useAppDispatch();
    if (!urlPrefix) {
        return null;
    }
    return (
        <DataListItem_>
            <div>{index + 1}</div>
            <PhotoListItem
                iconNoPhoto={iconNoPhoto}
                photo={data.photo}
            />
            <TextItem_ title={data.title}>
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
                onRemove={onRemove}
                onUpdate={onUpdate}
            />
        </DataListItem_>
    );
};

export * from './styling';
export * from './types';
