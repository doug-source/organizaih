import { OnInitFn } from '@/Pages/App/Screens/Product/Form/libraries';
import { useProduct } from '@/Pages/App/Screens/Product/Form/libraries/hooks';
import { DataReducerEnum } from '@/Pages/App/libraries/enums';
import { useAppDispatch, useLoadingStatus } from '@/Pages/App/libraries/hooks';
import { useEffect } from 'react';

export const useCreateInit = (onInit: OnInitFn) => {
    const loadingStatus = useLoadingStatus();
    const appDispatch = useAppDispatch();
    const product = useProduct();
    useEffect(() => {
        if (!loadingStatus) {
            return;
        }
        appDispatch({
            type: DataReducerEnum.SELECTION_ACTION,
            payload: 'create',
        });
        onInit(product);
        appDispatch({ type: DataReducerEnum.LOADING, payload: false });
    }, [appDispatch, loadingStatus, onInit, product]);
};
