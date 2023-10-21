import { InventoryItemsReducerEnum } from '@/Pages/App/Screens/Inventory/Details/libraries/enums';
import {
    IInventoryItemRemoved,
    IInventoryProduct,
} from '@/Pages/App/Screens/Inventory/Details/types';

export namespace InventoryItemsPayload {
    type Init = {
        type: InventoryItemsReducerEnum.INIT;
        payload: IInventoryProduct;
    };

    type PrepareDelete = {
        type: InventoryItemsReducerEnum.PREPARE_DELETE;
        payload: IInventoryItemRemoved;
    };

    type NoPayload = {
        type:
            | InventoryItemsReducerEnum.CANCEL_DELETE
            | InventoryItemsReducerEnum.CLEAR_DELETE
            | InventoryItemsReducerEnum.DELETE
            | InventoryItemsReducerEnum.HIDE_CONFIRM
            | InventoryItemsReducerEnum.HIDE_WARNING
            | InventoryItemsReducerEnum.SHOW_WARNING
            | InventoryItemsReducerEnum.TOGGLE_OPTION_CONFIRM;
    };

    export type Skeleton = Init | PrepareDelete | NoPayload;
}
