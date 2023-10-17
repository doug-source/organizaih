import { ProductReducerEnum } from '@/Pages/App/Screens/Product/Form/libraries/enums';
import { IProduct } from '@/Pages/App/Screens/Product/types';
import { IProductCategory } from '@/Pages/App/Screens/ProductCategory/types';
import { Dispatch } from 'react';

export namespace ProductPayload {
    type changeProductPayloads =
        | { field: 'id'; value: IProduct['id'] }
        | { field: 'name'; value: IProduct['name'] }
        | { field: 'photo'; value: IProduct['photo'] }
        | { field: 'description'; value: IProduct['description'] }
        | { field: 'obs'; value: IProduct['obs'] }
        | { field: 'created_at'; value: IProduct['created_at'] }
        | { field: 'category'; value: IProduct['category'] }
        | { field: 'photoChosen'; value: IProduct['photoChosen'] };

    type ChangeProduct = {
        type: ProductReducerEnum.CHANGE_PRODUCT;
        payload: changeProductPayloads;
    };

    type changeCategoryPayloads =
        | { field: 'id'; value: IProductCategory['id'] }
        | { field: 'name'; value: IProductCategory['name'] }
        | { field: 'description'; value: IProductCategory['description'] }
        | { field: 'obs'; value: IProductCategory['obs'] };

    type ChangeCategory = {
        type: ProductReducerEnum.CHANGE_PRODUCT_CATEGORY;
        payload: changeCategoryPayloads;
    };

    type ChangeCategoryAll = {
        type: ProductReducerEnum.CHANGE_PRODUCT_CATEGORY_ALL;
        payload: IProductCategory;
    };

    type ChangeAll = {
        type: ProductReducerEnum.CHANGE_PRODUCT_ALL;
        payload: {
            [K in keyof IProduct]: IProduct[K];
        };
    };

    export type Skeleton =
        | ChangeProduct
        | ChangeCategory
        | ChangeCategoryAll
        | ChangeAll;
}

export type ProductDispatchType = Dispatch<ProductPayload.Skeleton> | null;
