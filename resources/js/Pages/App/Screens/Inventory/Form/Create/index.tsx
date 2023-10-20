import { InventoryBase } from '@/Pages/App/Screens/Inventory/Form/Base';
import { useCreateSelection } from '@/Pages/App/Screens/Inventory/Form/Create/libraries';
import { InventoryFormInitFn } from '@/Pages/App/Screens/Inventory/Form/libraries';
import { useInitPage, useSelections } from '@/Pages/App/libraries/hooks';

type CreateProps = {
    onInit: InventoryFormInitFn;
};
const Create = ({ onInit }: CreateProps) => {
    const { target } = useSelections();

    useInitPage('inventory-create-title', false);
    useCreateSelection(target, onInit);

    return <InventoryBase />;
};

export { Create as InventoryCreate };
