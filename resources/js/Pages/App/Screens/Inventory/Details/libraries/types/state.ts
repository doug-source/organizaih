import {
    IInventoryItemRemoved,
    IInventoryProduct,
} from '@/Pages/App/Screens/Inventory/Details/types';

export type InventoryItemsReducerState = {
    optionsConfirm: boolean;
    warning: boolean;
    preConfirm: boolean;
    inventoryItem: IInventoryProduct | null;
    itemDataRemoved?: IInventoryItemRemoved | null;
    noInventoryItem?: boolean;
};
