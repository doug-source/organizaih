import { InventoryBase } from '@/Pages/App/Screens/Inventory/Form/Base';
import {
    useInventoryItemRequest,
    useInventoryItemResponse,
} from '@/Pages/App/Screens/Inventory/Form/Edit/libraries/hooks';
import { InventoryFormInitFn } from '@/Pages/App/Screens/Inventory/Form/libraries';
import { useInitPage } from '@/Pages/App/libraries/hooks';
import { ComponentPropsWithoutRef } from 'react';

type EditProps = {
    inventoryItemID: ComponentPropsWithoutRef<
        typeof InventoryBase
    >['inventoryItemID'];
    onInit: InventoryFormInitFn;
};

const Edit = ({ inventoryItemID, onInit }: EditProps) => {
    useInitPage('inventory-edit-title');

    const [inventoryInfo] = useInventoryItemRequest(inventoryItemID);
    useInventoryItemResponse(inventoryInfo, inventoryItemID, onInit);

    if (inventoryInfo.error) {
        return null;
    }
    return (
        <InventoryBase
            method='PUT'
            inventoryItemID={inventoryItemID}
        />
    );
};

export { Edit as InventoryEdit };
