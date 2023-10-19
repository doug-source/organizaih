import { useInventoriesReducer } from '@/Pages/App/Screens/Inventory/List/libraries/hooks';
import { IInventoryListData } from '@/Pages/App/Screens/Inventory/List/types';

export type DispatchFn = ReturnType<typeof useInventoriesReducer>[1];

export * from './enums';
export * from './handlers';
export * from './hooks';
export * from './reducers';
export * from './types';

export const filterList = (list: IInventoryListData[]) => {
    return list.map((item) => ({
        id: item.productID,
        name: item.productName,
        qty: item.qty,
        productPhoto: item.productPhoto,
    }));
};
