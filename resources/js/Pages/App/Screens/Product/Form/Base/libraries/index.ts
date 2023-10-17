import { IProduct } from '@/Pages/App/Screens/Product/types';
import { IProductCategory } from '@/Pages/App/Screens/ProductCategory/types';
import { translateFn } from '@/libraries';
import { RefObject } from 'react';

export const dettachCategoryName = (
    product: IProduct,
    translate: translateFn,
) => {
    const prodCategory = product.category;
    if (!prodCategory || prodCategory.id === 1) {
        return translate('product-category-default', true);
    }
    return prodCategory.name;
};

export const buildFormData = (
    productInput: IProduct,
    categorySelected: IProductCategory,
    inputFile: RefObject<HTMLInputElement>,
) => {
    const formData = new FormData();
    const {
        photoChosen,
        // eslint-disable-next-line no-unused-vars
        photo,
        ...product
    } = productInput;
    const file: File | undefined = (inputFile.current?.files || [])[0];

    formData.append('name', product.name);
    formData.append('description', product.description || '');
    formData.append('obs', product.obs || '');
    formData.append(
        'productCategory',
        String(categorySelected?.id || product.category.id),
    );
    if (photoChosen && file) {
        formData.append('photo', file);
    }
    if (product.id) {
        // edit
        formData.append('_method', 'PUT');
    }
    // otherwise create

    return formData;
};

export * from './handlers';
export * from './hooks';
