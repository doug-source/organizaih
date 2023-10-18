import { DispatchFn } from '@/Pages/App/Screens/ProductCategory/Form/Base/libraries';
import { ProductCategoryReducerEnum } from '@/Pages/App/Screens/ProductCategory/Form/Base/libraries/enums';
import { ChangeEventHandler } from 'react';

export const makeNameChange = (
    dispatch: DispatchFn,
): ChangeEventHandler<HTMLInputElement> => {
    return (evt) => {
        dispatch({
            type: ProductCategoryReducerEnum.CHANGE_PRODUCT_CATEGORY,
            payload: { field: 'name', value: evt.target.value },
        });
    };
};

export const makeDescriptionChange = (
    dispatch: DispatchFn,
): ChangeEventHandler<HTMLTextAreaElement> => {
    return (evt) => {
        dispatch({
            type: ProductCategoryReducerEnum.CHANGE_PRODUCT_CATEGORY,
            payload: {
                field: 'description',
                value: evt.target.value,
            },
        });
    };
};

export const makeObsChange = (
    dispatch: DispatchFn,
): ChangeEventHandler<HTMLTextAreaElement> => {
    return (evt) => {
        dispatch({
            type: ProductCategoryReducerEnum.CHANGE_PRODUCT_CATEGORY,
            payload: { field: 'obs', value: evt.target.value },
        });
    };
};
