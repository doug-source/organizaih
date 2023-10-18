import { ProductCategoriesReducerEnum } from '@/Pages/App/Screens/ProductCategory/List/libraries/enums';
import { IProductCategory } from '@/Pages/App/Screens/ProductCategory/types';
import { DeletionPayload } from '@/Pages/App/libraries';

export namespace ProductCategoriesPayload {
    type Init = {
        type: ProductCategoriesReducerEnum.INIT;
        payload: IProductCategory[];
    };

    type Search = {
        type: ProductCategoriesReducerEnum.SEARCH;
        payload: string;
    };
    type Numeric = {
        type:
            | ProductCategoriesReducerEnum.CHANGE_PAGE
            | ProductCategoriesReducerEnum.CHANGE_GROUP
            | ProductCategoriesReducerEnum.CHANGE_LAST
            | ProductCategoriesReducerEnum.CHANGE_QTY;
        payload: number;
    };
    type Default = {
        type: ProductCategoriesReducerEnum.CHANGE_DEFAULT;
    };

    export type Skeleton<T> =
        | Init
        | Search
        | Numeric
        | Default
        | DeletionPayload.Skeleton<T>;
}
