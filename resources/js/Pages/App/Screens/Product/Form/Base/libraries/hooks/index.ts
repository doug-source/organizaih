import { ProductReducerEnum } from '@/Pages/App/Screens/Product/Form/libraries/enums';
import { useProductDispatch } from '@/Pages/App/Screens/Product/Form/libraries/hooks';
import { DataReducerEnum } from '@/Pages/App/libraries/enums';
import { useAppDispatch } from '@/Pages/App/libraries/hooks';
import { ChangeEventHandler, useCallback } from 'react';

export * from './submittions';

export const useProductNameHandler = (
    dispatch: ReturnType<typeof useProductDispatch>,
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
