import { ProductReducerEnum } from '@/Pages/App/Screens/Product/Form/libraries/enums';
import { useProductDispatch } from '@/Pages/App/Screens/Product/Form/libraries/hooks';
import { DataReducerEnum } from '@/Pages/App/libraries/enums';
import { useAppDispatch } from '@/Pages/App/libraries/hooks';
import { ChangeEventHandler, useCallback } from 'react';

export * from './submittions';

type DispathFn = ReturnType<typeof useProductDispatch>;

export const useProductNameHandler = (
    dispatch: DispathFn,
): ChangeEventHandler<HTMLInputElement> => {
    const appDispatch = useAppDispatch();
    return useCallback(
        (evt) => {
            const nameValue = evt.target.value;
            dispatch({
                type: ProductReducerEnum.CHANGE_PRODUCT,
                payload: { field: 'name', value: nameValue },
            });
            appDispatch({
                type: DataReducerEnum.SELECTION_PRODUCT_NAME,
                payload: {
                    key: 'products',
                    value: nameValue,
                },
            });
        },
        [dispatch, appDispatch],
    );
};

export const useProductDescriptionHandler = (
    dispatch: DispathFn,
): ChangeEventHandler<HTMLTextAreaElement> => {
    const appDispatch = useAppDispatch();
    return useCallback(
        (evt) => {
            const descriptionValue = evt.target.value;
            dispatch({
                type: ProductReducerEnum.CHANGE_PRODUCT,
                payload: { field: 'description', value: evt.target.value },
            });
            appDispatch({
                type: DataReducerEnum.SELECTION_PRODUCT_DESCRIPTION,
                payload: {
                    key: 'products',
                    value: descriptionValue,
                },
            });
        },
        [dispatch, appDispatch],
    );
};

export const useProductObsHandler = (
    dispatch: DispathFn,
): ChangeEventHandler<HTMLTextAreaElement> => {
    const appDispatch = useAppDispatch();
    return useCallback(
        (evt) => {
            const obsValue = evt.target.value;
            dispatch({
                type: ProductReducerEnum.CHANGE_PRODUCT,
                payload: { field: 'obs', value: evt.target.value },
            });
            appDispatch({
                type: DataReducerEnum.SELECTION_PRODUCT_OBS,
                payload: {
                    key: 'products',
                    value: obsValue,
                },
            });
        },
        [dispatch],
    );
};
