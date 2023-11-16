import { ProfilePhotoInput } from '@/Pages/App/Components/ProfilePhotoInput';
import { ProductReducerEnum } from '@/Pages/App/Screens/Product/Form/libraries/enums';
import { useProductDispatch } from '@/Pages/App/Screens/Product/Form/libraries/hooks';
import { AppDispatchFn } from '@/Pages/App/Screens/Product/List/libraries';
import { DataReducerEnum } from '@/Pages/App/libraries';
import { ChangeEventHandler, ComponentPropsWithRef } from 'react';

type ValueArg = Parameters<
    Required<ComponentPropsWithRef<typeof ProfilePhotoInput>>['onChange']
>[0];

type DispatchFn = ReturnType<typeof useProductDispatch>;

export const makeProfilePhotoChange = (dispatch: DispatchFn) => {
    return (value: ValueArg) => {
        dispatch({
            type: ProductReducerEnum.CHANGE_PRODUCT,
            payload: { field: 'photoChosen', value },
        });
    };
};

export const makeCatSelectionClick = (appDispatch: AppDispatchFn) => {
    return () => {
        appDispatch({
            type: DataReducerEnum.TITLE,
            payload: '',
        });
        appDispatch({
            type: DataReducerEnum.SELECTION_TARGET,
            payload: 'products',
        });
    };
};

export const makeDescriptionChange = (
    dispatch: DispatchFn,
): ChangeEventHandler<HTMLTextAreaElement> => {
    return (evt) => {
        dispatch({
            type: ProductReducerEnum.CHANGE_PRODUCT,
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
            type: ProductReducerEnum.CHANGE_PRODUCT,
            payload: { field: 'obs', value: evt.target.value },
        });
    };
};
