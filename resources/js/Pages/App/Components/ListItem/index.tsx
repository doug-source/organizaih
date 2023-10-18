import {
    DataListItem_,
    NavLink_,
    TextContent_,
    TextItem_,
} from '@/Pages/App/Components/ListItem/styling';
import { ListItemButtons } from '@/Pages/App/Components/ListItemButtons';
import { DataReducerEnum, useAppDispatch } from '@/Pages/App/libraries';
import { ReactNode } from 'react';

type ListItemProps = {
    data: { id: number; name: string };
    index: number;
    urlPrefix?: string;
    image?: ReactNode;
    onRemove?: (id: number) => void;
    onUpdate?: () => void;
};

export const ListItem = ({
    data,
    index,
    urlPrefix,
    image,
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
            {image}
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
                onRemove={onRemove}
                onUpdate={onUpdate}
            />
        </DataListItem_>
    );
};

export * from './styling';
export * from './types';
