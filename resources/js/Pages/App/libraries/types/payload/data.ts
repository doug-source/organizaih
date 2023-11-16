import { ICustomerListData } from '@/Pages/App/Screens/Customer/List/types';
import { IProductListData } from '@/Pages/App/Screens/Product/List/types';
import {
    ProductToInventory,
    ProductToSale,
} from '@/Pages/App/Screens/Product/types';
import { IProductCategory } from '@/Pages/App/Screens/ProductCategory/types';
import { DataReducerEnum } from '@/Pages/App/libraries/enums';
import {
    DataReducerState,
    ReducerSelections,
    SelectionsTargetKeys,
    customerTargets,
    productCategoryTargets,
    productTargets,
} from '@/Pages/App/libraries/types/state';

export namespace DataPayload {
    type Title = {
        type: DataReducerEnum.TITLE;
        payload: DataReducerState['title'];
    };
    type Error = {
        type: DataReducerEnum.ERROR;
        payload: DataReducerState['error'];
    };
    type Loading = {
        type: DataReducerEnum.LOADING;
        payload: DataReducerState['loading'];
    };
    type SelectionTarget = {
        type: DataReducerEnum.SELECTION_TARGET;
        payload: SelectionsTargetKeys;
    };
    type SelectionAction = {
        type: DataReducerEnum.SELECTION_ACTION;
        payload: ReducerSelections['action'];
    };
    type SelectionClear = {
        type: DataReducerEnum.SELECTION_CLEAR;
    };
    type SelectionProduct = {
        type: DataReducerEnum.SELECTION_PRODUCT;
        payload: {
            key: (typeof productTargets)[number];
            value: IProductListData | null;
        };
    };
    type SelectionProductCategory = {
        type: DataReducerEnum.SELECTION_PRODUCT_CATEGORY;
        payload: {
            key: (typeof productCategoryTargets)[number];
            value: IProductCategory | null;
        };
    };
    type SelectionSalesSavedItemAddAll = {
        type: DataReducerEnum.SELECTION_SALES_SAVED_ITEM_ADD_ALL;
        payload: ProductToSale[];
    };
    type SelectionInventoriesSavedItemAddAll = {
        type: DataReducerEnum.SELECTION_INVENTORIES_SAVED_ITEM_ADD_ALL;
        payload: ProductToInventory[];
    };
    type WindowResize = {
        type: DataReducerEnum.WINDOW_RESIZE;
        payload: {
            width: DataReducerState['windowWidth'];
            height: DataReducerState['windowHeight'];
        };
    };

    type ChangeTheme = {
        type: DataReducerEnum.CHANGE_THEME;
    };
    type SelectionCustomer = {
        type: DataReducerEnum.SELECTION_CUSTOMER;
        payload: {
            key: (typeof customerTargets)[number];
            value: ICustomerListData | null;
        };
    };
    type SelectionProductProperty = {
        type:
            | DataReducerEnum.SELECTION_PRODUCT_NAME
            | DataReducerEnum.SELECTION_PRODUCT_DESCRIPTION
            | DataReducerEnum.SELECTION_PRODUCT_OBS;
        payload: {
            key: (typeof productCategoryTargets)[number];
            value: string;
        };
    };
    export type Skeleton =
        | Title
        | Error
        | Loading
        | SelectionTarget
        | SelectionAction
        | SelectionClear
        | SelectionProduct
        | SelectionProductCategory
        | SelectionProductProperty
        | SelectionSalesSavedItemAddAll
        | SelectionInventoriesSavedItemAddAll
        | WindowResize
        | ChangeTheme
        | SelectionCustomer;
}
