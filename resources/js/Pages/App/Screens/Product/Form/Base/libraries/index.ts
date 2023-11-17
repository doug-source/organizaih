import { IProduct } from '@/Pages/App/Screens/Product/types';
import { IProductCategory } from '@/Pages/App/Screens/ProductCategory/types';
import { DataReducerState } from '@/Pages/App/libraries/types/state/data';
import { translateFn } from '@/libraries';

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
    fileToUpload?: DataReducerState['photo'],
) => {
    const formData = new FormData();
    const {
        photoChosen,
        // eslint-disable-next-line no-unused-vars
        photo,
        ...product
    } = productInput;

    formData.append('name', product.name);
    formData.append('description', product.description || '');
    formData.append('obs', product.obs || '');
    formData.append(
        'productCategory',
        String(categorySelected?.id || product.category.id),
    );
    if (photoChosen && fileToUpload) {
        formData.append('photo', fileToUpload);
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
