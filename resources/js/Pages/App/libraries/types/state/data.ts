import { ICustomerListData } from '@/Pages/App/Screens/Customer';
import {
    ProductToInventory,
    ProductToSale,
} from '@/Pages/App/Screens/Product/types';
import { IProductCategory } from '@/Pages/App/Screens/ProductCategory/types';
import { DefaultTheme } from 'styled-components';

export const customerTargets = ['sales'] as const;
export const productTargets = ['sales', 'inventories'] as const;
export const productCategoryTargets = ['products'] as const;

const SelectionTargetsList = [
    ...new Set(
        [customerTargets, productTargets, productCategoryTargets].flat(),
    ),
] as const;

export type SelectionsTargetKeys = (typeof SelectionTargetsList)[number] | null;

export type ReducerSelectionsSales = {
    customer: ICustomerListData | null;
    product: ProductToSale | null;
    salesToSave: ProductToSale[];
};

export type ReducerSelectionsInventories = {
    product: ProductToInventory | null;
    inventoriesToSave: ProductToInventory[];
};

export type ReducerSelectionsProducts = {
    name: string;
    description: string;
    category: IProductCategory | null;
};

export type ReducerSelections = {
    target: SelectionsTargetKeys;
    action: string | null;
    sales: ReducerSelectionsSales;
    inventories: ReducerSelectionsInventories;
    products: ReducerSelectionsProducts;
};

export type DataReducerState = {
    title: string;
    loading: boolean | null;
    windowWidth: number | null;
    windowHeight: number | null;
    error: (object & { customMessage?: [string] }) | null;
    selections: ReducerSelections;
    theme: DefaultTheme;
};
