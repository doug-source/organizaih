import { ProductCategoryBase } from '@/Pages/App/Screens/ProductCategory/Form/Base';
import { productCategoryReducer } from '@/Pages/App/Screens/ProductCategory/Form/Base/libraries/reducers';
import { ErrorsType } from '@/Pages/App/Screens/types';
import { useInitPage } from '@/Pages/App/libraries';
import { makeEmptyProductCategory } from '@/Pages/App/settings';
import { useReducer, useState } from 'react';

const Create = () => {
    useInitPage('product-category-create-title', false);
    const [errors, setErrors] = useState<ErrorsType>(null);
    const [data, dispatch] = useReducer(productCategoryReducer, {
        productCategory: makeEmptyProductCategory(),
    });

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

export { Create as ProductCategoryCreate };
