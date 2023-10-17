import { ProductFormCreate } from '@/Pages/App/Screens/Product/Form/Create';
import { ProductFormEdit } from '@/Pages/App/Screens/Product/Form/Edit';
import { ContextPack } from '@/Pages/App/Screens/Product/Form/libraries/contexts';
import { useProductFormInit } from '@/Pages/App/Screens/Product/Form/libraries/hooks';
import { productReducer } from '@/Pages/App/Screens/Product/Form/libraries/reducers';
import { ErrorsType } from '@/Pages/App/Screens/types';
import { makeEmptyProduct } from '@/Pages/App/settings';
import { useReducer, useState } from 'react';
import { useParams } from 'react-router-dom';

const Form = () => {
    const [errors, setErrors] = useState<ErrorsType>({});
    const [data, dispatch] = useReducer(productReducer, {
        product: makeEmptyProduct(),
    });

    const { id: productID } = useParams();
    const onInit = useProductFormInit(dispatch);

    if (productID) {
        return (
            <ContextPack
                errors={errors}
                setErrors={setErrors}
                dispatch={dispatch}
                product={data.product}
            >
                <ProductFormEdit
                    productID={Number(productID)}
                    onInit={onInit}
                />
            </ContextPack>
        );
    }
    return (
        <ContextPack
            errors={errors}
            setErrors={setErrors}
            dispatch={dispatch}
            product={data.product}
        >
            <ProductFormCreate onInit={onInit} />
        </ContextPack>
    );
};

export { Form as ProductForm };
