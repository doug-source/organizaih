import { useAppDispatch } from '../../../../hooks';
import { Empty } from '../../../../shared';
import { DataList_ } from '../../../../shared/List/styling';
import { DispatchFn, StateSaleList } from '../libraries';
import { ListItem } from './ListItem';
import { makeListItemRemove, makeListItemUpdate } from './libraries';

type IterationProps = {
    sales: StateSaleList['sales'];
    dispatch: DispatchFn;
};

export const Iteration = ({ sales, dispatch }: IterationProps) => {
    const appDispatch = useAppDispatch();
    if (sales.length === 0) {
        return (
            <DataList_>
                <Empty emptyListKey='sale-empty-list' />
            </DataList_>
        );
    }
    return (
        <DataList_>
            {sales.map((data, index) => (
                <ListItem
                    key={data.id}
                    created_at={data.created_at}
                    id={data.id}
                    index={index}
                    customerName={data.customerName}
                    customerPhoto={data.customerPhoto}
                    onUpdate={makeListItemUpdate(appDispatch)}
                    onRemove={makeListItemRemove(dispatch, data)}
                />
            ))}
        </DataList_>
    );
};
