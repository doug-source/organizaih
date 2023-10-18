import { ProductCategoryReducerEnum } from '@/Pages/App/Screens/ProductCategory/Form/Base/libraries/enums';
import { IProductCategory } from '@/Pages/App/Screens/ProductCategory/types';

export namespace ProductCategoryPayload {
    type changeProdCatPayloads =
        | { field: 'id'; value: IProductCategory['id'] }
        | { field: 'name'; value: IProductCategory['name'] }
        | { field: 'description'; value: IProductCategory['description'] }
        | { field: 'obs'; value: IProductCategory['obs'] };

    type ChangeProCat = {
        type: ProductCategoryReducerEnum.CHANGE_PRODUCT_CATEGORY;
        payload: changeProdCatPayloads;
    };
    type ChangeProdCatAll = {
        type: ProductCategoryReducerEnum.CHANGE_PRODUCT_CATEGORY_ALL;
        payload: {
            [K in keyof IProductCategory]: IProductCategory[K];
        };
    };

    export type Skeleton = ChangeProCat | ChangeProdCatAll;
}
