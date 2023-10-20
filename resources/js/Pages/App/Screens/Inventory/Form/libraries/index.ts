import { InventoryDefinitionReducerEnum } from '@/Pages/App/Screens/Inventory/Form/Base/libraries/enums';
import { inventoryDefinitionReducer } from '@/Pages/App/Screens/Inventory/Form/Base/libraries/reducers';
import { ProductToInventory } from '@/Pages/App/Screens/Product/types';
import { ReducerSelections } from '@/Pages/App/libraries';
import { Dispatch } from 'react';

export type InventoryFormInitFn = (
    productsFromDB?: ProductToInventory[],
) => void;

type ReducerArgs = Parameters<typeof inventoryDefinitionReducer>;
export type InventoryDefinitionState = ReducerArgs[0];
export type InventoryDefinitionDispatch = Dispatch<ReducerArgs[1]>;

type StoreInventoriesFromDbUtil = (
    inventoriesFromDB: Parameters<InventoryFormInitFn>[0] & {},
    dispatch: InventoryDefinitionDispatch,
) => void;

const storeInventoriesFromDB: StoreInventoriesFromDbUtil = (
    inventoriesFromDB,
    dispatch,
) => {
    dispatch({
        type: InventoryDefinitionReducerEnum.INCLUDE_PRODUCTS_DB,
        payload: inventoriesFromDB,
    });
};

type StoreInventoriesToSaveUtil = (
    dispatch: InventoryDefinitionDispatch,
    inventoriesFromDB: Parameters<InventoryFormInitFn>[0] & {},
    isCreate: boolean,
    isFromSelection: boolean,
    selections: ReducerSelections,
) => void;

export const storeInventoriesToSave: StoreInventoriesToSaveUtil = (
    dispatch,
    inventoriesFromDB,
    isCreate,
    isFromSelection,
    { inventories: { inventoriesToSave: inventoriesFromSelection } },
) => {
    if (isCreate) {
        // CREATE
        if (isFromSelection) {
            dispatch({
                type: InventoryDefinitionReducerEnum.REPLACE_INVENTORY_LIST,
                payload: inventoriesFromSelection,
            });
        }
    } else {
        storeInventoriesFromDB(inventoriesFromDB, dispatch);
        // EDITION
        if (isFromSelection) {
            dispatch({
                type: InventoryDefinitionReducerEnum.REPLACE_INVENTORY_LIST,
                payload: inventoriesFromSelection,
            });
        } else {
            dispatch({
                type: InventoryDefinitionReducerEnum.REPLACE_INVENTORY_LIST,
                payload: inventoriesFromDB,
            });
        }
    }
};

type DefineProductUtil = (
    productToInventoryFromState: InventoryDefinitionState['productToInventory'],
    productSelected: ReducerSelections['inventories']['product'],
    dispatch: InventoryDefinitionDispatch,
    selection: ReducerSelections,
) => void;

export const defineProduct: DefineProductUtil = (
    productToInventoryFromState,
    productSelected,
    dispatch,
    { inventories: { inventoriesToSave: inventoriesFromSelection } },
) => {
    if (productToInventoryFromState !== null || productSelected === null) {
        return;
    }
    if (
        inventoriesFromSelection.findIndex(
            (prodInventory) => prodInventory.name === productSelected.name,
        ) > -1
    ) {
        return;
    }
    dispatch({
        type: InventoryDefinitionReducerEnum.INCLUDE_PRODUCT,
        payload: productSelected,
    });
};

export * from './contexts';
export * from './hooks';
