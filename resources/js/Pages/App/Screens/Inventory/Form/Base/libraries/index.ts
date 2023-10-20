import { InventoryBase } from '@/Pages/App/Screens/Inventory/Form/Base';
import { ComponentPropsWithoutRef } from 'react';

export type InventoryItemIdentifier = ComponentPropsWithoutRef<
    typeof InventoryBase
>['inventoryItemID'];

export const mountSelectAction = (inventoryItemID: InventoryItemIdentifier) => {
    if (typeof inventoryItemID === 'undefined') {
        return 'create' as const;
    }
    return `item/${inventoryItemID}` as const;
};

export * from './enums';
export * from './handlers';
export * from './hooks';
export * from './reducers';
