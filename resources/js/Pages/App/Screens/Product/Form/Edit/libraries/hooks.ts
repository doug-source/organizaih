import { OnInitFn } from '@/Pages/App/Screens/Product/Form/libraries';
import { IProduct } from '@/Pages/App/Screens/Product/types';
import {
    DataReducerEnum,
    useAPI,
    useAppDispatch,
    useGenericErrorHandler,
    useLoadingStatus,
    useSelections,
} from '@/Pages/App/libraries';
import { endpoints } from '@/settings';
import { useEffect } from 'react';

export const useProductRequest = (productID: number) => {
    const [productInfo] = useAPI<IProduct, { pagination: false }>(
        endpoints.product.data(productID),
    );
    useGenericErrorHandler(productInfo.error);
    return [productInfo] as const;
};

export const useProductResponse = (
    productID: number,
    productInfo: ReturnType<typeof useProductRequest>[0],
    onInit: OnInitFn,
) => {
    const loadingStatus = useLoadingStatus();
    const { action } = useSelections();
    const appDispatch = useAppDispatch();
    useEffect(() => {
        if (!loadingStatus || productInfo.error || !productInfo.data) {
            return;
        }
        if (!action) {
            appDispatch({
                type: DataReducerEnum.SELECTION_ACTION,
                payload: `${productID}/edit`,
            });
        }
        onInit(productInfo.data);
        appDispatch({ type: DataReducerEnum.LOADING, payload: false });
    }, [
        productInfo.error,
        productInfo.data,
        action,
        productID,
        onInit,
        appDispatch,
    ]);
};
