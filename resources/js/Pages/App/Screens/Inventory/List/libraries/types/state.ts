import { IInventoryListData } from '@/Pages/App/Screens/Inventory/List/types';
import { DeletionReducerState, ErrorFromRequest } from '@/Pages/App/libraries';

export type InventoriesReducerState = {
    total: IInventoryListData[];
    inventories: IInventoryListData[];
    list: {
        id: IInventoryListData['productID'];
        name: IInventoryListData['productName'];
        qty: IInventoryListData['qty'];
        productPhoto: IInventoryListData['productPhoto'];
    }[];
    page: number;
    group: number;
    lastPage: number;
    qty: number;
    endpoint: string;
    search: string;
    error: (ErrorFromRequest & { customMessage?: string }) | null;
} & DeletionReducerState<IInventoryListData, 'productID'>;
