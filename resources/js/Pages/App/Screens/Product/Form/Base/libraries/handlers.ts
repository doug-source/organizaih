import { ProfilePhotoInput } from '@/Pages/App/Components/ProfilePhotoInput';
import { ProductReducerEnum } from '@/Pages/App/Screens/Product/Form/libraries/enums';
import { useProductDispatch } from '@/Pages/App/Screens/Product/Form/libraries/hooks';
import { AppDispatchFn } from '@/Pages/App/Screens/Product/List/libraries';
import { DataReducerEnum } from '@/Pages/App/libraries';
import { ComponentPropsWithRef } from 'react';

type ChangeArgs = Parameters<
    Required<ComponentPropsWithRef<typeof ProfilePhotoInput>>['onChange']
>;

type ValueArg = ChangeArgs[0];

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
