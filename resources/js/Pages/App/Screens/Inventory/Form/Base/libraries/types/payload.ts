import { InventoryDefinitionReducerEnum } from '@/Pages/App/Screens/Inventory/Form/Base/libraries/enums';
import { ProductToInventory } from '@/Pages/App/Screens/Product/types';

export namespace InventoryDefinitionPayload {
    type ToggleOptionConfirm = {
        type: InventoryDefinitionReducerEnum.TOGGLE_OPTION_CONFIRM;
    };
    type PreIncludeProdQty = {
        type: InventoryDefinitionReducerEnum.INCLUDE_PRODUCT_QTY;
        payload: number;
    };
    type PreIncludeProdCost = {
        type: InventoryDefinitionReducerEnum.INCLUDE_PRODUCT_COST;
        payload: number;
    };
    type PreIncludeProd = {
        type: InventoryDefinitionReducerEnum.INCLUDE_PRODUCT;
        payload: ProductToInventory;
    };
    type NoPayload = {
        type: InventoryDefinitionReducerEnum.REMOVE_PRODUCT;
    };
    type IncludeFutureInventories = {
        type: InventoryDefinitionReducerEnum.REPLACE_INVENTORY_LIST;
        payload: ProductToInventory[];
    };
    type IncludeInventoryToSave = {
        type: InventoryDefinitionReducerEnum.INCLUDE_INVENTORY_TO_SAVE;
        payload: ProductToInventory;
    };
    type RemoveInventoryFromSave = {
        type: InventoryDefinitionReducerEnum.REMOVE_INVENTORY_FROM_SAVE;
        payload: ProductToInventory;
    };

    type PreIncludeProdDb = {
        type: InventoryDefinitionReducerEnum.INCLUDE_PRODUCTS_DB;
        payload: ProductToInventory[];
    };
    export type Skeleton =
        | ToggleOptionConfirm
        | PreIncludeProdQty
        | PreIncludeProdCost
        | PreIncludeProd
        | NoPayload
        | PreIncludeProdDb
        | IncludeFutureInventories
        | IncludeInventoryToSave
        | RemoveInventoryFromSave;
}
