import { ProductCategoryBase } from '@/Pages/App/Screens/ProductCategory/Form/Base';
import { productCategoryReducer } from '@/Pages/App/Screens/ProductCategory/Form/Base/libraries/reducers';
import {
    useProductCategoryRequest,
    useProductCategoryResponse,
} from '@/Pages/App/Screens/ProductCategory/Form/Edit/libraries/hooks';
import { ErrorsType } from '@/Pages/App/Screens/types';
import { useInitPage } from '@/Pages/App/libraries';
import { useReducer, useState } from 'react';

const Edit = () => {
    useInitPage('product-category-edit-title');

    const [productCategoryInfo] = useProductCategoryRequest();

    const [data, dispatch] = useReducer(productCategoryReducer, {
        productCategory: null,
    });
    useProductCategoryResponse(productCategoryInfo, dispatch);

    const [errors, setErrors] = useState<ErrorsType>(null);

    if (productCategoryInfo.error || data.productCategory === null) {
        return null;
    }
    return (
        <ProductCategoryBase
            action='/product-categories'
            productCategory={data.productCategory}
            errors={errors}
            setErrors={setErrors}
            dispatch={dispatch}
        />
    );
};

export { Edit as ProductCategoryEdit };
