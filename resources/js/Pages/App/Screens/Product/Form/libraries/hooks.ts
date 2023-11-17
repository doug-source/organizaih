import {
    ProductContext,
    ProductDispatchContext,
    ProductErrorsContext,
    ProductErrorsSetterContext,
} from '@/Pages/App/Screens/Product/Form/libraries/contexts';
import { ProductReducerEnum } from '@/Pages/App/Screens/Product/Form/libraries/enums';
import { productReducer } from '@/Pages/App/Screens/Product/Form/libraries/reducers';
import { IProduct } from '@/Pages/App/Screens/Product/types';
import { ErrorsType } from '@/Pages/App/Screens/types';
import { usePhotoFile, useSelections } from '@/Pages/App/libraries/hooks';
import { makeContextError } from '@/libraries';
import { Dispatch, useCallback, useContext, useState } from 'react';

export const useErrors = () => {
    const errors = useContext(ProductErrorsContext);
    if (errors === null) {
        throw makeContextError('useErrors', 'ProductErrorsContext');
    }
    return errors;
};

export const useErrorsSetter = () => {
    const setErrors = useContext(ProductErrorsSetterContext);
    if (setErrors === null) {
        throw makeContextError('useErrorsSetter', 'ProductErrorsSetterContext');
    }
    return setErrors;
};

export const useProduct = () => {
    const product = useContext(ProductContext);
    if (product === null) {
        throw makeContextError('useProduct', 'ProductContext');
    }
    return product;
};

export const useProductDispatch = () => {
    const dispatch = useContext(ProductDispatchContext);
    if (dispatch === null) {
        throw makeContextError('useProductDispatch', 'ProductDispatchContext');
    }
    return dispatch;
};

export const useProductFormErrors = () => {
    const [errors, setErrors] = useState<ErrorsType>({});
    return [errors, setErrors] as const;
};

type ReducerSelections = ReturnType<typeof useSelections>;
type Fields = Exclude<
    keyof ReducerSelections['products'] & keyof IProduct,
    'category'
>;

const detachProductValue = (
    field: Fields,
    selections: ReducerSelections,
    product: IProduct,
) => {
    return selections.products[field] || product[field];
};

export const useProductFormInit = (
    dispatch: Dispatch<Parameters<typeof productReducer>[1]>,
) => {
    const selections = useSelections();
    const photoFile = usePhotoFile();
    return useCallback(
        (product: IProduct) => {
            dispatch({
                type: ProductReducerEnum.CHANGE_PRODUCT_ALL,
                payload: {
                    ...product,
                    name: detachProductValue('name', selections, product),
                    description: detachProductValue(
                        'description',
                        selections,
                        product,
                    ),
                    obs: detachProductValue('obs', selections, product),
                    photoChosen: photoFile?.name ?? product.photoChosen,
                    category: selections.products.category ?? product.category,
                },
            });
        },
        [dispatch, selections.products.category, photoFile],
    );
};
