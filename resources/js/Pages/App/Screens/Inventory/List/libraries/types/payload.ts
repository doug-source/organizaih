import { InventoriesReducerEnum } from '@/Pages/App/Screens/Inventory/List/libraries/enums';
import { IInventoryListData } from '@/Pages/App/Screens/Inventory/List/types';
import { DeletionPayload } from '@/Pages/App/libraries';

export namespace InventoriesPayload {
    type Init = {
        type: InventoriesReducerEnum.INIT;
        payload: IInventoryListData[];
    };
    type Search = {
        type: InventoriesReducerEnum.SEARCH;
        payload: { search: string };
    };
    type Numeric = {
        type:
            | InventoriesReducerEnum.CHANGE_GROUP
            | InventoriesReducerEnum.CHANGE_PAGE
            | InventoriesReducerEnum.CHANGE_LAST
            | InventoriesReducerEnum.CHANGE_QTY;
        payload: number;
    };

    export type Skeleton<T> =
        | Init
        | Search
        | Numeric
        | DeletionPayload.Skeleton<T>;
}
