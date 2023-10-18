import { DataList_ } from '@/Pages/App/Components/List/styling';
import { ListItemEmpty } from '@/Pages/App/Components/ListItemEmpty';
import { DataReducerEnum, useAppDispatch } from '@/Pages/App/libraries';
import { ReactNode, useEffect } from 'react';

type ListProps<T> = {
    dataList: T[];
    makeItem: (data: T, index: number) => ReactNode;
    emptyListKey: string;
};

export const List = <T,>({
    dataList,
    makeItem,

    emptyListKey,
}: ListProps<T>) => {
    const appDispatch = useAppDispatch();
    useEffect(() => {
        appDispatch({ type: DataReducerEnum.LOADING, payload: false });
    }, [dataList.length, appDispatch]);

    return (
        <DataList_>
            {dataList.length ? (
                dataList.map((data, index) => makeItem(data, index))
            ) : (
                <ListItemEmpty emptyListKey={emptyListKey} />
            )}
        </DataList_>
    );
};
