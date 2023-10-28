import { ICustomerListData } from '@/Pages/App/Screens/Customer/List/types';
import { IInventoryListData } from '@/Pages/App/Screens/Inventory/List/types';
import { ProductToSale } from '@/Pages/App/Screens/Product/types';

type InventoryBox = {
    requested: boolean;
    filled: boolean;
    data: IInventoryListData | null;
};

export type SaleDefinitionReducerState = {
    optionsConfirm: boolean;
    productToSale: ProductToSale | null;
    salesFromDB: ProductToSale[];
    salesToSave: ProductToSale[];
    inventoryEndpoint: string;
    inventory: InventoryBox;
    customer: ICustomerListData | null;
};
