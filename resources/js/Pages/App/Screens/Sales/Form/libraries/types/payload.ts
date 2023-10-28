import { ICustomerListData } from '@/Pages/App/Screens/Customer/List/types';
import { IInventoryListData } from '@/Pages/App/Screens/Inventory/List/types';
import { ProductToSale } from '@/Pages/App/Screens/Product/types';
import { SaleDefReducerEnum } from '@/Pages/App/Screens/Sales/Form/libraries/enums';

export namespace SaleDefinitionPayload {
    type NoPayload = {
        type:
            | SaleDefReducerEnum.TOGGLE_OPTION_CONFIRM
            | SaleDefReducerEnum.REMOVE_SALE;
    };
    type Numeric = {
        type:
            | SaleDefReducerEnum.INCLUDE_SALE_QTY
            | SaleDefReducerEnum.INCLUDE_SALE_PRICE;
        payload: number;
    };
    type ProductToSaleType = {
        type: SaleDefReducerEnum.INCLUDE_PRODUCT;
        payload: ProductToSale;
    };
    type CustomerToSaleType = {
        type: SaleDefReducerEnum.INCLUDE_CUSTOMER;
        payload: ICustomerListData;
    };
    type ProductsToSaleList = {
        type: SaleDefReducerEnum.REPLACE_SALE_LIST;
        payload: ProductToSale[];
    };
    type ProductToSaleList = {
        type:
            | SaleDefReducerEnum.INCLUDE_SALE_TO_SAVE
            | SaleDefReducerEnum.REMOVE_SALE_FROM_SAVE;
        payload: ProductToSale;
    };
    type InventoryStatus = {
        type: SaleDefReducerEnum.INVENTORY_STATUS;
        payload: boolean;
    };
    type InventoryFilled = {
        type: SaleDefReducerEnum.INVENTORY_FILLED;
        payload: boolean;
    };
    type InventoryData = {
        type: SaleDefReducerEnum.INVENTORY_DATA;
        payload: IInventoryListData | null;
    };
    type InventoryClear = {
        type: SaleDefReducerEnum.INVENTORY_CLEAR;
    };
    type ProductsFromDB = {
        type: SaleDefReducerEnum.INCLUDE_PRODUCTS_DB;
        payload: ProductToSale[];
    };

    export type Skeleton =
        | NoPayload
        | Numeric
        | ProductToSaleType
        | CustomerToSaleType
        | ProductsToSaleList
        | ProductToSaleList
        | InventoryStatus
        | InventoryFilled
        | InventoryData
        | InventoryClear
        | ProductsFromDB;
}
