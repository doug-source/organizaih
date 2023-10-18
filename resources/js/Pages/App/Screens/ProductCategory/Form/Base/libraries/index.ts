import { productCategoryReducer } from '@/Pages/App/Screens/ProductCategory/Form/Base/libraries/reducers';
import { IProductCategory } from '@/Pages/App/Screens/ProductCategory/types';
import { Dispatch } from 'react';

export * from './handlers';
export * from './hooks';

export type ReducerState = Parameters<typeof productCategoryReducer>[0];
export type DispatchFn = Dispatch<Parameters<typeof productCategoryReducer>[1]>;

export const buildFormData = (
    productCategoryInput: IProductCategory | null,
) => {
    const formData = new FormData();
    if (productCategoryInput === null) {
        return formData;
    }
    formData.append('name', productCategoryInput!.name);
    formData.append('description', productCategoryInput!.description || '');
    formData.append('obs', productCategoryInput!.obs || '');

    if (productCategoryInput.id) {
        // edit
        formData.append('_method', 'PUT');
    }
    // otherwise create

    return formData;
};
