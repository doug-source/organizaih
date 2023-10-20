import {
    InventoryDefinitionDispatch,
    InventoryDefinitionState,
    InventoryFormInitFn,
    defineProduct,
    storeInventoriesToSave,
} from '@/Pages/App/Screens/Inventory/Form/libraries';
import { DataReducerEnum } from '@/Pages/App/libraries/enums';
import { useAppDispatch, useSelections } from '@/Pages/App/libraries/hooks';
import { useCallback } from 'react';

export const useInitForm = (
    state: InventoryDefinitionState,
    dispatch: InventoryDefinitionDispatch,
    inventoryItemID?: string,
) => {
    const selections = useSelections();
    const appDispatch = useAppDispatch();
    const isCreate = typeof inventoryItemID === 'undefined';
    const isSelection = selections.action !== null;

    return useCallback<InventoryFormInitFn>(
        (inventoriesFromDB = []) => {
            if (state.inventoriesFromDB.length > 0) {
                // No page transition
                return;
            }
            const {
                inventories: { product: productSelected },
            } = selections;

            storeInventoriesToSave(
                dispatch,
                inventoriesFromDB,
                isCreate,
                isSelection,
                selections,
            );
            defineProduct(
                state.productToInventory,
                productSelected,
                dispatch,
                selections,
            );
            appDispatch({ type: DataReducerEnum.SELECTION_CLEAR });
        },
        [
            selections.inventories.product,
            state.inventoriesFromDB,
            state.productToInventory,
            dispatch,
            appDispatch,
            storeInventoriesToSave,
            defineProduct,
            isCreate,
            isSelection,
        ],
    );
};
