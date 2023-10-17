import { ProductsReducerEnum } from '@/Pages/App/Screens/Product/List/libraries/enums';
import { IProductListData } from '@/Pages/App/Screens/Product/List/types';
import { DeletionPayload, ErrorFromRequest } from '@/Pages/App/libraries';

export namespace ProductsPayload {
    type Init = {
        type: ProductsReducerEnum.INIT;
        payload: IProductListData[];
    };
    type Search = {
        type: ProductsReducerEnum.SEARCH;
        payload: { search: string };
    };
    type Error = {
        type: ProductsReducerEnum.ERROR;
        payload: ErrorFromRequest & { customMessage: string };
    };
    type ChangeProductCategory = {
        type: ProductsReducerEnum.CHANGE_PRODUCT_CATEGORY;
        payload: string;
    };
    type Refresh = {
        type: ProductsReducerEnum.REFRESH;
    };
    type ChangePage = {
        type: ProductsReducerEnum.CHANGE_PAGE;
        payload: number;
    };
    type Numeric = {
        type:
            | ProductsReducerEnum.CHANGE_GROUP
            | ProductsReducerEnum.CHANGE_LAST
            | ProductsReducerEnum.CHANGE_QTY;
        payload: number;
    };

    export type Skeleton<T> =
        | Init
        | Search
        | Error
        | ChangeProductCategory
        | Refresh
        | ChangePage
        | Numeric
        | DeletionPayload.Skeleton<T>;
}
