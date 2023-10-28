import { InventoryBase } from '@/Pages/App/Screens/Inventory/Form/Base';
import { ProductToInventory } from '@/Pages/App/Screens/Product/types';
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

export const prepareInventoryItem = (productsToSave: ProductToInventory[]) => {
    type ProductPayload = { id: number; qty: number; cost: number };
    const predicate = (acc: ProductPayload[], product: ProductToInventory) => [
        ...acc,
        { id: product.id!, qty: product.qty, cost: product.price },
    ];
    const products = productsToSave.reduce(predicate, []);
    return JSON.stringify({ products });
};

export const buildFormData = (
    items: string,
    inventoryItemID?: InventoryItemIdentifier,
) => {
    const formData = new FormData();
    formData.append('items', items);
    if (inventoryItemID) {
        // edit
        formData.append('_method', 'PUT');
    }
    // otherwise create

    return formData;
};

export * from './enums';
export * from './handlers';
export * from './hooks';
export * from './reducers';
