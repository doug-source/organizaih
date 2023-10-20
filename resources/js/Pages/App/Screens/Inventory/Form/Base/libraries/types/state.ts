import { ProductToInventory } from '@/Pages/App/Screens/Product/types';

export type InventoryDefinitionReducerState = {
    optionsConfirm: boolean;
    productToInventory: ProductToInventory | null;
    productsToInventory: ProductToInventory[];
    inventoriesFromDB: ProductToInventory[];
};
