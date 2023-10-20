import { InventoryEdit } from '@/Pages/App/Screens/Inventory/Form/Edit';
import { buildInventoryProductList } from '@/Pages/App/Screens/Inventory/Form/Edit/libraries';
import { InventoryFormInitFn } from '@/Pages/App/Screens/Inventory/Form/libraries';
import { IInventoryItem } from '@/Pages/App/Screens/Inventory/Form/types';
import { DataReducerEnum } from '@/Pages/App/libraries/enums';
import {
    useAPI,
    useAppDispatch,
    useGenericErrorHandler,
} from '@/Pages/App/libraries/hooks';
import { endpoints } from '@/settings';
import { ComponentPropsWithoutRef, useEffect } from 'react';

export const useInventoryItemRequest = (
    inventoryItemID: ComponentPropsWithoutRef<
        typeof InventoryEdit
    >['inventoryItemID'],
) => {
    let endpoint: string | undefined;
    if (inventoryItemID) {
        endpoint = endpoints.inventory.item(inventoryItemID);
    }
    const [inventoryInfo] = useAPI<IInventoryItem, { pagination: false }>(
        endpoint,
    );
    useGenericErrorHandler(inventoryInfo.error);
    return [inventoryInfo] as const;
};

export const useInventoryItemResponse = (
    inventoryInfo: ReturnType<typeof useInventoryItemRequest>[0],
    inventoryItemID: ComponentPropsWithoutRef<
        typeof InventoryEdit
    >['inventoryItemID'],
    onInit: InventoryFormInitFn,
) => {
    const appDispatch = useAppDispatch();
    useEffect(() => {
        if (inventoryInfo.error || !inventoryInfo.data) {
            return;
        }
        appDispatch({
            type: DataReducerEnum.SELECTION_ACTION,
            payload: `item/${inventoryItemID}`,
        });
        appDispatch({
            type: DataReducerEnum.SELECTION_TARGET,
            payload: 'inventories',
        });
        onInit(buildInventoryProductList(inventoryInfo.data));
        appDispatch({ type: DataReducerEnum.LOADING, payload: false });
    }, [
        inventoryInfo.error,
        inventoryInfo.data,
        inventoryItemID,
        appDispatch,
        onInit,
    ]);
};
