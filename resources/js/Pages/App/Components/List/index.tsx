import { DataList_ } from '@/Pages/App/Components/List/styling';
import { ListItem, ListItemType } from '@/Pages/App/Components/ListItem';
import { ListItemEmpty } from '@/Pages/App/Components/ListItemEmpty';
import { DataReducerEnum, useAppDispatch } from '@/Pages/App/libraries';
import { ReactNode, useEffect } from 'react';

type ListProps = {
    dataList: ListItemType[];
    makeItem?: (data: ListItemType, index: number) => ReactNode;
    urlPrefix?: string;
    emptyListKey: string;
    iconNoPhoto?: ReactNode;
    onRemove?: (id: number) => void;
    onUpdate?: () => void;
};

export const List = ({
    dataList,
    makeItem,
    urlPrefix,
    emptyListKey,
    iconNoPhoto,
    onRemove = () => {},
    onUpdate = () => {},
}: ListProps) => {
    const appDispatch = useAppDispatch();
    useEffect(() => {
        appDispatch({ type: DataReducerEnum.LOADING, payload: false });
    }, [dataList.length, appDispatch]);

    if (typeof makeItem !== 'undefined') {
        return (
            <DataList_>
                {dataList.length ? (
                    dataList.map((data, index) => makeItem(data, index))
                ) : (
                    <ListItemEmpty emptyListKey={emptyListKey} />
                )}
            </DataList_>
        );
    }
    return (
        <DataList_>
            {dataList.length ? (
                dataList.map((data, index) => (
                    <ListItem
                        key={data.id}
                        data={data}
                        index={index}
                        iconNoPhoto={iconNoPhoto}
                        urlPrefix={urlPrefix}
                        onRemove={onRemove}
                        onUpdate={onUpdate}
                    />
                ))
            ) : (
                <ListItemEmpty emptyListKey={emptyListKey} />
            )}
        </DataList_>
    );
};
